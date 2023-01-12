import Container from './Container'

export default function Header ({ children }) {
  return (
    <header class='bg-tertiary w-full pb-8 lg:pb-16'>
      <Container>
        {children}
      </Container>
    </header>
  )
}
