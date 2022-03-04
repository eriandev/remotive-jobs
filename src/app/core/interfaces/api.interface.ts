export interface Job {
  id: number;
  url: string;
  title: string;
  salary: string;
  tags: string[];
  category: string;
  job_type: string;
  description: string;
  company_name: string;
  company_logo: string;
  publication_date: string;
  candidate_required_location: string;
}

export interface JobResponse {
  job_count: number;
  total_pages: number;
  jobs_per_page: number;
  prev: string;
  next: string;
  results: Job[];
}

export interface JobSectionResponse {
  tag_count: number;
  tags: string[];
}

export type JobSections = 'category' | 'type';
