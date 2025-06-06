
import './App.css';
// import Functional from "./components/Functional";
// import ClassComp from "./components/ClassComp";
import Heading from "./components/Heading";
import Teams from "./components/Teams";
import maleMember  from "./assets/male.jfif";
import femaleMember  from "./assets/female.jfif";
import StateManagement from './components/StateManagement';


function App() {
  const memberList = [
    {
      image: femaleMember,
      name : "Annette Black",
      title: "Dog Trainer",
      symbol: "♠"
    },
    {
      image: maleMember,
      name : "Wade Warren",
      title: "Medical Assistant",
      symbol: "♣"
    },
    {
      image: femaleMember,
      name : "Savannah Nguye",
      title: "President of sales",
      symbol: "♥"
    },
    {
      image: maleMember,
      name : "Jenny Wilson",
      title: "Nursing Assistant",
      symbol: "♦"
    }
  ]
  return (
    <div className="App">
      <Heading/>
      <Teams members={memberList}/>
      <StateManagement/>
         
        {/* <Functional/>
        <ClassComp/> */}
     
    </div>
  );
}

export default App;
