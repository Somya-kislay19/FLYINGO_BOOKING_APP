import React from "react";
import "./featuredProperties.css"

const FeaturedProperties = () =>
{
return(
<div className="fp">
<div className="featuredItem">
            <img src={require('./airindia.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" ><h1>AIR-INDIA</h1></button>
</div>
            </div>
            <div className="featuredItem">
            <img src={require('./emirates.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" ><h1>EMIRATES</h1></button>
</div>
            </div>
            <div className="featuredItem">
            <img src={require('./indigo.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" ><h1>INDIGO</h1></button>
</div>
            </div>
            <div className="featuredItem">
            <img src={require('./spicejet.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" ><h1>SPICEJET</h1></button>
</div>
            </div>

    
    




</div>
)
}

export default FeaturedProperties