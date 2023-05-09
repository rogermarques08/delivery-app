const chai = require('chai')
const chaiHttp = require('chai-http')
const sinon = require('sinon')
const app = require('../../api/app')
const { User } = require('../../database/models');
const {
  validLogin,
  zebirita,
  invalidLogin,
  invalidLogin2 } = require('../mocks/login.mocks');


const { expect } = chai

chai.use(chaiHttp);

describe('Test route /login - Back End', () => {
  beforeEach(() => sinon.restore());

  it('/login:POST with incorrect login', async () => {
    sinon.stub(User, 'findOne').resolves()
    const chaihttpResponse = await chai.request(app).post('/login').send(invalidLogin2);
    expect(chaihttpResponse.status).to.be.equal(404);
    expect(chaihttpResponse.body).to.be.deep.equal({ message: 'Not found' });
  });

  it('/login:POST with valid email but invalid password', async () => {
    sinon.stub(User, 'findOne').resolves(zebirita)
    const chaihttpResponse = await chai.request(app).post('/login').send(invalidLogin);
    expect(chaihttpResponse.status).to.be.equal(404);
    expect(chaihttpResponse.body).to.be.deep.equal({ message: 'Not found' });
  });

  it('/login:POST with correct login', async () => {
    sinon.stub(User, 'findOne').resolves(zebirita)
    const chaihttpResponse = await chai.request(app).post('/login').send(validLogin);
    expect(chaihttpResponse.status).to.be.equal(200);
    expect(chaihttpResponse.body).to.be.deep.equal(zebirita);
  });
});