import ServerPath from "paths/server_paths"
import { formattedResponse, GET, POST } from "utils/fetch"
import { addQuery, serverURL } from "utils/url"

const ProductAPI = {}

ProductAPI.GetListProduct = async (index = '0', size = '1') => {
    let url = serverURL(ServerPath.GetListProduct)
    url = addQuery(url, { size, index })

    const res = await GET(url)

    return formattedResponse(res)
}

ProductAPI.CreateProduct = async (data, headers) => {
    let url = serverURL(ServerPath.CreateProduct)

    const res = await POST(url, data, headers)

    return formattedResponse(res)
}

export default ProductAPI