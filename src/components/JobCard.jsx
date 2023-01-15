import usePipes from '../hooks/usePipes'

export default function JobCard ({ job }) {
  const { getLocationIcon, getRelativeDate } = usePipes()

  return (
    <article className='group grid min-h-[70px] w-full items-center rounded-2xl border border-[rgb(237,242,247)] bg-secondary hover:bg-[#fed294c9]'>
      <a target='_blank' rel='noopener noreferrer' href={job.url} className='grid w-full grid-cols-[auto_fit-content(100%)] items-center gap-2 py-2 px-4'>
        <div className='grid grid-cols-[fit-content(100%)_auto] items-center gap-2'>
          <img alt={job.companyName} src={job?.companyLogo || '/not-found.png'} className='max-h-[2rem] max-w-[2rem] rounded-full object-contain' />
          <JobCardInfo
            title={job.title}
            salary={job?.salary}
            companyName={job.companyName}
            location={job?.requiredLocation}
            locationIcon={getLocationIcon(job?.requiredLocation)}
          />
        </div>
        <JobCardCreationDate publicationDate={getRelativeDate(job.publicationDate)} />
      </a>
    </article>
  )
}

function JobCardInfo ({ title, companyName, location, locationIcon, salary }) {
  return (
    <div className='gap-1 flex flex-col'>
      <h3 className='text-sm font-semibold group-hover:opacity-70 sm:text-lg'>{title} • {companyName}</h3>
      <div className='grid gap-2 grid-flow-col auto-cols-max'>
        {location ? <JobCardLocation location={location} locationIcon={locationIcon} /> : null}
        {salary ? <JobCardSalary salary={salary} /> : null}
      </div>
    </div>
  )
}

function JobCardLocation ({ location, locationIcon }) {
  return (
    <div title={`Location: ${location}`} className='grid grid-cols-[fit-content(100%)_auto] items-center gap-1 rounded-full bg-[rgba(0,0,0,0.06)] py-1 px-2 text-[10px] font-light sm:text-xs'>
      <img alt={location} className='h-[14px] w-[14px] sm:h-[18px] sm:w-[18px]' src={locationIcon} />
      <span className='grid grid-cols-[fit-content(100%)_auto] rounded-full uppercase'>{location}</span>
    </div>
  )
}

function JobCardSalary ({ salary }) {
  return (
    <div title={`Salary: ${salary}`} className='text-secondary grid grid-cols-[fit-content(100%)_auto] items-center gap-1 rounded-full bg-chocolate py-1 px-2 text-[10px] font-semibold sm:text-xs'>
      <span className='grid grid-cols-[fit-content(100%)_auto] rounded-full uppercase'>💸 {salary}</span>
    </div>
  )
}

function JobCardCreationDate ({ publicationDate }) {
  return (
    <div className='hidden sm:block sm:font-poppins sm:text-sm sm:font-light'>
      <span>{publicationDate}</span>
    </div>
  )
}
