
import './App.css';
import Front from './components/front';
import HeadSection from './components/HeadSection';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
     
     <NavBar/>
     <Front btn1 = "Get Started"/>
     <HeadSection/>
    </div>
  );
}

export default App;
