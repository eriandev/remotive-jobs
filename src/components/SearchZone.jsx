import { ReactComponent as IconBriefcase } from '../assets/briefcase.svg'
import Button from './Button'

export default function Search () {
  return (
    <section className='flex h-[8.75rem] w-full flex-wrap items-center justify-center rounded-lg bg-[url(./bg-search-zone.png)] bg-center bg-no-repeat px-4'>
      <article className='grid w-full max-w-[720px] grid-cols-[auto_minmax(80px,100%)_auto] items-center gap-[6px] rounded bg-white p-1 pl-4'>
        <IconBriefcase width='20' height='20' />
        <input
          type='text'
          aria-label='Title, companies, expertise or benefits'
          placeholder='Title, companies, expertise or benefits'
          className='placeholder:text-gray block h-6 w-full overflow-hidden text-ellipsis whitespace-nowrap border-none p-1 text-sm text-[#282538]'
        />
        <Button>
          Search
        </Button>
      </article>
    </section>
  )
}
