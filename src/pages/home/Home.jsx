import React from "react";
import "./home.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import Navbarr from "../../components/navbar/Navbar copy";
import Fp from "../../components/featuredProperties/Fp";

const Home = () =>{
    return(
        <div>
<Navbarr/>
<Header/>

<div className="homeContainer">
    <Featured/>
    <h1 className="homeTitle">Browse by airline Type</h1>
    <FeaturedProperties/>
    <h1 className="homeTitle">Try our New Features</h1>
    <Fp/>


    
   
<MailList/>
<Footer/>

</div>

        </div>
    )
}
export default Home