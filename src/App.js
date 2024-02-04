import './App.css';
import Home from './pages/home';
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {


  return (

    <HashRouter basename="/">
    <div>
      {/* <div className="md:grid md:grid-cols-[200px_auto]"> */}
        {/* <Nav />         */}
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

      </div>
    </HashRouter>




    
    // <div className="md:grid md:grid-cols-[200px_auto]">
    //   <Nav />        
    //     <Home />
    //     {/* <Collection /> */}
    //     {/* <Favorites /> */}
    //     {/* <Wishlist /> */}
    //     {/* <News /> */}
    // </div>
  )
}

export default App;
