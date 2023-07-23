import React from 'react';
import Datafromjson from '../Data.json'
import { Link,useParams ,useLocation} from 'react-router-dom';
import  {useState,useEffect} from 'react';
function Reusablecomp2(){
    console.log(Datafromjson)
    let data=Object.keys(Datafromjson);
    const param=useParams();
    let Title=param.Category;
    console.log(Title);
    let [data2,setdata]=useState();
   console.log(param.Category);
    useEffect(()=>{
        setdata(Datafromjson);
    },[])
  console.log(data);
    return (    
<div>
        <div>
                 {/* {data.map(
          (categoryvalue,index)=>{
          return(
            <div  >
            <Link key={index} to ={categoryvalue} >
              {categoryvalue}
            </Link>
                      </div>
                    
          )
        }
)} */}
<div className='Links'>
  
 <Link to="home"  className='link'> Home  </Link>
 <Link to="bollywood" className='link'> Bollywood  </Link>
 <Link to="hollywood" className='link'> Hollywood  </Link>
 <Link to="food" className='link'> Food</Link>
 <Link to="technology" className='link'>Technology  </Link>
 <Link to="fitness" className='link'>Fitness  </Link>

 </div>
</div>
        <div><h1>{Title}</h1>
        <hr/></div>
        </div>
         )
}
export default Reusablecomp2;