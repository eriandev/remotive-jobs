import Title from './components/Title'
import Header from './components/Header'
import Container from './components/Container'
import SearchZone from './components/SearchZone'
import FilterZone from './components/FilterZone'
import JobCardList from './components/JobCardList'

export default function App ({ title }) {
  return (
    <>
      <Header>
        <Title>
          <strong>{title}</strong> Jobs
        </Title>
        <SearchZone />
      </Header>
      <Container className='flex flex-col gap-7 pt-7 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-4'>
        <FilterZone />
        <JobCardList />
      </Container>
    </>
  )
}
