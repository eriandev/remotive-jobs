export interface JobListResponse {
  next?: string
  prev?: string
  jobCount: number
  totalPages: number
  jobsPerPage: number
  results: Job[]
}

export type Job = Omit<
  ApiJob,
  'job_type' | 'company_logo' | 'company_name' | 'publication_date' | 'candidate_required_location'
> & {
  jobType: string
  companyLogo: string
  companyName: string
  publicationDate: string
  requiredLocation: string
}

export interface ApiJobListResponse {
  next?: string
  prev?: string
  job_count: number
  total_pages: number
  jobs_per_page: number
  results: ApiJob[]
}

export interface ApiJob {
  id: number
  url: string
  title: string
  tags: string[]
  salary: string
  category: string
  job_type: string
  description: string
  company_name: string
  company_logo: string
  publication_date: string
  company_logo_url?: string
  candidate_required_location: string
}
