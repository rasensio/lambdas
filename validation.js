
const email = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
 }

const greater = (email, chars) => {
  return email.length > chars
}

exports.email  = email
exports.greater = greater
