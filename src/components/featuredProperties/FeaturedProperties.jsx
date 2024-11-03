import React from "react";
import "./featuredProperties.css"
import { useNavigate } from "react-router-dom";

const FeaturedProperties = () =>
{
const navigate=useNavigate();

    const a=() =>{
        navigate("/airindia1")
    }
    const s=() =>{
        navigate("/spicejet1")
    }
    const e=() =>{
        navigate("/emirates1")
    }
    const i=() =>{
        navigate("/indigo1")
    }
return(
<div className="fp">
<div className="featuredItem">
            <img src={require('./airindia.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" onClick={a} ><h1>AIR-INDIA FLIGHTS</h1></button>
</div>
            </div>
            <div className="featuredItem">
            <img src={require('./emirates.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" onClick={e}><h1>EMIRATES FLIGHTS</h1></button>
</div>
            </div>
            <div className="featuredItem">
            <img src={require('./indigo.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" onClick={i} ><h1>INDIGO FLIGHTS</h1></button>
</div>
            </div>
            <div className="featuredItem">
            <img src={require('./spicejet.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" onClick={s}><h1>SPICEJET FLIGHTS</h1></button>
</div>
            </div>

    
    




</div>
)
}

export default FeaturedProperties