export default function Title ({ children, tag = 'h1' }) {
  const Tag = tag
  return (
    <Tag class='w-max py-4 text-2xl lg:p-8'>
      {children}
    </Tag>
  )
}
