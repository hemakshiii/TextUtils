import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {  Routes, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode]=useState('light')

  const [alert, setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    
    setTimeout(() => {
      setAlert(null)
    },2500);
  }

 

    const toggleMode=()=>{
    if(mode==="light")
    {
      setMode('dark');
      document.body.style.background="black"
      showAlert("Dark mode has enable","Success");
      // document.title='TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.background="white"
      showAlert("Light mode has enable","Success");
      // document.title='TextUtils - Light Mode'
    }
    }
  return (
   <>
  <Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  
  <div className='container'>
    {/* <TextForm showAlert={showAlert} heading="Enter text below to analyze" mode={mode}/> */}
 
<Routes>
  
  <Route path="/" element={<TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter , Character
  Counter" mode={mode}/>}></Route>
  <Route path="/about" element={<About mode={mode}/>} ></Route>
</Routes>

  </div>
   </>
  );
}

export default App;




