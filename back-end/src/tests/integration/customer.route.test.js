const chai = require('chai')
const chaiHttp = require('chai-http')
const sinon = require('sinon')
const app = require('../../api/app')
const { expect } = chai
const { Product } = require('../../database/models')
const { invalidToken } = require('../mocks/customer.mocks')

chai.use(chaiHttp);

describe('Test route /customer - Back End', () => {
  beforeEach(() => sinon.restore());
  it('/customer/products:GET without authorization in headers', async () => {
    const chaihttpResponse = await chai.request(app).get('/customer/products').send()
    expect(chaihttpResponse.status).to.be.equal(401);
    expect(chaihttpResponse.body).to.be.deep.equal({ message: "Token not found" })
  });

  it('/customer/products:GET without valid authorization in headers', async () => {
    const chaihttpResponse = await chai.request(app).get('/customer/products').set("authorization", invalidToken)
    expect(chaihttpResponse.status).to.be.equal(401);
    expect(chaihttpResponse.body).to.be.deep.equal({ message: "Expired or invalid token" })
  })
});