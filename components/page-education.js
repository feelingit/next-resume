import Title from './title'

/*************************************************

  "education": [
    {
      "institution": "University",
      "area": "Information Technology",
      "studyType": "Bachelor",
      "startDate": "2011",
      "endDate": "2014",
      "gpa": "4.0",
      "courses": [
        "DB1101 - Basic SQL",
        "CS2011 - Java Introduction"
      ]
    }
  ]

*************************************************/

export default ({title, education = [ ]}) =>
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
