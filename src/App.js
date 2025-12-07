import './App.css';
//import About from './components/About';
import Navbars from './components/Navbars';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import React,{ useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);
  const showAlertPopupMessageBasedOnServirityLevel=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggle=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlertPopupMessageBasedOnServirityLevel("Dark mode has been enabled","Success");
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlertPopupMessageBasedOnServirityLevel("Light mode has been enabled","Success");
      document.title='TextUtils - Light Mode';
    }

  }
  return (
   <>
   {/* <Router> */}
      <Navbars title="TextUtils" listItem1="Home" listItem2="About"  mode={mode} toggleMode={toggle}/>
      <Alerts alert={alert}/>
      <div className="container" >
        {/* <Routes>
            <Route exact
              path="/"
              element ={
                <TextForm showAlertPopupMessageBasedOnServirityLevel={showAlertPopupMessageBasedOnServirityLevel} title="Enter Text To Analyze Below" mode={mode}/>
                } />
            <Route exact
              path="/about"
              element={
                  <About /> 
              } />
        </Routes> */}
        <TextForm showAlertPopupMessageBasedOnServirityLevel={showAlertPopupMessageBasedOnServirityLevel} title="Enter Text To Analyze Below" mode={mode}/>
      </div>
    {/* </Router> */}
   </>
  );
}

export default App;
