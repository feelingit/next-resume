import Title from './title'

export default ({title, summary = ''}) =>
  <div id="Summary">
    <Title title={title} count={summary.length} />
    <span> {summary} </span>
    <style jsx>{`
      h1.Basics-name {
        font-size: 300%;
      }
      h2 {
        font-size: 125%;
      }
    `}</style>
  </div>
