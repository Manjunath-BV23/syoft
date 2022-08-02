import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getProductData } from "../../Redux/Products/action"

export const ProductList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const products = useSelector((store) => store.products.products)
    console.log("Product: ", products)
    
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        dispatch(getProductData())
    }
    const mainPage = () => {
        navigate("/products")
    }
    return(
        <div className="mainProd">
            <h2>Welcome to Products Page</h2>
            <button onClick={() =>mainPage()}>Go to main </button>
            <hr />
            {products.map((e)=>(
                <div className="smallDiv">
                    <p>Product: {e.name}</p>
                    <p>Price: {e.price}</p>
                    <p>Description: {e.description}</p>
                    <p>Count: {e.count}</p>
                </div>
            ))}
        </div>
    )
}