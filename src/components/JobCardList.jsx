import { useState } from 'react'
import useJobs from '../hooks/useJobs'

export default function JobCardList () {
  const [jobList, setJobList] = useState([])
  const { updateJobList, loading } = useJobs(setJobList)

  const handleClick = () => {
    if (loading) return
    updateJobList()
  }

  return (
    <section className='grid auto-cols-max grid-flow-row gap-2'>
      {jobList.map(({ id, title }) => title ? <article key={id}>{title}</article> : null)}
      <br /><br /><br />
      <button className='p-4 rounded-lg bg-secondary text-white' onClick={handleClick}>Cargar más</button>
    </section>
  )
}
