import Title from './components/Title'
import Header from './components/Header'
import Button from './components/Button'

export default function App ({ title }) {
  return (
    <Header>
      <Title>
        <strong>{title}</strong> Jobs
      </Title>
      <Button>Search</Button>
    </Header>
  )
}
