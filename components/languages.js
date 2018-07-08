
const english = {
  'summary':      'Summary',
  'skills':       'Skills',
  'work':         'Experience',
  'education':    'Education',
  'languages':    'Languages',
  'volunteer':    'Volunteer',
  'awards':       'Awards',
  'publications': 'Publications',
  'interests':    'Interests',
  'references':   'References'
}

const russian = {
  'summary':      'Основная информация',
  'skills':       'Навыки',
  'work':         'Опыт работы',
  'education':    'Образование',
  'languages':    'Иностранные языки',
  'volunteer':    'Волонтерство',
  'awards':       'Награды',
  'publications': 'Публикации',
  'interests':    'Интересы',
  'references':   'Рекомендации'
}

const languages = {
  'english': english,
  'russian': russian
}

module.exports = function(language) {

  if (!language || !languages[language]) {
    return languages['english']
  }

  return languages[language]
}
