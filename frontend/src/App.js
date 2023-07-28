
import './App.css';
import Home from './Components/Home';  
import Bollywood from './Components/Bollywood';
import Hollywood from './Components/Hollywood';
import Food from './Components/Food';
import Technology from './Components/Technology';
import Fitness from './Components/Fitness';
import Individualdatapage from './Components/Individualdatapage';
import Reusablecomp2 from './Components/Reusablecomp2';
import Practice from './Components/Practice';
import { useState ,useEffect} from 'react';
import {Routes,Route,Link,NavLink} from 'react-router-dom'
import Datafromjson from './Data.json'
import { createContext } from 'react';
import axios from 'axios';
export let dataContext=createContext();
function App() {
   
  let [tab,settab]=useState(true);
  console.log(Datafromjson)
  let data=Object.keys(Datafromjson);

  let [blogdata,setblogdata]=useState({});
  let api="http://localhost:3015/home"
  useEffect(()=>{
    axios.get(api)
    .then(res=>{console.log(res.data)})
    .catch(()=>{console.log("error")    })
  },[])
console.log(data);
console.log(data);
let tabfunc=()=>{
  settab(!tab);
}
  return (
    <div className="App">

      <div className='Thesiren'>
      <div > 
    <h2 className='sirenlogo'><span style={{backgroundColor:"red"}}> The</span>
    <span style={{backgroundColor:"black"}}>Siren</span>
     <span className='tabs'><button onClick={tabfunc}>Tab</button></span> </h2>
  </div>

  {tab?(<Reusablecomp2 />) :""}
        
      
        </div>        {/* //DIsplaycontainer */}
        
             <Routes>
             <Route  path ='/' element={
        <dataContext.Provider value={Datafromjson.home}>
          <Home  />
          </dataContext.Provider>
        }/>      
        <Route  path ='/Home' element={
        <dataContext.Provider value={Datafromjson.home}>
          <Home  />
          </dataContext.Provider>
        }/>
        <Route  path ='/bollywood' element={<Bollywood data ={Datafromjson} />}/>
        <Route  path ='/hollywood' element={<Hollywood data ={Datafromjson} />}/>
        <Route  path ='/technology' element={<Technology data ={Datafromjson} />}/>
        <Route  path ='/food' element={<Food data ={Datafromjson} />}/>
        <Route  path ='/fitness' element={<Fitness data ={Datafromjson} />}/>
        <Route  path ='/individualdatapage/:index' element={<Individualdatapage  />}/>
       
        <Route  path =":Category" element={<Reusablecomp2  state ={Datafromjson}/>}/>
      </Routes>
        
    </div>    // App
  );
}

export default App;
