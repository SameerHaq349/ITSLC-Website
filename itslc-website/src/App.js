import logo from './logo.svg';
import './App.css';
import Profile from "./Components/Profile/Profile.js";

function App() {
  return (
    <div className="App">
      <Profile title="Council Chair" image="./images/SameerFinal.jpg" name="Sameer Haq"/>
      <Profile title="Vice Chair" image="./images/AlizahSquare.jpg" name="Alizah Usmani"/>
      <Profile title="PR Chair" image="./images/AviFinal.jpg" name="Avi Kacker"/>
      <Profile title="Workshops Chair" image="./images/Radhika.jpg" name="Radhika Aggarwal"/>
      <Profile title="Tutoring Chair" image="./images/Maanas.jpg" name="Maanas Dogga"/>
      <Profile title="Industry Chair" image="./images/Samin.jpg" name="Samin Rahman"/>
       
      
    </div>
  );
}

export default App;
