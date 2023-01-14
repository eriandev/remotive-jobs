import { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { ReactComponent as IconBriefcase } from '../assets/briefcase.svg'

export default function Search () {
  const [value, setValue] = useState('')

  return (
    <section className='flex h-[8.75rem] w-full flex-wrap items-center justify-center rounded-lg bg-[url(./bg-search-zone.png)] bg-center bg-no-repeat px-4'>
      <article className='grid w-full max-w-[720px] grid-cols-[auto_minmax(80px,100%)_auto] items-center gap-[6px] rounded bg-white p-1 pl-4'>
        <IconBriefcase width='20' height='20' />
        <Input.Search placeholder='Title, companies, expertise or benefits' onInput={setValue} />
        <Button>
          Search
        </Button>
      </article>
    </section>
  )
}
