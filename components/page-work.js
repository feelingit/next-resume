import Title from './title'

/*************************************************

  "work": [
    {
      "company": "Company",
      "position": "Position",
      "website": "http://company.com",
      "startDate": "2014",
      "endDate": "Present",
      "summary": "Description...",
      "highlights": [
        "highlight1",
        "highlight2"
      ]
    }
  ]

*************************************************/

export default ({title, works = [ ]}) =>
  <div id="Experience">
    <Title title={title} count={works.length} />
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
