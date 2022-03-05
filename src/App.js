import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Homepage from './pages/homepage';
import Reserved from './pages/Reserved/reserved';
import RoomDetails from './pages/RoomDetails/roomDetails';
import './App.css';

function App() {
  return (  
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/reserved" element={<Reserved/>}/>
      <Route path="/roomDetails/:id" element={<RoomDetails/>}/>
    </Routes>
    </BrowserRouter> 
  </div>
  );
}

export default App;
