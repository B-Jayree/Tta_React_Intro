
import './App.css';
import Functional from "./components/Functional";
import ClassComp from "./components/ClassComp";

function App() {
  return (
    <div className="App">
        <div className="main-heading">
            <div>
                <h1>Meet The Team</h1>
                <p>Meet our team of professionals to serve you</p>
            </div>
            <div>
                <button className="borderless-buttons about-button " title="go to about us page">About us</button>
                <button className=" borderless-buttons contact-button" title="Go to contact us page">Contacts</button>
            </div>

        </div>
        <Functional/>
        <ClassComp/>
     
    </div>
  );
}

export default App;
