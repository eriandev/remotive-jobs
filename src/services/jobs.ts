import { API_URL } from '@/shared/consts'
import type { ApiJobListResponse, JobListResponse } from '@/services/types'

export async function getJobListByPage(page = 1): Promise<JobListResponse> {
  try {
    const response = await fetch(API_URL + `/${page}/`)
    const jobListResponse = (await response.json()) as ApiJobListResponse

    return {
      prev: jobListResponse.prev,
      next: jobListResponse.next,
      jobCount: jobListResponse.job_count,
      totalPages: jobListResponse.total_pages,
      jobsPerPage: jobListResponse.jobs_per_page,
      results: jobListResponse.results.map((job) => ({
        ...job,
        jobType: job.job_type,
        companyLogo: job.company_logo,
        companyName: job.company_name,
        publicationDate: job.publication_date,
        requiredLocation: job.candidate_required_location,
      })),
    }
  } catch (error) {
    console.error(error)

    return {
      jobCount: 0,
      totalPages: 0,
      jobsPerPage: 0,
      results: [],
    }
  }
}
