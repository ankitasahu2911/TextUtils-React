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
  document.getSelection().removeAllRanges();
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
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
        <h1 className='mb-2'>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?' #13466e':'white', color:props.mode==='dark'?'white':'black'}}  id="mybox" rows="8"></textarea>
</div>

<button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to lowercase</button>
<button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
<button disabled={Text.length===0}className="btn btn-primary ms-2 my-1" type='submit' onClick={speak}>Speak</button>
<button disabled={Text.length===0} className="btn btn-primary ms-2 my-1" type='submit' onClick={cancelSpeech}>Stop</button>
<button disabled={Text.length===0} className="btn btn-primary ms-2 my-1" type='submit' onClick={handleCopy}>Copy Text</button>
<button disabled={Text.length===0} className="btn btn-primary ms-2 my-1" type='submit' onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} and {Text.length} characters</p>
      <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes Read</p>
      <h2>Preview</h2>
      <p>{Text.length>0?Text:"Nothing to preview"}</p>
    </div>

    </>
    
  )
}
