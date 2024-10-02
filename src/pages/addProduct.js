import React from "react";
import {Link} from "react-router-dom";
const Add = () => {
    return(
        <>
            <header>
                <div className="logo">
                    <h1>Add Product</h1>
                </div>
                <div className="d-flex">
                        <a href="/addProduct.js">
                            <button className="add-btn">Save</button>
                        </a>
                    <div id="delete-product-btn" className="delete-btn">
                        <Link to="/">
                            <button className="ui-btn">Cancel</button>
                        </Link>
                    </div>
                </div>
            </header>
            <main className="product_form">
                <form action="" method="POST" id="product_form" >
                        <label htmlFor="sku" className="inputs">
                            SKU    <input type="text" id="sku"  required />
                        </label>
                        <label htmlFor="name" className="inputs">
                            Name  <input type="text" id="name" required />
                        </label>
                        <label htmlFor="price"  className="inputs">
                            Price  <input type="price" id="price" required />
                        </label>
                        <label htmlFor="product-type">
                            <h2>Type Switcher </h2>
                            <select id="productType" className="switcher">
                                <option value="">Select One</option>
                                <option value="dvd" id="DVD">DVD (Size)</option>
                                <option value="furniture"  id="Furniture">Furniture (Dimensions)</option>
                                <option value="book" id="Book">Book (Weight)</option>
                            </select>
                        </label>

                </form>
            </main>

            <footer className="footer">
                <div>
                    <h1>Scandiweb Test assignment</h1>
                </div>
            </footer>
        </>
    )
}
export default Add;