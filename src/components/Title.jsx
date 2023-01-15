export default function Title ({ children, tag = 'h1' }) {
  const Tag = tag
  return (
    <Tag className='w-max py-4 text-2xl lg:py-8'>
      {children}
    </Tag>
  )
}
