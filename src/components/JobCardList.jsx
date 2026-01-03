import { useState } from 'react'
import JobCard from '@/components/JobCard'
import MoreJobs from '@/components/MoreJobs'

export default function JobCardList() {
  const [jobList, setJobList] = useState([])

  return (
    <>
      {jobList.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <MoreJobs jobSetState={setJobList} />
    </>
  )
}
