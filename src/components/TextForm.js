import React, {useState} from 'react'

export default function TextForm(props) {
  const handleuppercaseclick = () =>{
    // console.log("Upper case was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
    document.title = 'TextUtils-UpperCase';
  }

  const handlelowercaseclick=()=>{
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
    document.title = 'TextUtils-LowerCase';
  }

  const handleclearclick=()=>{
    let newText=('');
    setText(newText);
    props.showAlert("The text has been cleared", "success");
    document.title = 'TextUtils-ClearText';
  }

  const handlecopytext=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");
    document.title = 'TextUtils-CopyText';
  }

  const handleremoveextraspaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed from the text", "success");
    document.title = 'TextUtils-ClearingSpaces';
  }

  const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#4F4D4D':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
        </div>

        <button disabled = {text.length === 0} className="btn btn-primary mx-2" onClick={handleuppercaseclick}>Convert to UpperCase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2" onClick={handlelowercaseclick}>Convert to LowerCase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2" onClick={handleclearclick}>Clear</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2" onClick={handlecopytext}>Copy text</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2" onClick={handleremoveextraspaces}>Remove Extra Spaces</button>
        
    </div>

    <div className="conatainer my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters in your text.</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes to read the text </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview."}</p>

    </div>
    </>
  )
}
