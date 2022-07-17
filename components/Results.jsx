import Thumbnail from './Thumbnail';

const Results = ( {results} ) => {
  console.log(results);
  return (
    <section>
      {results.map(result => (
        <Thumbnail key={result.id} result={result}/>
      ))}
    </section>
  )
}

export default Results