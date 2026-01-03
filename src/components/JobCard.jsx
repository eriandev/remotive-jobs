import { BASE_URL } from '@/consts'
import usePipes from '@/hooks/usePipes'

export default function JobCard({ job }) {
  const { getLocationIcon, getRelativeDate } = usePipes()

  return (
    <article className="group bg-secondary grid min-h-17.5 w-full items-center rounded-2xl border border-[rgb(237,242,247)] hover:bg-[#fed294c9]">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={job.url}
        className="grid w-full grid-cols-[auto_fit-content(100%)] items-center gap-2 px-4 py-2"
      >
        <div className="grid grid-cols-[minmax(0,32px)_auto] items-center gap-2">
          <img
            alt={job.companyName}
            src={job?.companyLogo}
            height={32}
            width={32}
            className="rounded-full object-contain"
          />
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

function JobCardInfo({ title, companyName, location, locationIcon, salary }) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-sm font-semibold group-hover:opacity-70 sm:text-lg">
        {title} • {companyName}
      </h3>
      <div className="grid auto-cols-max grid-flow-col gap-2">
        {location ? <JobCardLocation location={location} locationIcon={locationIcon} /> : null}
        {salary ? <JobCardSalary salary={salary} /> : null}
      </div>
    </div>
  )
}

function JobCardLocation({ location, locationIcon }) {
  return (
    <div
      title={`Location: ${location}`}
      className="grid grid-cols-[fit-content(100%)_auto] items-center gap-1 rounded-full bg-[rgba(0,0,0,0.06)] px-2 py-1 text-xs font-light"
    >
      <img alt={location} src={BASE_URL + '/' + locationIcon} height={18} width={18} />
      <span className="grid grid-cols-[fit-content(100%)_auto] rounded-full uppercase">{location}</span>
    </div>
  )
}

function JobCardSalary({ salary }) {
  return (
    <div
      title={`Salary: ${salary}`}
      className="text-secondary bg-chocolate grid grid-cols-[fit-content(100%)_auto] items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold"
    >
      <span className="grid grid-cols-[fit-content(100%)_auto] rounded-full uppercase">💸 {salary}</span>
    </div>
  )
}

function JobCardCreationDate({ publicationDate }) {
  return (
    <div className="sm:font-poppins hidden sm:block sm:text-sm sm:font-light">
      <span>{publicationDate}</span>
    </div>
  )
}
