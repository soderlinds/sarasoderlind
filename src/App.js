import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Exhibitions from './components/Exhibitions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/_general.sass';
import './i18n';

function App() {
  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/work" element={ <Work /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/exhibitions" element={ <Exhibitions /> } />
      <Route path="/contact" element={ <Contact /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
