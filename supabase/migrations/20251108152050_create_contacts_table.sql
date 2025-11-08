/*
  # Create contacts table

  1. New Tables
    - `contacts`
      - `id` (bigserial, primary key)
      - `name` (text, not null) - visitor's name
      - `email` (text, not null) - visitor's email
      - `message` (text) - contact message
      - `created_at` (timestamptz) - timestamp of submission

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for anonymous users to insert their contact messages
*/

CREATE TABLE IF NOT EXISTS public.contacts (
  id bigserial PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous users to insert contacts"
  ON public.contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);
