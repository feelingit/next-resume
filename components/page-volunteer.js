import Title from './title'

export default ({title, volunteer = [ ]}) =>
  <div id="volunteer">
    <Title title={title} count={volunteer.length} />
    { volunteer.map((work, workIndex) =>
      <div key={workIndex}>
        <p>
          <b> {work.organization} </b>
          <span className="url"> {work.website} </span>
          <span> {work.position} {work.startDate} ... {work.endDate} </span>
          <span> {work.summary} </span>
        </p>
        <p>
          {work.highlights.map((highlight, highlightIndex) =>
            <span className="highlight" key={highlightIndex}>
              {highlight}
            </span>
          )}
        </p>
      </div>
    )}
    <style jsx>{`
      b, span {
        display: block;
        margin: 5px 0;
      }
      span.url {
        opacity: 0.5;
      }
      span.highlight {
        background: rgba(190, 190, 190, 0.25);
        border-radius: 5px;
        padding: 3px 6px;
        display: inline-block;
        margin-bottom: 5px;
        margin-right: 5px;
      }
    `}</style>
  </div>
