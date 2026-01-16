-- Multi-modal content for chapters
CREATE TABLE public.chapter_media (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  chapter_id TEXT NOT NULL,
  media_type TEXT NOT NULL CHECK (media_type IN ('video_script', 'audio_summary', 'diagram', 'infographic')),
  language TEXT DEFAULT 'ro',
  title TEXT NOT NULL,
  content JSONB NOT NULL,
  duration_estimate INTEGER, -- in seconds for video/audio
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Audio cache for generated TTS
CREATE TABLE public.audio_cache (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  chapter_id TEXT NOT NULL,
  language TEXT NOT NULL,
  text_hash TEXT NOT NULL,
  audio_url TEXT,
  voice_id TEXT,
  duration_seconds INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(chapter_id, language, text_hash)
);

-- User media progress tracking
CREATE TABLE public.media_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  media_id UUID REFERENCES public.chapter_media(id) ON DELETE CASCADE,
  progress_percent INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP WITH TIME ZONE,
  last_position INTEGER DEFAULT 0, -- for audio/video resume
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, media_id)
);

-- Enable RLS
ALTER TABLE public.chapter_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audio_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_progress ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Anyone can view chapter media" ON public.chapter_media FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage chapter media" ON public.chapter_media FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

CREATE POLICY "Anyone can view audio cache" ON public.audio_cache FOR SELECT USING (true);
CREATE POLICY "System can manage audio cache" ON public.audio_cache FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

CREATE POLICY "Users can view own media progress" ON public.media_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own media progress" ON public.media_progress FOR ALL USING (auth.uid() = user_id);

-- Insert sample multi-modal content for first chapters
INSERT INTO public.chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index) VALUES
-- Intro chapter
('intro', 'audio_summary', 'ro', 'Rezumat Audio: Introducere', '{"text": "Bun venit în industria freight forwarding! În acest capitol vei descoperi fundamentele expedierii de mărfuri, rolul expeditorului și cum funcționează lanțul logistic internațional. Vei învăța despre documentele esențiale, tipurile de transport și primii pași în cariera ta de expeditor.", "voice": "onwK4e9ZLuTAKqWW03F9"}', 45, 1),
('intro', 'diagram', 'ro', 'Fluxul Operațional', '{"type": "flowchart", "mermaid": "graph TD\n    A[Client] -->|Cerere Ofertă| B[Expeditor]\n    B -->|Verificare Disponibilitate| C[Transportator]\n    C -->|Confirmare| B\n    B -->|Ofertă| A\n    A -->|Comandă| B\n    B -->|Booking| C\n    C -->|Transport| D[Destinație]\n    D -->|POD| B\n    B -->|Factură| A"}', null, 2),
('intro', 'video_script', 'ro', 'Script Video: Primul Tău Transport', '{"scenes": [{"title": "Intro", "duration": 10, "narration": "Salut! Astăzi vom parcurge împreună primul tău transport internațional.", "visuals": "Logo animat, tranziție la birou"}, {"title": "Primirea Cererii", "duration": 20, "narration": "Totul începe cu o cerere de la client. Trebuie să înțelegi: ce marfă, de unde, încotro, când.", "visuals": "Ecran email cu cerere client"}, {"title": "Calculul Ofertei", "duration": 30, "narration": "Verifici disponibilitatea transportatorilor, calculezi costurile și adaugi marja.", "visuals": "Calculator preț, TMS screenshot"}, {"title": "Booking-ul", "duration": 20, "narration": "Odată acceptată oferta, creezi booking-ul și transmiți detaliile transportatorului.", "visuals": "Formular booking"}, {"title": "Monitorizarea", "duration": 20, "narration": "Urmărești transportul și comunici proactiv cu clientul.", "visuals": "GPS tracking, chat"}, {"title": "Finalizare", "duration": 20, "narration": "Confirmi livrarea, obții POD și emiți factura.", "visuals": "POD document, factură"}]}', 120, 3),

