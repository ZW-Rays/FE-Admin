import ServerPath from "paths/server_paths"
import { formattedResponse, GET } from "utils/fetch"
import { addQuery, serverURL } from "utils/url"

const ProductAPI = {}

ProductAPI.GetListProduct = async (size = '3', index = '1') => {
    let url = serverURL(ServerPath.GetListProduct)
    url = addQuery(url, { size, index })

    const res = await GET(url)

    return formattedResponse(res)
}

export default ProductAPI