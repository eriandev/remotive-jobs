export default function Container ({ children, cssClass }) {
  return (
    <div className={`mx-auto max-w-[1200px] px-3 xl:px-0 ${cssClass || ''}`}>
      {children}
    </div>
  )
}
