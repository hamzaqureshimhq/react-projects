// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Carousel from './component/Carousel';
import About from './component/About';
import Contactus from './component/Contactus';
import Footer from './component/Footer';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <About/>
    <Contactus/>
    <Footer/>
    </>
  );
}

export default App;
