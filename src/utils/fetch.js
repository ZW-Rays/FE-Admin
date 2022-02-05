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

export function getResult(response) {
    return response.additionalEntity.result
}

export async function formattedResponse(res) {
    let response = {
        ok: false,
        isBadRequest: false,
        status: res.status,
        mustRedirect: false,
        redirectTo: '' 
    }
    
    if (res.status === 200) {
        response.ok = true
    }

    if (res.status === 400) {
        response.isBadRequest = true
    }

    if (res.status === 401) {
        response.mustRedirect = true
        response.redirectTo = '/login'
    }

    return [await res.json(), response]
}

export default Fetch