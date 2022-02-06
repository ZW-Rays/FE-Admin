import ServerPath from "paths/server_paths"
import { formattedResponse, GET, POST, PUT } from "utils/fetch"
import { addQuery, serverURL } from "utils/url"

const ProductAPI = {}

ProductAPI.GetListProduct = async (index = '0', size = '10') => {
    let url = serverURL(ServerPath.GetListProduct)
    url = addQuery(url, { size, index })

    const res = await GET(url)

    return formattedResponse(res)
}

ProductAPI.GetDetailProduct = async (param = '') => {
    let url = serverURL(ServerPath.GetDetailProduct)
    url += param

    const res = await GET(url)

    return formattedResponse(res)
}

ProductAPI.CreateProduct = async (data, headers) => {
    let url = serverURL(ServerPath.CreateProduct)

    const res = await POST(url, data, headers)

    return formattedResponse(res)
}

ProductAPI.UpdateProduct = async (data, headers) => {
    let url = serverURL(ServerPath.UpdateProduct)

    const res = await PUT(url, data, headers)

    return formattedResponse(res)
}

export default ProductAPI