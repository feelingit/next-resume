import Title from './title'

export default ({title, references}) =>
  <div id="References">
    <Title title={title} count={references.length} />
    { references.map((reference, referenceIndex) =>
      <p key={referenceIndex}>
        <i>{reference.reference}</i>
        — {reference.name}
      </p>
    )}
    <style jsx>{`
      p {
        border-left: 3px solid silver;
        padding-left: 10px;
      }
      i {
        display: block;
        margin-bottom: 10px;
      }
    `}</style>
  </div>
