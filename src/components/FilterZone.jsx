export default function FilterZone () {
  return (
    <section className='sticky top-28 rounded-2xl py-4 px-3 border border-[rgb(237,242,247)]'>
      <span className='block font-bold mb-3 leading-5'>Remote Location</span>
      <article className='grid gap-2 mb-4 grid-rows-3'>
        <label className='grid w-max cursor-pointer grid-cols-[repeat(2,fit-content(100%))] items-center gap-2'>
          <input type='radio' name='location' value='Worldwide' className='border-gray relative h-4 w-4 cursor-pointer appearance-none rounded-full border checked:after:absolute checked:after:top-[2px] checked:after:left-[2px] checked:after:h-[10px] checked:after:w-[10px] checked:after:rounded-full checked:after:bg-primary checked:after:content-[""]' />
          <div className='grid grid-cols-[repeat(2,fit-content(100%))] gap-1 leading-5'>
            <img src='worldwide-symbol.png' alt='worldwide' className='h-5 w-5' />
            <span className='font-light'>Worldwide</span>
          </div>
        </label>
        <label className='grid w-max cursor-pointer grid-cols-[repeat(2,fit-content(100%))] items-center gap-2'>
          <input type='radio' name='location' value='USA Only' className='border-gray relative h-4 w-4 cursor-pointer appearance-none rounded-full border checked:after:absolute checked:after:top-[2px] checked:after:left-[2px] checked:after:h-[10px] checked:after:w-[10px] checked:after:rounded-full checked:after:bg-primary checked:after:content-[""]' />
          <div className='grid grid-cols-[repeat(2,fit-content(100%))] gap-1 leading-5'>
            <span className='h-5 w-5'>🇺🇸</span>
            <span className='font-light'>USA Only</span>
          </div>
        </label>
        <label className='grid w-max cursor-pointer grid-cols-[repeat(2,fit-content(100%))] items-center gap-2'>
          <input type='radio' name='location' value='Other Locations' className='border-gray relative h-4 w-4 cursor-pointer appearance-none rounded-full border checked:after:absolute checked:after:top-[2px] checked:after:left-[2px] checked:after:h-[10px] checked:after:w-[10px] checked:after:rounded-full checked:after:bg-primary checked:after:content-[""]' />
          <div className='grid grid-cols-[repeat(2,fit-content(100%))] gap-1 leading-5'>
            <img src='remote-symbol.png' alt='remote' className='h-5 w-5' />
            <span className='font-light'>Other Locations</span>
          </div>
        </label>
      </article>
    </section>
  )
}
