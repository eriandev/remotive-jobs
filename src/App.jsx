import Title from './components/Title'
import Header from './components/Header'
import SearchZone from './components/SearchZone'

export default function App ({ title }) {
  return (
    <Header>
      <Title>
        <strong>{title}</strong> Jobs
      </Title>
      <SearchZone />
    </Header>
  )
}
