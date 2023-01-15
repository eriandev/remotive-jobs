export default function Button ({ children, onClick, outline = false }) {
  const baseStyles = 'w-max select-none rounded py-3 px-6 font-medium transition-[color,background-color] duration-[250ms] ease-in-out md:w-32'
  const fillStyles = 'border-none bg-primary text-white hover:bg-chocolate hover:text-primary'
  const outlineStyles = 'border border-primary bg-transparent text-primary'

  return (
    <button
      className={`${baseStyles} ${outline ? outlineStyles : fillStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
