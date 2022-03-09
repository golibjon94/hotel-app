import React,{useReducer} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/homepage";
import Reserved from "./pages/Reserved/reserved";
import RoomDetails from "./pages/RoomDetails/roomDetails";
import "./App.css";
import { StateContext } from "./Context/context";
import reducer,{initialState} from './Reducer/reserveReducer';
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={{state,dispatch}}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/hotel-app" element={<Homepage />} />
            <Route path="/reserved" element={<Reserved />} />
            <Route path="/roomDetails/:id" element={<RoomDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StateContext.Provider>
  );
}

export default App;
