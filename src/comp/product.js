import React from "react";
import ProductData from './productData'
const Product = () => {
    return(
        <>
            <div className="container">
                {
                    ProductData.map((details) =>
                {
                        return(
                            <div className="box">
                                <div className="delete-checkbox">
                                    <input type="checkbox"/>
                                </div>
                                <div className="detail">
                                    <h3>{details.SKU}</h3>
                                    <h3>{details.Title}</h3>
                                    <h3>{details.Price}</h3>
                                    <h3>{details.Type}</h3>
                                </div>
                            </div>
                        )
                })
                }
            </div>
        </>
    )
}
export default Product