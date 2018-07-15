module.exports = {

  'server': {

    // If you want to use another port change the value 3000 to any port you wish.
    'port': 3000,

  },

  // List of all JSON Resume files
  'resumes': {
    'resume': require('./resume/resume.json'),
    //'english': require('./resume/english.json'),
    //'russian': require('./resume/russian.json')
  },

  // Default resume file name (<name>.json) for index page
  'resume': 'resume'

}
