# JS-HTTP

A simple JavaScript HTTP request library for making GET and POST requests using the Fetch API.

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
npm i https-node.js
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

JS-HTTP is a lightweight JavaScript library that simplifies making HTTP requests in your web applications. It provides a straightforward API for making GET and POST requests using the Fetch API.

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
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Developer Details

- **Author**: [Pabitra Banerjee](https://pabitrabanerjee.me)
- **Email**: [rockstarpabitra2204@gmail.com](mailto:rockstarpabitra2204@gmail.com)
- **GitHub**: [PB2204](https://github.com/pb2204)

Feel free to reach out for questions, feedback, or collaboration opportunities.