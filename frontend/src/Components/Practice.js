import { useState } from "react";
function Practice(){
let [arr,setarr]=useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])
let [count,setcount]=useState(7);
    return(
        <div>
<p>Mapping array items</p>
{arr.map((x,index)=>{
   if(index<count){ return(
    <p>{x}</p>
)}
})}
{(count<15)?<button onClick={()=>setcount(count+7)}>Click me</button>
:""}
        </div>
    )

}
export default Practice;