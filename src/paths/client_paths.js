const ClientPath = {}

/* 
    Home
*/
ClientPath.Home = '/'

/* 
    Login
*/
ClientPath.Login = '/login'

/*
    Purchase Order
*/
ClientPath.ListPurchaseOrder = '/purchase-order'
ClientPath.CreatePurchaseOrder = '/purchase-order/create'

/*
    Product
*/
ClientPath.ListProduct = '/product'
ClientPath.CreateProduct = '/product/create'
ClientPath.UpdateProduct = '/product/update/:id'

/*
    Delivery Order
*/
ClientPath.ListDeliveryOrder = '/delivery-order'
ClientPath.DetailDeliveryOrder = '/delivery-order/detail'

export default ClientPath