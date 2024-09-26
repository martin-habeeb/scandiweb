import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <header>
            <div className="logo">
                <h1>Product List</h1>
            </div>
            <div className="d-flex">
                    <Link to="Add">
                        <button className="add-btn">Add</button>
                    </Link>
                <div id="delete-product-btn" className="delete-btn">
                    <button className="ui-btn">Mass Delete</button>
                </div>
            </div>
        </header>
    )

}

export default Nav;