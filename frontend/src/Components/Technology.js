import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Technology(props){
let [arr,setarr]=useState([]);
let [count,setcount]=useState(7);
console.log(props.data);
let api="https://bl0gbackend.onrender.com/technology"

useEffect(()=>{
  axios.get(api)
  .then(res=>{
    console.log(res.data)
    setarr(res.data)
  })
  .catch(()=>{console.log("error")    })
},[]) 
let item=props.data.technology; 

useEffect(()=>{
  setarr([...arr,props.data.technology])
},[])
console.log(arr[0])
return(
        <div>
<div className='container'>
    <div>
    <h1 className='h1style'>Technology
    
</h1>
<hr className='hrstyleofheading'/><br />
    {
arr.map((item,index)=>{
    console.log(count)
    if(index>0 && index<count){
        return(
                      <div  className='Navbar'  id='leftcontainer'>
          
                <div className='mappeditems'><img src={item.urlToImage} style={{width:"300px",height:"200px"}} alt={"Image not available"} /></div>
                  <div  >
                  <h4 className='styleofheaindandcontent' ><Link to={`/individualdatapage/${index}`} state={item}>{item.title}</Link></h4>
                  <p className='styleofheaindandcontent' style={{maxHeight:"40%",overflow:"hidden"}}>{item.description}</p>
                  <p className='publisheddatestyle'>Technology/{item.publishedAt}</p>
                 
                  </div>
               </div>
               
             
               
             )      
    }
  
  })
}
{(count<15)?<button onClick={()=>setcount(count+7)}>Click me</button>
:""}
    </div>
    {/* //left container data */}
    <div >
    <h1 className='h1style'>Top Posts
    
    </h1>
    <hr className='hrstyleofheading'/><br />
    {
arr.map((item,index)=>{
    console.log(count)
    if(index>6 && index<11){
        return(
                      <div  className='Navbar'  id='leftcontainer'>
          
                <div className='mappeditems'><img src={item.urlToImage} style={{width:"300px",height:"200px"}} alt={"Image not available"} /></div>
                  <div  >
                  <h4 className='styleofheaindandcontent' ><Link to={`/individualdatapage/${index}`} state={item}>{item.title}</Link></h4>
                  <p className='styleofheaindandcontent' style={{maxHeight:"40%",overflow:"hidden"}}>{item.description}</p>
                  <p className='publisheddatestyle'>Technology/{item.publishedAt}</p>
                 
                  </div>
               </div>
               
             
               
             )      
    }
  
  })
}
    </div> {/* //rightcontainer data */}
</div>{/* //container data */}
        </div>        // Parent div
    )
}
export default Technology;