
const english = {
  'summary': 'Summary',
  'skills': 'Skills',
  'work': 'Experience',
  'education': 'Education'
}

const russian = {
  'summary': 'Основная информация',
  'skills': 'Навыки',
  'work': 'Опыт работы',
  'education': 'Образование'
}

const languages = {
  'english': english,
  'russian': russian
}

module.exports = function(language) {
  return languages[language]
}
