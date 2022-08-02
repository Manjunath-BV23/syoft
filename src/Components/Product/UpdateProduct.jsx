import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UpdateProduct = () => {
    const navigate = useNavigate()
    const [product,setProduct] = useState({
        name:"",
        price: "",
        description:"",
        count: 0
    })
    const [id, setId] = useState("")

    const handleChange =(e)=>{
        // e.preventDefault()
        const{name,value} = e.target;
        
        setProduct({...product,[name]:value,})
    }

    const AddData = () => {
        axios.update(`https://syoft.herokuapp.com/products/${id}`, product)
    }
    const mainPage = () => {
        navigate("/products")
    }
    console.log(id)

    return(
        <div>
            <h2>Welcome To Update Page</h2>
            <div id = "img">
                <input className = "input" name="id"  type="text" onChange={(e)=> setId(e.target.value)} placeholder="Product Id"/><br /> <br />
                <input className = "input" name="name" value={product.name} type="text" onChange={handleChange} placeholder="Product name"/><br /> <br />
                <input className = "input" name="price" value={product.price} type="text" onChange={handleChange} placeholder="Price"/><br /><br />
                <input className = "input" name="description" value={product.description} type="text" onChange={handleChange} placeholder="Description"/><br /><br />
                <input name="count" className = "input" value={product.count} type="number" onChange={handleChange} placeholder="Inventory count"/><br /><br />
                <button onClick={() => AddData()}>Add Product</button>
                <hr />
                <button onClick={() => mainPage()}>Go to Main Page</button>

            </div>
        </div>
    )
}