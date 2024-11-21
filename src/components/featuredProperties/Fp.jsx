import React from "react";
import "./featuredProperties.css"
import { useNavigate } from "react-router-dom";

const Fp = () =>
{
const navigate=useNavigate();

    const a=() =>{
        navigate("/hotels")
    }
    const t=() =>{
        navigate("/tour")
    }




    
   
return(
<div className="fp">
<div className="featuredItem">
            <img src={require('./p1.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" onClick={a} ><h1>FLIGHTS</h1></button>
</div>
            </div>
            <div className="featuredItem">
            <img src={require('./ps.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" onClick={t}><h1>TOUR GUIDES</h1></button>
</div>
            </div>
            
            </div>

    
    




)
}

export default Fp