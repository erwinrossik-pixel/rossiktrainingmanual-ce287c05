-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  avatar_url TEXT,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_roles table for role management (security best practice)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Create chapters table for chapter metadata
CREATE TABLE public.chapters (
  id TEXT PRIMARY KEY,
  order_index INTEGER NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  module TEXT,
  is_intro BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chapter_progress table for tracking user progress
CREATE TABLE public.chapter_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  chapter_id TEXT REFERENCES public.chapters(id) ON DELETE CASCADE NOT NULL,
  status TEXT NOT NULL DEFAULT 'locked' CHECK (status IN ('locked', 'unlocked', 'in_progress', 'completed')),
  best_score INTEGER DEFAULT 0,
  attempts_count INTEGER DEFAULT 0,
  completed_at TIMESTAMP WITH TIME ZONE,
  last_attempt_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, chapter_id)
);

-- Create quiz_attempts table for storing each quiz attempt
CREATE TABLE public.quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  chapter_id TEXT REFERENCES public.chapters(id) ON DELETE CASCADE NOT NULL,
  language TEXT NOT NULL CHECK (language IN ('ro', 'en', 'de')),
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL DEFAULT 10,
  passed BOOLEAN NOT NULL DEFAULT false,
  questions_answered JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chapter_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents recursive RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Create function to get user role from profiles
CREATE OR REPLACE FUNCTION public.get_user_role(_user_id UUID)
RETURNS app_role
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role FROM public.profiles WHERE id = _user_id
$$;

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR SELECT USING (public.get_user_role(auth.uid()) = 'admin');

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for user_roles
CREATE POLICY "Users can view own roles" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles" ON public.user_roles
  FOR SELECT USING (public.get_user_role(auth.uid()) = 'admin');

CREATE POLICY "Admins can manage roles" ON public.user_roles
  FOR ALL USING (public.get_user_role(auth.uid()) = 'admin');

-- RLS Policies for chapters (public read)
CREATE POLICY "Anyone can view chapters" ON public.chapters
  FOR SELECT USING (true);

-- RLS Policies for chapter_progress
CREATE POLICY "Users can view own progress" ON public.chapter_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON public.chapter_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON public.chapter_progress
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all progress" ON public.chapter_progress
  FOR SELECT USING (public.get_user_role(auth.uid()) = 'admin');

-- RLS Policies for quiz_attempts
CREATE POLICY "Users can view own attempts" ON public.quiz_attempts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own attempts" ON public.quiz_attempts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all attempts" ON public.quiz_attempts
  FOR SELECT USING (public.get_user_role(auth.uid()) = 'admin');

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data ->> 'first_name',
    NEW.raw_user_meta_data ->> 'last_name',
    'user'
  );
  
  -- Also insert into user_roles table
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

-- Trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_chapter_progress_updated_at
  BEFORE UPDATE ON public.chapter_progress
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();