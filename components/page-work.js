export default ({title, works}) =>
  <div id="Experience">
    <h1> {title} </h1>
    { works.map((work, w) =>
      <p key={w}>
        <b>{work.position}</b>
        <span>
          {work.company} • {work.startDate} ... {work.endDate}
        </span>
        {work.summary}
      </p>
    )}
    <style jsx>{`
      b {
        display: block;
      }
      span {
        display: block;
        opacity: 0.5;
        margin: 2px 0;
      }
    `}</style>
  </div>
