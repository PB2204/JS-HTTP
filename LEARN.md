# Learn More About JS-HTTP

Welcome to the "Learn More" guide for JS-HTTP, a simple JavaScript HTTP request library. In this guide, you will find additional information, advanced usage, and tips for getting the most out of JS-HTTP.

## Table of Contents

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Advanced Usage](#advanced-usage)
- [Handling Responses](#handling-responses)
- [Error Handling](#error-handling)
- [Custom Headers](#custom-headers)
- [Making Other HTTP Requests](#making-other-http-requests)
- [Contributing](#contributing)

## Installation

Before diving into JS-HTTP, make sure you have it installed in your project. You can install it via npm:

```bash
npm install https-node.js
```

## Basic Usage

### Making a GET Request

To make a GET request, simply import the `JSHTTP` module and use the `get` method:

```javascript
const JSHTTP = require('https-node.js');

JSHTTP.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('GET Response:', response);
  })
  .catch(error => {
    console.error('GET Error:', error);
  });
```

### Making a POST Request

To make a POST request, use the `post` method:

```javascript
const JSHTTP = require('https-node.js');

const data = { userId: 1, id: 101, title: 'foo', body: 'bar' };

JSHTTP.post('https://jsonplaceholder.typicode.com/posts', data)
  .then(response => {
    console.log('POST Response:', response);
  })
  .catch(error => {
    console.error('POST Error:', error);
  });
```

## Advanced Usage

### Handling Responses

JS-HTTP returns the response data in JSON format by default. You can access the response data using `.then()` as shown in the basic examples. You can also access other properties of the response, such as status and headers.

```javascript
JSHTTP.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Status Code:', response.status);
    console.log('Response Headers:', response.headers);
  })
  .catch(error => {
    console.error('GET Error:', error);
  });
```

### Error Handling

JS-HTTP provides error handling for both GET and POST requests. If a request fails, you can catch the error and handle it gracefully.

```javascript
JSHTTP.get('https://jsonplaceholder.typicode.com/nonexistent')
  .then(response => {
    console.log('GET Response:', response);
  })
  .catch(error => {
    console.error('GET Error:', error.message);
  });
```

## Custom Headers

You can customize headers for your requests by passing an optional `headers` object to the `get` or `post` methods. This allows you to set custom content types, authentication headers, and more.

```javascript
const customHeaders = {
  'Authorization': 'Bearer your-access-token',
  'Content-Type': 'application/json',
};

JSHTTP.get('https://api.example.com/data', { headers: customHeaders })
  .then(response => {
    console.log('Custom Headers GET Response:', response);
  })
  .catch(error => {
    console.error('Custom Headers GET Error:', error.message);
  });
```

## Making Other HTTP Requests

JS-HTTP supports various other HTTP methods in addition to GET and POST. Here's how you can make requests using these methods:

### PUT Request

To make a PUT request, use the `put` method:

```javascript
JSHTTP.put('https://jsonplaceholder.typicode.com/posts/1', data)
  .then(response => {
    console.log('PUT Response:', response);
  })
  .catch(error => {
    console.error('PUT Error:', error);
  });
```

### DELETE Request

To make a DELETE request, use the `delete` method:

```javascript
JSHTTP.delete('https://jsonplaceholder.typicode.com/posts/101')
  .then(response => {
    console.log('DELETE Response:', response);
  })
  .catch(error => {
    console.error('DELETE Error:', error);
  });
```

### OPTIONS Request

To make an OPTIONS request, use the `options` method:

```javascript
JSHTTP.options('https://jsonplaceholder.typicode.com/some-resource', data)
  .then(response => {
    console.log('OPTIONS Response:', response);
  })
  .catch(error => {
    console.error('OPTIONS Error:', error);
  });
```

### HEAD Request

To make a HEAD request, use the `head` method:

```javascript
JSHTTP.head('https://jsonplaceholder.typicode.com/some-resource', data)
  .then(response => {
    console.log('HEAD Response:', response);
  })
  .catch(error => {
    console.error('HEAD Error:', error);
  });
```

### CONNECT Request

To make a CONNECT request, use the `connect` method:

```javascript
JSHTTP.connect('https://jsonplaceholder.typicode.com/some-resource', data)
  .then(response => {
    console.log('CONNECT Response:', response);
  })
  .catch(error => {
    console.error('CONNECT Error:', error);
  });
```

### TRACE Request

To make a TRACE request, use the `trace` method:

```javascript
JSHTTP.trace('https://jsonplaceholder.typicode.com/some-resource', data)
  .then(response => {
    console.log('TRACE Response:', response);
  })
  .catch(error => {
    console.error('TRACE Error:', error);
  });
```

### PATCH Request

To make a PATCH request, use the `patch` method:

```javascript
JSHTTP.patch('https://jsonplaceholder.typicode.com/some-resource', data)
  .then(response => {
    console

.log('PATCH Response:', response);
  })
  .catch(error => {
    console.error('PATCH Error:', error);
  });
```

## Contributing

If you would like to contribute to the development of JS-HTTP, please read the [Contributing Guidelines](CONTRIBUTING.md) for information on how to get started.

We welcome your contributions, bug reports, feature requests, and feedback!

## Happy Coding 🚀