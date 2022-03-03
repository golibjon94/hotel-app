import Header from './components/Header/Header'
import Main from './components/Main/Main';
import About from './components/About/About';
import Rooms from './components/Rooms/Rooms';
import Contact from './components/Contacts/Contact';
import Maps from './components/Maps/Maps';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Rooms />
      <Contact />
      <Maps />
      <Footer />
     
    </div>
  );
}

export default App;
