import Title from './title'

export default ({title, education}) =>
  <div id="Education">
    <Title title={title} count={education.length} />
    { education.map((ed, e) =>
      <p key={e}>
        <b> {ed.institution} </b>
        <span>
          {ed.studyType} • {ed.startDate} ... {ed.endDate}
        </span>
        {ed.courses.map((course, c) =>
          <i key={c}>{course}</i>
        )}
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
