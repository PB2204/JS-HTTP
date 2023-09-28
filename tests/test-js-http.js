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

    // Test for PUT request
    it('should make a successful PUT request', async () => {
        const data = { userId: 1, id: 1, title: 'updated title', body: 'updated body' };
        const response = await JSHTTP.put('https://jsonplaceholder.typicode.com/posts/1', data);
        expect(response).to.be.an('object');
        expect(response.id).to.equal(1);
        expect(response.title).to.equal('updated title');
        expect(response.body).to.equal('updated body');
    });

    // Test for DELETE request
    it('should make a successful DELETE request', async () => {
        const response = await JSHTTP.delete('https://jsonplaceholder.typicode.com/posts/101');
        expect(response).to.be.an('object');
        expect(response).to.deep.equal({});
    });

    // Test for OPTIONS request
    it('should make a successful OPTIONS request', async () => {
        const data = { someOption: 'value' }; // Replace with appropriate data if needed
        const response = await JSHTTP.options('https://jsonplaceholder.typicode.com/some-resource', data);
        expect(response).to.be.an('object');
    });

    // Test for HEAD request
    it('should make a successful HEAD request', async () => {
        const data = { someHeader: 'value' }; // Replace with appropriate data if needed
        const response = await JSHTTP.head('https://jsonplaceholder.typicode.com/some-resource', data);
    });

    // Test for CONNECT request
    it('should make a successful CONNECT request', async () => {
        const data = { someData: 'value' }; // Replace with appropriate data if needed
        const response = await JSHTTP.connect('https://jsonplaceholder.typicode.com/some-resource', data);
    });

    // Test for TRACE request
    it('should make a successful TRACE request', async () => {
        const data = { someData: 'value' }; // Replace with appropriate data if needed
        const response = await JSHTTP.trace('https://jsonplaceholder.typicode.com/some-resource', data);
    });

    // Test for PATCH request
    it('should make a successful PATCH request', async () => {
        const data = { someData: 'value' }; // Replace with appropriate data if needed
        const response = await JSHTTP.patch('https://jsonplaceholder.typicode.com/some-resource', data);
    });
});