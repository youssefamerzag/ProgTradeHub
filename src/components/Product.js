import { useParams } from "react-router-dom"
import './Product.css'
const  Product =() => {
    const {title} = useParams()
    const {price} = useParams()
    const {imgsrc} = useParams()
    const {languages} = useParams()
    const {category} = useParams()
    return(
        <div className="productPage">
            <p className="ProductInformation">Product Information</p>
            <div className="productDetails">
                <img style={{boxShadow : "rgba(0, 0, 0, 0.24) 0px 3px 8px", width : '600px', borderRadius : "5px"}} src={`/imgs/${imgsrc}`}></img>
                <div className="orderCard">
                    <div className="productText">
                        <p style={{fontSize : "30px" , marginTop : "50px", fontWeight : "300"}}>{title}</p>
                        <p style={{fontSize : "30px" , margin : "10px 0px 10px 0px", fontWeight : "300", color : "rgb(0, 214, 29)"}} >{price}</p>
                        <p style={{fontWeight : "900" , fontSize : "20px" , margin : " 30px 0px 10px 0px"}}>Programming languages</p>
                        <p style={{fontSize : "18px" , color : "#260064" , fontWeight : 900}}>{languages}</p>
                        <p style={{fontWeight : "900" , fontSize : "20px" , margin : " 30px 0px 10px 0px"}}>Category</p>
                        <p style={{fontSize : "18px" , color : "#260064" , fontWeight : 900}}>{category}</p>
                    </div>
                    <div className="buttons">
                        <button className="buyBtn">Buy Now</button>
                        <button className="addBtn">Add to favorites</button>
                        <button className="LiveBtn">Live Preview</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;