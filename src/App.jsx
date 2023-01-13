import Title from './components/Title'
import Header from './components/Header'
import Container from './components/Container'
import SearchZone from './components/SearchZone'
import FilterZone from './components/FilterZone'

export default function App ({ title }) {
  return (
    <>
      <Header>
        <Title>
          <strong>{title}</strong> Jobs
        </Title>
        <SearchZone />
      </Header>
      <Container cssClass='pt-7'>
        <FilterZone />
      </Container>
    </>
  )
}
