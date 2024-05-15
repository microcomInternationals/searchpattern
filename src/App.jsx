
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import SearchBox from './components/Searchbox';
import Footer from './components/Footer';



function App() {


  return (

    <>
      <Router>
        <Navbar />
        <SearchBox />
        <Routes>
          <Route></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
