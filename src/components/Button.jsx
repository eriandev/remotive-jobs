export default function Button ({ children }) {
  return (
    <button class='w-max select-none rounded border-none bg-primary py-3 px-6 font-medium text-white transition-[color,background-color] duration-[250ms] ease-in-out hover:bg-chocolate hover:text-primary md:w-32'>
      {children}
    </button>
  )
}
