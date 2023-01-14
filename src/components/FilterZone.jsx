import { useState } from 'react'
import Input from './Input'

export default function FilterZone () {
  const [selected, setSelected] = useState(null)

  return (
    <section className='sticky top-28 rounded-2xl py-4 px-3 border border-[rgb(237,242,247)]'>
      <span className='block font-bold mb-3 leading-5'>Remote Location</span>
      <article className='grid gap-2 mb-4 grid-rows-3'>
        <Input.Radio imgSrc='worldwide-symbol.png' label='Worldwide' name='location' value='Worldwide' onChange={setSelected} />
        <Input.Radio text='🇺🇸' label='USA Only' name='location' value='USA Only' onChange={setSelected} />
        <Input.Radio imgSrc='remote-symbol.png' label='Other Locations' name='location' value='Other Locations' onChange={setSelected} />
      </article>
    </section>
  )
}
