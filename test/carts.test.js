import chai from 'chai';
import supertest from 'supertest';
import { mock_data } from './mock_data.js';

const requester = supertest('http://localhost:8080/api/cart');
const expect = chai.expect;

describe('Testing Carts module', () => {
    it('Carts', async () => {
        const { statusCode } = await requester.get('/');
        expect(statusCode).to.equal(404);
    });
});