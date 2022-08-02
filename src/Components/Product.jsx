import userEvent from "@testing-library/user-event"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./Product.css"
export const Products = () => {
    const navigate =useNavigate()

    const user = useSelector((store) => store.login.data.user)

    // console.log("Data: ", user.user)

    console.log("Pr User", user)
    const Create = () => {
        if(user.role == "admin"){
            navigate("/createproduct")
        }
        else {
            alert("Sorry Admin can only add products")
        }
    }
    const Update = () => {
        if(user.role == "admin" || user.role == "manager"){
            navigate("/updateproduct")
        }
        else {
            alert("Please contact Admin/Manager")
        }
    }
    const ViewList = () => {
        if(user.role == "admin" || user.role == "manager"){
            navigate("/allproducts")
        }
        else {
            alert("Sorry Please contact Admin/Manager")
        }
    }

    return (
        <div>
            <h2>Wellcome to Product List Page</h2>
            <div className="lists">
                <div className="list" onClick={ () => Create()}>Create Product / Add Product</div>
                <div className="list" onClick={ () => ViewList()}>Read/View Product List</div>
                <div className="list" onClick={ () => Update()}>Update Inventory</div>
            </div>
        </div>
    )
}