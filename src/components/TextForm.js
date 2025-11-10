
import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        //console.log("OnChange was clicked")
        setText(event.target.value);
    }

    const handleLpClick =()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }
    const [text, setText] = useState("Enter Your Text Here")
    return (  
        <>
        <div className="container my-3"> 
            <h1>{props.title}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="Box" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Upper Case</button>
            <button className="btn btn-primary" onClick={handleLpClick}>Convert To Lower Case</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p><b>Total Number of Words in my Text:</b> {text.split(" ").length} </p>
            <p><b>Total Number Of Character in My Text: {text.length}</b></p>
            <p>{0.008*text.split(" ").length} <b>Time to Read Text</b></p>
            <h2>Preview Text:</h2>
            <p>{text}</p>
        </div>
        </>      
    );
}
