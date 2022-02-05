export const slug = str => {
    return str.toLowerCase()
             .replace(/[^\w ]+/g, '')
             .replace(/ +/g, '-');
}

export const serverURL = (path = '') => {
    return process.env.REACT_APP_SERVER_HOST + path
}

export const addQuery = (url = '', queries) => {
    var urlObj = new URL(url);

    if (queries === undefined) {
        return url
    }

    for (let key in queries) {
        urlObj.searchParams.append(key, queries[key])
    }

    return urlObj.toString()
}