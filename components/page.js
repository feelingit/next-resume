import Name from '../components/page-name'
import Summary from '../components/page-summary'
import Basics from '../components/page-basics'
import Skills from '../components/page-skills'
import Education from '../components/page-education'
import Work from '../components/page-work'

export default ({resume}) =>
  <div id="page">
    <Name name={resume.basics.name} />
    <Basics basics={resume.basics} />
    <Summary summary={resume.basics.summary} />
    <Skills skills={resume.skills} />
    <Work works={resume.work} />
    <Education education={resume.education} />
    <style jsx>{`
      h1.Basics-name {
        font-size: 300%;
      }
    `}</style>
  </div>
