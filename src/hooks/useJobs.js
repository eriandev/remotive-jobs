import { useEffect, useState } from 'react'
import { API_URL } from '@/consts'

/**
 * @param {React.Dispatch<React.SetStateAction<[]>>} setJobList
 */
export default function useJobs(setJobList) {
  const [nextPage, setNextPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(10)

  useEffect(() => {
    updateJobList()
  }, [])

  const updateJobList = async () => {
    if (nextPage >= totalPages) return

    setLoading(true)
    try {
      const response = await fetch(`${API_URL}/${nextPage}/`)
      /** @type {JobResponse} */
      const jobs = await response.json()
      const newJobs = jobs.results.map((job) => ({
        id: job?.id,
        url: job?.url,
        tags: job?.tags,
        title: job?.title,
        salary: job?.salary,
        jobType: job?.job_type,
        category: job?.category,
        description: job?.description,
        companyLogo: job?.company_logo,
        companyName: job?.company_name,
        publicationDate: job?.publication_date,
        requiredLocation: job?.candidate_required_location,
      }))

      setTotalPages(jobs.total_pages)
      setNextPage((currentPage) => currentPage + 1)
      setJobList((previousJobs) => [...previousJobs, ...newJobs])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { loading, updateJobList }
}

/**
 * @typedef {object} JobResponse
 * @prop {number} job_count
 * @prop {number} jobs_per_page
 * @prop {string=} prev
 * @prop {string=} next
 * @prop {Job[]} results
 * @prop {number} total_pages
 */

/**
 * @typedef Job
 * @prop {number} id
 * @prop {string} url
 * @prop {string} title
 * @prop {string[]} tags
 * @prop {string} salary
 * @prop {string} job_type
 * @prop {string} category
 * @prop {string} description
 * @prop {string} company_logo
 * @prop {string} company_name
 * @prop {string} publication_date
 * @prop {string} candidate_required_location
 */