-- Documents chapter
('documents', 'audio_summary', 'ro', 'Rezumat Audio: Documente Transport', '{"text": "Documentele sunt coloana vertebrală a transportului internațional. CMR-ul este scrisoarea de trăsură pentru transport rutier, obligatorie pentru fiecare transport. Factura comercială descrie marfa și valoarea. Packing list-ul detaliază conținutul. Pentru ADR ai nevoie de documente speciale. Fără documente corecte, marfa nu pleacă!", "voice": "onwK4e9ZLuTAKqWW03F9"}', 50, 1),
('documents', 'diagram', 'ro', 'Tipuri de Documente', '{"type": "mindmap", "mermaid": "mindmap\n  root((Documente))\n    Transport\n      CMR\n      Scrisoare Aviație AWB\n      Bill of Lading\n    Comerciale\n      Factură\n      Packing List\n      Certificate Origine\n    Vamale\n      DAU Export\n      DAU Import\n      T1/T2\n    Speciale\n      ADR\n      Fitosanitar\n      Veterinar"}', null, 2),

-- Pricing chapter
('pricing', 'audio_summary', 'ro', 'Rezumat Audio: Calculul Prețurilor', '{"text": "Prețul în transport se calculează pe baza distanței, tipului de marfă, greutății și volumului. Formula magică: greutatea taxabilă este maximul dintre greutatea reală și greutatea volumetrică. Nu uita să adaugi taxele suplimentare: combustibil, taxe de drum, timpi de așteptare. Marja ta trebuie să acopere riscurile și să-ți asigure profitul.", "voice": "onwK4e9ZLuTAKqWW03F9"}', 45, 1),
('pricing', 'diagram', 'ro', 'Formula Prețului', '{"type": "flowchart", "mermaid": "graph LR\n    A[Greutate Reală] --> C{MAX}\n    B[Greutate Vol.] --> C\n    C --> D[Greutate Taxabilă]\n    D --> E[x Tarif/kg]\n    E --> F[Cost Bază]\n    F --> G[+ Surcharge Combustibil]\n    G --> H[+ Taxe Drum]\n    H --> I[+ Alte Costuri]\n    I --> J[Cost Total]\n    J --> K[+ Marjă %]\n    K --> L[PREȚ FINAL]"}', null, 2),

-- ADR chapter
('adr', 'audio_summary', 'ro', 'Rezumat Audio: Transport ADR', '{"text": "ADR înseamnă transport de mărfuri periculoase. Sunt 9 clase: explozivi, gaze, lichide inflamabile, solide, substanțe oxidante, toxice, radioactive, corozive și diverse. Fiecare necesită etichetare specifică, documente speciale și șoferi cu certificat ADR. Nerespectarea regulilor duce la amenzi uriașe și pericol pentru viață.", "voice": "onwK4e9ZLuTAKqWW03F9"}', 55, 1),
('adr', 'diagram', 'ro', 'Clasele ADR', '{"type": "diagram", "mermaid": "graph TB\n    subgraph Clase ADR\n    A[Clasa 1<br/>Explozivi 💥]\n    B[Clasa 2<br/>Gaze 🔵]\n    C[Clasa 3<br/>Lichide Inflamabile 🔥]\n    D[Clasa 4<br/>Solide Inflamabile]\n    E[Clasa 5<br/>Oxidanți]\n    F[Clasa 6<br/>Toxice ☠️]\n    G[Clasa 7<br/>Radioactive ☢️]\n    H[Clasa 8<br/>Corozive]\n    I[Clasa 9<br/>Diverse]\n    end"}', null, 2),

-- Customs chapter  
('customs', 'audio_summary', 'ro', 'Rezumat Audio: Proceduri Vamale', '{"text": "Vama este punctul de control pentru mărfuri internaționale. Export: declari marfa, obții MRN, marfa poate pleca. Import: plătești taxe vamale și TVA, sau folosești regimuri speciale. Codul tarifar determină taxele. Greșelile în declarații duc la amenzi și întârzieri. Lucrează cu un broker vamal de încredere!", "voice": "onwK4e9ZLuTAKqWW03F9"}', 50, 1),
('customs', 'diagram', 'ro', 'Fluxul Vamal', '{"type": "flowchart", "mermaid": "graph TD\n    A[Marfă Pregătită] --> B{Tip Operațiune}\n    B -->|Export| C[Declarație Export]\n    B -->|Import| D[Declarație Import]\n    C --> E[Obținere MRN]\n    E --> F[Ieșire din UE]\n    D --> G[Control Fizic?]\n    G -->|Da| H[Inspecție]\n    G -->|Nu| I[Plată Taxe]\n    H --> I\n    I --> J[Eliberare Marfă]"}', null, 2),

