const languages = require('../components/languages')
const resumes = require('../config').resumes
import Page from '../components/page'

export default class Index extends React.Component {

  static async getInitialProps ({query}) {
    let resume = resumes[query.resume] ? query.resume : 'resume'
    let language = (languages(query.resume) ? query.resume : (resumes[resume].language ? resumes[resume].language : 'english'))
    return {language: languages(language), resume: resumes[resume]}
  }

  render () {
    return (
      <Page language={this.props.language} resume={this.props.resume} />
    )
  }
}
