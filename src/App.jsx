import Title from './components/Title'
import Header from './components/Header'

export default function App () {
  const title = 'Remotive'
  return (
    <Header>
      <Title>
        <strong>{title}</strong> Jobs
      </Title>
    </Header>
  )
}
