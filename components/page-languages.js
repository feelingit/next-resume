
import Title from './title'

/*************************************************

  "languages": [
    {
      "language": "English",
      "fluency": "Native speaker"
    }
  ]

*************************************************/

export default ({title, languages = [ ]}) =>
  <div id="Languages">
    <Title title={title} count={languages.length} />
    { languages.map((language, languageIndex) =>
      <p key={languageIndex}>
        {language.language} ({language.fluency})
      </p>
    )}
    <style jsx>{`
    `}</style>
  </div>
