UPDATE auth.users
SET encrypted_password = crypt('Rossik2026!', gen_salt('bf')),
    email_confirmed_at = COALESCE(email_confirmed_at, now()),
    updated_at = now()
WHERE email = 'zloi110689@gmail.com';