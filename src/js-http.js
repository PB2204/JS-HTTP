// src/js-http.js

class JSHTTP {
    static async get(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`GET request failed: ${error.message}`);
        }
    }

    static async post(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`POST request failed: ${error.message}`);
        }
    }

    static async put(url, data) {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`PUT request failed: ${error.message}`);
        }
    }

    static async delete(url) {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`DELETE request failed: ${error.message}`);
        }
    }

    static async options(url, data) {
        try {
            const response = await fetch(url, {
                method: 'OPTIONS',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`OPTIONS request failed: ${error.message}`);
        }
    }

    static async head(url, data) {
        try {
            const response = await fetch(url, {
                method: 'HEAD',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`HEAD request failed: ${error.message}`);
        }
    }

    static async connect(url, data) {
        try {
            const response = await fetch(url, {
                method: 'CONNECT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`CONNECT request failed: ${error.message}`);
        }
    }

    static async trace(url, data) {
        try {
            const response = await fetch(url, {
                method: 'TRACE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`TRACE request failed: ${error.message}`);
        }
    }

    static async patch(url, data) {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`PATCH request failed: ${error.message}`);
        }
    }
}

module.exports = JSHTTP;