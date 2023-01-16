import Button from './Button'
import Image from './Image'
import useJobs from '../hooks/useJobs'

export default function MoreJobs ({ jobSetState }) {
  const { updateJobList, loading } = useJobs(jobSetState)

  return (
    <div className='grid justify-items-center pt-6'>
      {loading ? <Loading /> : <GetMoreJobs action={updateJobList} />}
    </div>
  )
}

function Loading () {
  return (
    <>
      <Image alt='Doge' name='doge.png' className='w-16' />
      <span className='font-poppins'>Loading more jobs...</span>
    </>
  )
}

function GetMoreJobs ({ action }) {
  return (
    <Button onClick={action} outline>
      Load more jobs
    </Button>
  )
}
