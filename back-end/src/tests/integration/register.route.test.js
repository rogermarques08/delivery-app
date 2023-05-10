const chai = require('chai')
const chaiHttp = require('chai-http')
const sinon = require('sinon')
const app = require('../../api/app')
const { User } = require('../../database/models');
const { zebirita } = require('../mocks/login.mocks');
const { userRegisterConflict, userRegister } = require('../mocks/register.mock');


const { expect } = chai

chai.use(chaiHttp);

describe('Test route /register - Back End', () => {
  beforeEach(() => sinon.restore());

  it('/register:POST with used email', async () => {
    sinon.stub(User, 'findOne').resolves(zebirita);
    const chaihttpResponse = await chai.request(app).post('/register').send(userRegisterConflict);
    expect(chaihttpResponse.status).to.be.equal(409);
    expect(chaihttpResponse.body).to.be.deep.equal({ message: 'Conflict' });
  });

  it('/register:POST with valid email', async () => {
    sinon.stub(User, 'findOne').resolves();
    const chaihttpResponse = await chai.request(app).post('/register').send(userRegister)
    expect(chaihttpResponse.status).to.be.equal(201);
    expect(chaihttpResponse.body).to.have.key('token')
  })
})