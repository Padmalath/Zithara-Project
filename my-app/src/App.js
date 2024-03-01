import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div >
      <header >
        <Navbar />
        <div className='App'>
        <p>Designed By Vamshi Koduri</p>
        <a href="mailto:vamshipatel9989@gmail.com" className='mail fa-regular fa-envelope' style={{ letterSpacing: '2px' }}>vamshipatel9989@gmail.com</a>
        </div>
      </header>
    </div>
  );
}

export default App;
