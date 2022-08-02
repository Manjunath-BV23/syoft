import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateProduct = () => {
    const navigate = useNavigate()
    const [product,setProduct] = useState({
        name:"",
        price: "",
        description:"",
        count: ""
    })

    const handleChange =(e)=>{
        // e.preventDefault()
        const{name,value} = e.target;
        
        setProduct({...product,[name]:value,})
    }

    const AddData = () => {
        axios.post("https://syoft.herokuapp.com/products", product)
    }
    const mainPage = () => {
        navigate("/products")
    }
    return(
        <div>
            <h2>Welcome To Create page</h2>
            <div id = "img">
                <input name="name" value={product.name} type="text" onChange={handleChange} className = "input" placeholder="Product name"/><br /><br />
                <input name="price" value={product.price} type="text" onChange={handleChange} className = "input" placeholder="Price"/><br /><br />
                <input name="description" value={product.description} type = "text" className = "input" onChange={handleChange} placeholder="Description"/><br /><br />
                <input name="count" value={product.count} type="text" onChange={handleChange} className = "input" placeholder="Inventory count"/><br /><br />
                <button onClick={() => AddData()}>Add Product</button>
<hr />
                <button onClick={() =>mainPage()}>Go to main </button>
            </div>
        </div>
    )
}