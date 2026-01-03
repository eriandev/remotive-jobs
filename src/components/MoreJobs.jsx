import useJobs from '@/hooks/useJobs'
import { BASE_URL } from '@/consts'

export default function MoreJobs({ jobSetState }) {
  const { updateJobList, loading } = useJobs(jobSetState)

  return (
    <div className="grid justify-items-center pt-6">
      {loading ? <Loading /> : <GetMoreJobs action={updateJobList} />}
    </div>
  )
}

function Loading() {
  return (
    <>
      <img alt="Doge" src={BASE_URL + '/doge.png'} className="w-16" />
      <span className="font-poppins">Loading more jobs...</span>
    </>
  )
}

function GetMoreJobs({ action }) {
  return (
    <button className="btn outline" onClick={action}>
      Load more jobs
    </button>
  )
}
