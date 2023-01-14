export default function JobCardList () {
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
    <article key={num}>Element {num}</article>
  ))

  return (
    <section className='grid auto-cols-max grid-flow-row gap-2'>
      {elements}
    </section>
  )
}
