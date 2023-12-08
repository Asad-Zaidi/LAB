import './App.css';
// import FetchApi from './component/FetchAPI'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './component/Home';
import About from './component/About'
import Contact from './component/Contact';
// import Head from './component/Head';

function App() {
  return (
    <>
      {/* <div>
      <FetchApi/>
    </div> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home}></Route>
          {/* <Route exact path='/Home' Component={Home}></Route> */}
          <Route exact path='/About' Component={About}></Route>
          {/* <Route exact path='/About/NewPage' Component={About}></Route> */}
          <Route exact path='/Contact' Component={Contact}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
