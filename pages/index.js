const resumes = require('../components/resume')
const languages = require('../components/languages')
import Page from '../components/page'

export default class Index extends React.Component {

  static async getInitialProps ({query}) {
    let resume = resumes[query.resume] ? query.resume : 'resume'
    let language = (languages(query.resume) ? query.resume : (resumes[resume].language ? resumes[resume].language : 'english'))
    return {language: languages(language), resume: resumes[resume]}
  }

  render () {
    return (
      <div id={this.props.resume}>
        <Page language={this.props.language} resume={this.props.resume} />
        <style jsx>{`

        `}</style>
        <style global jsx>{`
          @import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700);
          @import url(https://fonts.googleapis.com/css?family=Ubuntu+Condensed);
          @import url(https://fonts.googleapis.com/css?family=Song+Myung);
          @import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400&subset=latin-ext);
          @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);
          body {
            background: white;
            width: 100%;
            max-width: 640px;
            margin: 50px auto;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
          }
          h1 {
            color: #000;
            font-family: 'Song Myung', 'Ubuntu Condensed', serif;
            font-size: 200%;
            font-weight: normal;
            text-transform: capitalize;
          }
          hr {
            border: 1px solid transparent;
            margin: 10px 0;
          }
        `}</style>
      </div>
    )
  }
}
