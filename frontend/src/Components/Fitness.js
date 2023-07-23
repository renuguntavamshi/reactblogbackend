import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Fitness(props){
let [arr,setarr]=useState([]);
let [count,setcount]=useState(7);
console.log(props.data);
let item=props.data.fitness; 
let api="http://localhost:3015/fitness"
  useEffect(()=>{
    axios.get(api)
    .then(res=>{
      console.log(res.data)
      setarr(res.data)
    })
    .catch(()=>{console.log("error")    })
  },[]) 

useEffect(()=>{
  setarr([...arr,props.data.fitness])
},[])
console.log(arr[0])
return(
        <div>
<div className='container'>
    <div>
    <h1 className='h1style'>Fitness
    
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
                  <p className='styleofheaindandcontent' >{item.description}</p>
                  <p className='publisheddatestyle'>Fitness/{item.publishedAt}</p>
                 
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
    if(index>10 && index<15){
        return(
                      <div  className='Navbar'  id='leftcontainer'>
          
                <div className='mappeditems'><img src={item.urlToImage} style={{width:"300px",height:"200px"}} alt={"Image not available"} /></div>
                  <div  >
                  <h4 className='styleofheaindandcontent' ><Link to={`/individualdatapage/${index}`} state={item}>{item.title}</Link></h4>
                  <p className='styleofheaindandcontent' >{item.description}</p>

                  <p className='publisheddatestyle'>Fitness/{item.publishedAt}</p>
                 
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
export default Fitness;