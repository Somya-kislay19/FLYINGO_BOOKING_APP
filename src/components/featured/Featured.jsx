import "./featured.css"
import { useNavigate } from "react-router-dom";



const Featured =() => {
    const navigate = useNavigate();
    
const ex = () => {
    navigate("/hotels");
  }; 

  const ex3 = () => {
    navigate("/more");
  }; 

  const ex2 = () => {
    navigate("/userInfo");
  };  
    return (
        <div className="featured">
            <div className="featuredItem">
            <img src={require('./p1.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" onClick={ex}><h1>EXPLORE</h1></button>
</div>
            </div>

            <div className="featuredItem">
            <img src={require('./ps.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" onClick={ex2}><h1>EXPLORE</h1></button>

</div>
            </div>

            <div className="featuredItem">
            <img src={require('./p1 copy.jpg')} alt="description" className="featuredImg"/>
<div className="featuredTitles">
<button className="bb" onClick={ex3}><h1>EXPLORE</h1></button>

</div>
            </div>



        </div>
    )
}

export default Featured