export default ({title, languages}) =>
  <div id="Languages">
    <h1> {title} </h1>
    { languages.map((language, l) =>
      <p key={l}>
        {language.language} ({language.fluency})
      </p>
    )}
    <style jsx>{`
    `}</style>
  </div>
