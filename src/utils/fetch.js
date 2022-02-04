function Fetch(method, url, data, headers) {
    const config = {
        method
    }

    if (data !== undefined) {
        config.body = JSON.stringify(data)
    }

    if (headers !== undefined) {
        config.headers = headers
    }

    return fetch(url, config)
}

export function GET(url, data, headers) {
    return Fetch('GET', url, data, headers)
}

export function POST(url, data, headers) {
    return Fetch('POST', url, data, headers)
}

export function PUT(url, data, headers) {
    return Fetch('PUT', url, data, headers)
}

export function DELETE(url, data, headers) {
    return Fetch('DELETE', url, data, headers)
}

export default Fetch