export default ({name}) =>
  <div id="name">
    <h1 className="Basics-name"> {name} </h1>
    <style jsx>{`
      h1.Basics-name {
        font-size: 300%;
        /* text-transform: uppercase; */
      }
      h2 {
        font-size: 125%;
      }
    `}</style>
  </div>
