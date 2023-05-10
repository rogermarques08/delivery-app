const validLogin = { email: 'zebirita@email.com', password: '$#zebirita#$' }

const invalidLogin = { email: validLogin.email, password: 'invalidpassword' }

const invalidLogin2 = { email: 'inexistent@mail.com', password: 'nnn' }

const zebirita = {
  id: 3,
  name: 'Cliente Zé Birita',
  email: 'zebirita@email.com',
  password: '1c37466c159755ce1fa181bd247cb925',
  role: 'customer',
}

module.exports = { validLogin, invalidLogin, invalidLogin2, zebirita }

