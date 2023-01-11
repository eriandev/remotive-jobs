import Container from './Container'

export default function Header ({ children }) {
  return (
    <header class='w-full bg-tertiary'>
      <Container>
        {children}
      </Container>
    </header>
  )
}
