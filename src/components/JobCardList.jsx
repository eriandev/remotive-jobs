import { useState } from 'react'
import JobCard from './JobCard'
import useJobs from '../hooks/useJobs'

export default function JobCardList () {
  const [jobList, setJobList] = useState([])
  const { updateJobList, loading } = useJobs(setJobList)

  return (
    <section className='grid grid-flow-row gap-2 pb-12'>
      {jobList.map((job) => <JobCard key={job.id} job={job} />)}
    </section>
  )
}
