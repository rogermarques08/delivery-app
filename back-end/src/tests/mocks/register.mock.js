const { zebirita } = require("./login.mocks");

const userRegisterConflict = { name: 'Android', email: zebirita.email, password: 'seqsmjd12', role: 'customer' }

const userRegister = { name: 'Cachaçinha Mestre', email: 'cachacamestre@email.com', password: 'aiaiaibutterfly', role: 'customer' }

module.exports = { userRegisterConflict, userRegister }