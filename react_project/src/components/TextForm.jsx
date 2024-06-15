import React, {useState} from 'react'



export default function TextForm(props) {
    const [Text, setText] = useState("");
// uppercase------------
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + Text);
        let newText=Text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been converted to uppercase" , "success");
    }
// lowercase--------------
    const handleLowClick=()=>{
      // console.log("Lowercase was clicked" + Text);
      let newText=Text.toLowerCase();
      setText(newText)
      props.showAlert("Text has been converted to lowercase" , "success");
  }
  // clear---------
  const handleClearClick=()=>{
    // console.log("Clear was clicked" + Text);
    let newText=" ";
    setText(newText)
    props.showAlert("Cleared" , "success");
}
// speak-------
const speak=()=>{
let msg=new SpeechSynthesisUtterance();
msg.text=Text;
window.speechSynthesis.speak(msg);
props.showAlert("Speaking" , "success");
}
// stop=-------------
const cancelSpeech=()=>{
speechSynthesis.cancel()
props.showAlert("Stopped speech" , "success");

}

// Copy-------
const handleCopy=()=>{
  var text=document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to clipboard" , "success");
}

// handle extra space-----------
const handleExtraSpaces=()=>{
  let newText=Text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Spaces are cleared" , "success");
}

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    // setText("NewText")   wrong way---------------
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?' grey':'white', color:props.mode==='dark'?'white':'black', caretColor:props.mode==='dark'?'black':'black'}}  id="mybox" rows="8"></textarea>
</div>

<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary ms-2" type='submit' onClick={speak}>Speak</button>
<button className="btn btn-primary ms-2" type='submit' onClick={cancelSpeech}>Stop</button>
<button className="btn btn-primary ms-2" type='submit' onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary ms-2" type='submit' onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{Text.split(" ").length} and {Text.length} characters</p>
      <p>{0.008 * Text.split(" ").length } Minutes Read</p>
      <h2>Preview</h2>
      <p>{Text.length>0?Text:"Enter something above to preview it here"}</p>
    </div>
    </>
    
  )
}
