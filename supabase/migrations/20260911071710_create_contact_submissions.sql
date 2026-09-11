/*
# Create contact_submissions table

## Purpose
Stores project intake form submissions from the PerpetualTech agency website contact section.

## New Tables
- `contact_submissions`
  - `id` (uuid, primary key, auto-generated)
  - `full_name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's work email
  - `company` (text) — company or brand name
  - `budget_range` (text) — selected budget range
  - `services` (text[], not null) — array of requested services (Web Dev, Cloud/DevOps, Ads/Marketing)
  - `project_description` (text) — free-form project description
  - `status` (text, default 'new') — submission status for internal tracking
  - `created_at` (timestamptz, default now()) — submission timestamp

## Security
- RLS enabled on `contact_submissions`.
- This is a no-auth public contact form, so anon + authenticated roles can INSERT.
- No SELECT/UPDATE/DELETE policies for anon — only the service role can read/manage submissions.
- This prevents public reads of other people's submissions while allowing form submissions.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  company text,
  budget_range text,
  services text[] NOT NULL DEFAULT '{}',
  project_description text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
