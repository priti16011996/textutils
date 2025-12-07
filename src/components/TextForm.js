
import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlertPopupMessageBasedOnServirityLevel("Converted to Uppercase!","Success");
    }

    const handleOnChange = (event)=>{
        //console.log("OnChange was clicked")
        setText(event.target.value);
        props.showAlertPopupMessageBasedOnServirityLevel("Text Changed!","Success");
    }

    const handleLpClick =()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlertPopupMessageBasedOnServirityLevel("Converted to Lowercase!","Success");  
    }
    const handleClearClick =()=>{
        let ClearText = '';
        setText(ClearText);
        props.showAlertPopupMessageBasedOnServirityLevel("Text Cleared!","Success");
    }
    const handlerCopyText=()=>{
        let text = document.getElementById("Box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlertPopupMessageBasedOnServirityLevel("Text Copied to Clipboard!","Success");    
    }
    const handlerRemoveExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlertPopupMessageBasedOnServirityLevel("Extra Spaces Removed!","Success");    
    }
    const handleDownloadClick = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "myTextFile.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        props.showAlertPopupMessageBasedOnServirityLevel("Text File Downloaded!","Success");
    };
    const [text, setText] = useState("Enter Your Text Here")
    return (  
        <>
        <div className="container my-3" style={{color:props.mode ==='dark'?'#ffffffff':'#050505ff'}}> 
            <h1>{props.title}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="Box" value={text} onChange={handleOnChange} style={{color:props.mode ==='dark'?'#000000ff':'#f8f3f3ff', backgroundColor:props.mode==='dark'?'white':'#908e8eff'}}rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={handleLpClick}>Convert To Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleDownloadClick}>Download Text</button>
            <button className="btn btn-primary mx-1" onClick={handlerCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handlerRemoveExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color:props.mode ==='dark'?'#ffffffff':'#050505ff'}}>
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
