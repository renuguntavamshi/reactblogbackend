import '../App.css';
import React from 'react';
import { useParams,useLocation } from 'react-router-dom';

function Individualdatapage(){
  
    let params=useParams();
    console.log(params)
    let location =useLocation();
    console.log(location);
        return (<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
       
       <h1 style={{width:"90vw",textAlign:"center"}}>{location.state.title}</h1>
       <img style={{width:"65vw"}} src={location.state.urlToImage}/>
       <p style={{width:"80vw",textAlign:"center"}}>{location.state.content}</p>
    </div>)
}
export default Individualdatapage;