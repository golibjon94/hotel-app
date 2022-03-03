import Header from './components/Header/Header'
import Main from './components/Main/Main';
import About from './components/About/About';
import Rooms from './components/Rooms/Rooms';
import Maps from './components/Maps/Maps';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Rooms />
      <Maps />
    </div>
  );
}

export default App;
