import './App.css';
import Home from './pages/home';
import News from './pages/news';
import Collection from './pages/collection';
import Favorites from './pages/favorites';
import Wishlist from './pages/wishlist.js';
import Profile from './pages/profile';
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {


  return (

    <HashRouter basename="/">
    <div>
      {/* <div className="md:grid md:grid-cols-[200px_auto]"> */}
        {/* <Nav />         */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />

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
