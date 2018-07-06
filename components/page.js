import Name from '../components/page-name'
import Summary from '../components/page-summary'
import Basics from '../components/page-basics'
import Skills from '../components/page-skills'
import Education from '../components/page-education'
import Work from '../components/page-work'
import Languages from '../components/page-languages'
//import Volunteer from '../components/page-volunteer'
//import Awards from '../components/page-awards'
//import Publications from '../components/page-publications'
import Interests from '../components/page-interests'
import References from '../components/page-references'

export default ({language, resume}) =>
  <div id="Page">
    <Name name={resume.basics.name} />
    <Basics basics={resume.basics} />
    <Summary title={language.summary} summary={resume.basics.summary} />
    <Skills title={language.skills} skills={resume.skills} />
    <Work title={language.work} works={resume.work} />
    <Education title={language.education} education={resume.education} />
    <Languages title={language.languages} languages={resume.languages} />
    <Interests title={language.interests} interests={resume.interests} />
    <References title={language.references} references={resume.references} />
  </div>
