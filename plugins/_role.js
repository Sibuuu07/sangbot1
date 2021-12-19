let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 10) ? 'Baby 🐣'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Kids 🚸'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Human💜'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Alien'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Master'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Grand-Master'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Superhero 🦸‍♂️'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Mastered Gandv3'
          : ((user.level >= 80) && (user.level <= 100)) ? 'God'
          : 'Management Team Member'
  user.role = role
  return true
}

module.exports = handler
