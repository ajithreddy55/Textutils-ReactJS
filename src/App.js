import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";


let name = "Ajith";

function App() {

  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }

  const[mode, setMode]=useState('light');

  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils-DarkMode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils-LightMode';
    }
  }

  return (
 <>

 <BrowserRouter>
<Navbar title="TextUtils" About="About Utils" mode={mode} toggleMode={toggleMode} />

<Alert alert ={alert}/>

<div className="container">
<Routes>
          <Route exact path="/about" element={<About />}/>
            {/* <About /> */}
          {/* </Route> */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}/>
          
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> */}
          {/* </Route> */}
</Routes>

{/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> */}

</div>
</BrowserRouter>


{/* <About/> */}
 
 </>
  );
}

export default App;
