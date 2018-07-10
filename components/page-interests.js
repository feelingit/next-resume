import Title from './title'

/*************************************************

  "interests": [
    {
      "name": "Music",
      "keywords": [
        "Singing",
        "Playing the piano"
      ]
    }
  ]

*************************************************/

export default ({title, interests = [ ]}) =>
  <div id="interests">
    <Title title={title} count={interests.length} />
    { interests.map((interest, interestIndex) =>
      <div key={interestIndex}>
        <p>
          <b> {interest.name} </b>
        </p>
        <p>
          {interest.keywords.map((keyword, keywordIndex) =>
            <span key={keywordIndex}>
              {keyword}
            </span>
          )}
        </p>
      </div>
    )}
    <style jsx>{`
      span {
        background: rgba(190, 190, 190, 0.25);
        border-radius: 5px;
        padding: 3px 6px;
        display: inline-block;
        margin-bottom: 5px;
        margin-right: 5px;
      }
    `}</style>
  </div>