-- Incoterms chapter
('incoterms', 'audio_summary', 'ro', 'Rezumat Audio: Incoterms 2020', '{"text": "Incoterms definesc cine plătește ce și cine riscă ce. EXW: clientul face totul. FOB și CIF: pentru transport maritim. DAP: livrare la destinație, vama pe client. DDP: vânzătorul face absolut totul. Întotdeauna verifică Incoterms înainte de a face oferta - determină responsabilitățile tale!", "voice": "onwK4e9ZLuTAKqWW03F9"}', 45, 1),
('incoterms', 'diagram', 'ro', 'Scala Incoterms', '{"type": "diagram", "mermaid": "graph LR\n    subgraph Responsabilitate Cumpărător\n    A[EXW] --> B[FCA] --> C[CPT] --> D[CIP] --> E[DAP] --> F[DPU] --> G[DDP]\n    end\n    subgraph Responsabilitate Vânzător\n    G --> F --> E --> D --> C --> B --> A\n    end"}', null, 2);

-- Add more chapters...
INSERT INTO public.chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index) VALUES
('claims', 'audio_summary', 'ro', 'Rezumat Audio: Gestionarea Reclamațiilor', '{"text": "Reclamațiile sunt inevitabile în transport. Regula de aur: documentează totul! Fotografii la încărcare și descărcare, CMR-uri semnate cu rezerve, notificări scrise imediate. Termenul pentru reclamații CMR este de 7 zile pentru daune vizibile. Asigurarea de marfă te protejează, dar trebuie să respecți procedurile.", "voice": "onwK4e9ZLuTAKqWW03F9"}', 45, 1),
('claims', 'diagram', 'ro', 'Procesul de Reclamație', '{"type": "flowchart", "mermaid": "graph TD\n    A[Daună Detectată] --> B[Fotografii + Documente]\n    B --> C[Notificare Scrisă 24h]\n    C --> D{Tip Daună}\n    D -->|Vizibilă| E[Rezerve pe CMR]\n    D -->|Ascunsă| F[Notificare 7 zile]\n    E --> G[Reclamație Formală]\n    F --> G\n    G --> H[Evaluare Daună]\n    H --> I[Negociere]\n    I --> J[Despăgubire]"}', null, 2),

('vehicle', 'audio_summary', 'ro', 'Rezumat Audio: Tipuri de Vehicule', '{"text": "Cunoaște-ți flota! Prelata standard: 13.6m, 33 paleți europeni, 24 tone. Mega sau Jumbo: 3m înălțime pentru volum. Frigo: temperatură controlată pentru perisabile. Cisternă: lichide. Platformă: utilaje grele. Alegerea vehiculului corect determină succesul transportului.", "voice": "onwK4e9ZLuTAKqWW03F9"}', 40, 1),
('vehicle', 'diagram', 'ro', 'Tipuri de Vehicule', '{"type": "diagram", "mermaid": "graph TB\n    subgraph Vehicule Rutiere\n    A[Prelată Standard<br/>13.6m / 24t / 33EP]\n    B[Mega Trailer<br/>3m înălțime]\n    C[Frigo<br/>Temperatură controlată]\n    D[Cisternă<br/>Lichide/Gaze]\n    E[Platformă<br/>Utilaje grele]\n    F[Autotren<br/>25.25m / 60t]\n    end"}', null, 2);

-- Create index for faster queries
CREATE INDEX idx_chapter_media_chapter ON public.chapter_media(chapter_id, language, is_active);
CREATE INDEX idx_media_progress_user ON public.media_progress(user_id, media_id);