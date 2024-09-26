import React from "react";
// import '../public/main.scss';
import './comp/style.css';
import Nav from "./comp/nav";
import Product from "./comp/product";
import Footer from "./comp/footer";



const App = () =>{
    return (
        <>

                <Nav />
                <hr />
                <Product />
                <br/>
                <Footer />
        </>
    )
}

export default App