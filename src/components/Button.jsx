export default function Button ({ children }) {
  return (
    <div class='w-max cursor-pointer select-none rounded border-none bg-primary py-4 px-6 font-medium text-white transition-[color,background-color] duration-[250ms] ease-in-out hover:bg-chocolate hover:text-primary'>
      {children}
    </div>
  )
}
