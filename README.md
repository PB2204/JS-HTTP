# JS-HTTP

A simple JavaScript HTTP request library for making GET, POST, PUT, DELETE, OPTIONS, HEAD, CONNECT, TRACE, and PATCH requests using the Fetch API.

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Overview](#overview)
- [Examples](#examples)
- [Usage](#usage)
- [License](#license)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Contributing](CONTRIBUTING.md)
- [Learn More](LEARN.md)
- [Developer Details](#developer-details)

## Installation

You can install JS-HTTP using npm:

```bash
npm install https-node.js
```

## Project Structure

The project structure is organized as follows:

```bash
js-http/
|-- dist/
|-- src/
|   |-- js-http.js
|-- examples/
|   |-- index.html
|-- tests/
|   |-- test-js-http.js
|-- CODE_OF_CONDUCT.md
|-- CONTRIBUTING.md
|-- LEARN.md
|-- README.md
|-- LICENSE
|-- package.json
|-- webpack.config.js
|-- .gitignore
```

- **`dist/`**: Contains the distribution version of the library.
- **`src/`**: Contains the source code of the library.
- **`examples/`**: Includes HTML examples demonstrating library usage.
- **`tests/`**: Contains test files for the library.
- **`CODE_OF_CONDUCT.md`**: Guidelines for community behavior.
- **`CONTRIBUTING.md`**: Information on how to contribute to the project.
- **`LEARN.md`**: Additional resources and learning materials.
- **`README.md`**: This README file.
- **`LICENSE`**: The license file for the project.
- **`package.json`**: Configuration file for npm.
- **`webpack.config.js`**: Configuration for bundling the library.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.

## Overview

JS-HTTP is a lightweight JavaScript library that simplifies making various HTTP requests in your web applications. It provides a straightforward API for making GET, POST, PUT, DELETE, OPTIONS, HEAD, CONNECT, TRACE, and PATCH requests using the Fetch API.

## Examples

You can find usage examples in the `examples/` directory. To run the examples, open the HTML files in your browser.

## Usage

Here's how you can use JS-HTTP in your JavaScript code:

```javascript
// Import the JS-HTTP library
const JSHTTP = require('https-node.js);

// Make a GET request
JSHTTP.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('GET Response:', response);
  })
  .catch(error => {
    console.error('GET Error:', error);
  });

// Make a POST request
const data = { userId: 1, id: 101, title: 'foo', body: 'bar' };
JSHTTP.post('https://jsonplaceholder.typicode.com/posts', data)
  .then(response => {
    console.log('POST Response:', response);
  })
  .catch(error => {
    console.error('POST Error:', error);
  });

// Make a PUT request
const putData = { userId: 1, id: 1, title: 'updated title', body: 'updated body' };
JSHTTP.put('https://jsonplaceholder.typicode.com/posts/1', putData)
  .then(response => {
    console.log('PUT Response:', response);
  })
  .catch(error => {
    console.error('PUT Error:', error);
  });

// Make a DELETE request
JSHTTP.delete('https://jsonplaceholder.typicode.com/posts/101')
  .then(response => {
    console.log('DELETE Response:', response);
  })
  .catch(error => {
    console.error('DELETE Error:', error);
  });

// Make an OPTIONS request
const optionsData = { someOption: 'value' };
JSHTTP.options('https://jsonplaceholder.typicode.com/some-resource', optionsData)
  .then(response => {
    console.log('OPTIONS Response:', response);
  })
  .catch(error => {
    console.error('OPTIONS Error:', error);
  });

// Make a HEAD request
const headData = { someHeader: 'value' };
JSHTTP.head('https://jsonplaceholder.typicode.com/some-resource', headData)
  .then(response => {
    console.log('HEAD Response:', response);
  })
  .catch(error => {
    console.error('HEAD Error:', error);
  });

// Make a CONNECT request
const connectData = { someData: 'value' };
JSHTTP.connect('https://jsonplaceholder.typicode.com/some-resource', connectData)
  .then(response => {
    console.log('CONNECT Response:', response);
  })
  .catch(error => {
    console.error('CONNECT Error:', error);
  });

// Make a TRACE request
const traceData = { someData: 'value' };
JSHTTP.trace('https://jsonplaceholder.typicode.com/some

-resource', traceData)
  .then(response => {
    console.log('TRACE Response:', response);
  })
  .catch(error => {
    console.error('TRACE Error:', error);
  });

// Make a PATCH request
const patchData = { someData: 'value' };
JSHTTP.patch('https://jsonplaceholder.typicode.com/some-resource', patchData)
  .then(response => {
    console.log('PATCH Response:', response);
  })
  .catch(error => {
    console.error('PATCH Error:', error);
  });
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Developer Details

- **Author**: [Pabitra Banerjee](https://pabitrabanerjee.me)
- **Email**: [rockstarpabitra2204@gmail.com](mailto:rockstarpabitra2204@gmail.com)
- **GitHub**: [PB2204](https://github.com/pb2204)

Feel free to reach out for questions, feedback, or collaboration opportunities.

## Happy Coding 🚀