import { Route, Routes } from "react-router-dom"
import { Login } from "./Login"
import { Products } from "./Product"
import { CreateProduct } from "./Product/CreateProduct"
import { ProductList } from "./Product/ProductList"
import { UpdateProduct } from "./Product/UpdateProduct"
import { Register } from "./Registration"

export const AllRouters = () => {
    return (
        <div>

            <Routes>
                <Route path = "/" element={<Register/>}></Route>
                <Route path = "/login" element={<Login/>}></Route>
                <Route path = "/products" element={<Products></Products>}></Route>
                <Route path = "/allproducts" element={<ProductList/>}></Route>
                <Route path = "/createproduct" element={<CreateProduct/>}></Route>
                <Route path = "/updateproduct" element={<UpdateProduct/>}></Route>
            </Routes>
        </div>
    )
    
}