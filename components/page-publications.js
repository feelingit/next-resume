import Title from './title'

export default ({title, publications = [ ]}) =>
  <div id="Publications">
    <Title title={title} count={publications.length} />
    { publications.map((publication, publicationIndex) =>
      <p key={publicationIndex}>
        <b> {publication.name} </b>
        <span> {publication.publisher} {publication.releaseDate} </span>
        <span> {publication.website} </span>
        {publication.summary}
      </p>
    )}
    <style jsx>{`
      span {
        display: block;
        opacity: 0.5;
        margin: 2px 0;
      }
    `}</style>
  </div>
