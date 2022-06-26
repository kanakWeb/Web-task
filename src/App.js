import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Component/Home/Home';
import Layer2 from "./Component/Home/Layer2";
import Layer3 from "./Component/Home/Layer3";
import Nav from "./Component/Nav/Nav";

function App() {
  return (
    <div className='all-layer'>
      <Nav></Nav>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='layer2' element={<Layer2></Layer2>}></Route>
      <Route path='layer3' element={<Layer3></Layer3>}></Route>
     </Routes>
    </div>
  );
}

export default App;
