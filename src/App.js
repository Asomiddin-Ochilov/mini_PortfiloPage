import React,  { useEffect, useState } from "react";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import DarkMode from "./Components/DarkMode";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Skill from "./Components/Skill";
import Loader from "./Components/Loader"
function App() {

  const [loading, setLoading] = useState(true);
  

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)   
    },3000)
  },[])

  return (
    <div id="home" className="App">
      {
        loading ? <Loader loading={loading} /> 
        : <React.Fragment>
      <DarkMode/>
      <Header />
      <About />
      <Skill/>
      <Portfolio/>
      <Contacts/>
      </React.Fragment>
      }
    </div>
  );
}

export default App;
