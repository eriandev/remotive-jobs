import { useState } from 'react'
import JobCard from './JobCard'
import MoreJobs from './MoreJobs'

export default function JobCardList () {
  const [jobList, setJobList] = useState([])

  return (
    <section className='grid grid-flow-row gap-2 pb-12'>
      {jobList.map((job) => <JobCard key={job.id} job={job} />)}
      <MoreJobs jobSetState={setJobList} />
    </section>
  )
}
