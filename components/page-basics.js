export default ({basics}) =>
  <div id="basics">
    <h2> {basics.label} </h2>
    <div>
      {basics.location.countryCode + ' '}
      {basics.location.city}
    </div>
    <p>
      <b> E-mail </b>
      {basics.email}
    </p>
    { basics.profiles.map((profile, p) =>
      <p key={p}>
        <b> {profile.network} </b>
        {profile.url}
      </p>
    )}
    <style jsx>{`
      h1.Basics-name {
        font-size: 300%;
      }
      h2 {
        font-size: 125%;
      }
    `}</style>
  </div>
