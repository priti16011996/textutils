import './App.css';
import Navbars from './components/Navbars';
import TextForm from './components/TextForm';

function App() {
  return (
   <>
    <Navbars title="TextUtils" listItem1="Home" listItem2="About"/>
    <div className="container" >
      <TextForm title="Enter Text To Analyze Below"/>
    </div>
   </>
  );
}

export default App;
