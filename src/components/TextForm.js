import React, { useState } from 'react';


export default function TextForm(props)
{
  const [text, setText]= useState('');

  const handleOnChange=(event)=>{
    setText(event.target.value)
   
  }

  const handleUpClick=()=>{
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "Success")
  }
 
  const handleLpClick=()=>{
    let newText =  text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "Success")
  }

  const handleClearClick=()=>{
    let newText ='';
    setText(newText);
    props.showAlert("Cleared!!!", "Success")
  }

  const handleCopyClick=()=>{
    var text= document.getElementById('myBox')
    text.select()
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied!!!", "Success")
  }

  
  return( 
    <>
        <div className='container my-3'style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundcolor:props.mode==='dark'?'black':'white'}} value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0}className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleLpClick}>Convert to LowerCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleCopyClick}>Copy</button>
            
        </div> 
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{
          return element.length!==0}).length}
          words and {text.length} characters</p>
        <p>You can read the text in {0.008 * text.split(" ").filter((element)=>{
          return element.length!==0}).length} minutes</p>
        <h3 className='my-3'>Preview</h3>
        <p>{text}</p>

        </div> 
        </>      
  );
}


