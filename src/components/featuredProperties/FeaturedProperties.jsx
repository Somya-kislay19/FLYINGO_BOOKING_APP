import React from "react";
import "./featuredProperties.css"
import { useNavigate } from "react-router-dom";

const FeaturedProperties = () =>
{
const navigate=useNavigate();

    const a=() =>{
        navigate("/airindia")
    }
    const s=() =>{
        navigate("/spicejet")
    }
    const e=() =>{
        navigate("/emirates")
    }
    const i=() =>{
        navigate("/indigo1")
    }
return(
<div className="fp">
<div className="featuredItem">
            <img src={require('./airindia.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" onClick={a} ><h1>AIR-INDIA</h1></button>
</div>
            </div>
            <div className="featuredItem">
            <img src={require('./emirates.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" onClick={e}><h1>EMIRATES</h1></button>
</div>
            </div>
            <div className="featuredItem">
            <img src={require('./indigo.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" onClick={i} ><h1>INDIGO</h1></button>
</div>
            </div>
            <div className="featuredItem">
            <img src={require('./spicejet.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" onClick={s}><h1>SPICEJET</h1></button>
</div>
            </div>

    
    




</div>
)
}

export default FeaturedProperties