import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Scrollup  from './components/Scrollup';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Contact />
    <Footer />
    <Scrollup />
    </>
  );
}

export default App;
