// tests/test-js-http.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const JSHTTP = require('../src/js-http');

const { expect } = chai;

chai.use(chaiHttp);

describe('JSHTTP Library Tests', () => {
    it('should make a successful GET request', async () => {
        const response = await JSHTTP.get('https://jsonplaceholder.typicode.com/posts/1');
        expect(response).to.be.an('object');
        expect(response.id).to.equal(1);
    });

    it('should make a successful POST request', async () => {
        const data = { userId: 1, id: 101, title: 'foo', body: 'bar' };
        const response = await JSHTTP.post('https://jsonplaceholder.typicode.com/posts', data);
        expect(response).to.be.an('object');
        expect(response.id).to.equal(101);
    });

    it('should handle GET request errors', async () => {
        try {
            await JSHTTP.get('https://jsonplaceholder.typicode.com/nonexistent');
        } catch (error) {
            expect(error.message).to.contain('GET request failed');
        }
    });

    it('should handle POST request errors', async () => {
        try {
            const data = { invalid: 'data' };
            await JSHTTP.post('https://jsonplaceholder.typicode.com/posts', data);
        } catch (error) {
            expect(error.message).to.contain('POST request failed');
        }
    });
});
