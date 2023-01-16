import Image from './Image'

function Input (props) {
  return <input {...props} />
}

function Radio ({ imgSrc, text, label, name, value, onChange }) {
  const handleChange = () => {
    onChange(value)
  }

  return (
    <label className='grid w-max cursor-pointer grid-cols-[repeat(2,fit-content(100%))] items-center gap-2'>
      <input
        type='radio'
        name={name} value={value}
        className='border-gray relative h-4 w-4 cursor-pointer appearance-none rounded-full border checked:after:absolute checked:after:top-[2px] checked:after:left-[2px] checked:after:h-[10px] checked:after:w-[10px] checked:after:rounded-full checked:after:bg-primary checked:after:content-[""]'
        onChange={handleChange}
      />
      <div className='grid grid-cols-[repeat(2,fit-content(100%))] gap-1 leading-5'>
        {imgSrc ? <Image alt={label} name={imgSrc} className='h-5 w-5' /> : <span className='h-5 w-5'>{text}</span>}
        <span className='font-light'>{label}</span>
      </div>
    </label>
  )
}

function Search ({ placeholder, onInput }) {
  const handleInput = (event) => {
    onInput(event.target.value)
  }

  return (
    <input
      type='text'
      aria-label={placeholder}
      placeholder={placeholder}
      className='placeholder:text-gray block h-6 w-full overflow-hidden text-ellipsis whitespace-nowrap border-none p-1 text-sm text-[#282538]'
      onInput={handleInput}
    />
  )
}

Input.Radio = Radio
Input.Search = Search

export default Input
