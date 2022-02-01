export default function(method, url, { headers, body }) {
    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            credentials: 'include',
            ...headers
        },
        body: JSON.stringify(body)
    })
}