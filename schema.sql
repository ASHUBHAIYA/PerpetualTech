DROP TABLE IF EXISTS contact_submissions;

CREATE TABLE contact_submissions (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  budget_range TEXT,
  services TEXT,
  project_description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);