import {useState,useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import { dataContext } from '../App';
import axios from 'axios';
function Home(){
  const myContext=useContext(dataContext);
  console.log(myContext);
 
let [arr,setarr]=useState([]);
let api="https://bl0gbackend.onrender.com/Home"
  useEffect(()=>{
    axios.get(api)
    .then(res=>{
      console.log(res.data)
      setarr(res.data)
    })
    .catch(()=>{console.log("error")    })
  },[]) 


useEffect(()=>{
  setarr([...arr,myContext])
},[])
console.log(arr)

return(
        <div className='Homecontainer'>
          <h1>Welcome to The Siren</h1>
          <div style={{margin:"80px"}}className='homefirstimages'>
          <div  style={{position:"relative"}}>         
            <img src={myContext[0].urlToImage} width={"100%"} height={"500px"}/>
            <h2 style={{position:"absolute",top:"50%",left:"10%",color:"white"}}>{myContext[0].title}</h2>
          </div>

            <div style={{position:"relative"}}>  
         <div>   <img src={myContext[1].urlToImage} width={"100%"} height={"250px"}/> 
              <h2 style={{position:"absolute",top:"15%",left:"10%",color:"white"}}>{myContext[1].title}</h2>
              </div>  
              <div>   <img src={myContext[4].urlToImage} width={"100%"} height={"250px"}/> 
              <h2 style={{position:"absolute",bottom:"15%",left:"10%",color:"white"}}>{myContext[4].title}</h2>
              </div>
              </div>
              
                           </div>
      <hr height={"13px"}/>
   
{
arr.map((item,index)=>{
  if(index>2)
{
  return(<div className='homecontainer homecard'>
  <div className='homearticles'>
  <img src={item.urlToImage} width={"355px"} height={"300px"} />
 <div style={{marginLeft:"18px"}}> 
  <h3><Link to={`/individualdatapage/${index}`} state={item}>{item.title}</Link></h3>
  <p>{item.content}</p>
  <p>{item.publishedAt}</p>
 </div>
 


  </div>
  
 
  {/* //home articles */}
  </div>
  // homecontainer 
  )
} 
  })
}
{myContext.map(x=>{
  <p>x.title</p>
})}
{/* <div className='Navbar' style={{height:"600px",border:"red"}}>
  <div className='leftimage'><img src={props.data.home[1].urlToImage}/></div>
  <div className='leftimage' ><img src={props.data.home[2].urlToImage} />
  <img src={props.data.home[0].urlToImage} /></div>
</div> */}

        </div>
    )
}
export default Home;