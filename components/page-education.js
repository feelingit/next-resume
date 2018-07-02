export default ({education}) =>
  <div id="education">
    <h1> education </h1>
    { education.map((ed) =>
      <p>
        <b>{ed.institution}</b>
        <span>{ed.studyType} • {ed.startDate} ... {ed.endDate}</span>
        {ed.courses.map((course) => <i>{course}</i>)}
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
