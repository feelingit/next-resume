/*************************************************

  "basics": {
    "name": "John Doe",
    "label": "Programmer",
    "picture": "",
    "email": "john@gmail.com",
    "phone": "(912) 555-4321",
    "website": "http://johndoe.com",
    "summary": "A summary of John Doe...",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "network": "LinkedIn",
        "username": "johndoe",
        "url": "https://www.linkedin.com/in/johndoe"
      },
      {
        "network": "GitHub",
        "username": "johndoe",
        "url": "https://github.com/johndoe"
      }
    ]
  },

*************************************************/

export default ({basics = [ ]}) =>
  <div id="Basics">
    <h2> {basics.label} </h2>
    <div>
      {basics.location ? basics.location.countryCode + ' ' + basics.location.city : ''}
    </div>
    <p>
      <b> E-mail </b>
      {basics.email}
    </p>
    { basics.profiles ? basics.profiles.map((profile, p) =>
      <p key={p}>
        <b> {profile.network} </b>
        {profile.url}
      </p>
    ) : ''}
    <style jsx>{`
      h1.Basics-name {
        font-size: 300%;
      }
      h2 {
        font-size: 125%;
      }
      b {
        display: none;
      }
    `}</style>
  </div>
