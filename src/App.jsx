import Title from './components/Title'
import Header from './components/Header'

export default function App ({ title }) {
  return (
    <Header>
      <Title>
        <strong>{title}</strong> Jobs
      </Title>
    </Header>
  )
}
