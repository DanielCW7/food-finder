import './App.css';
import Homepage from './pages/home';
import News from './pages/news';
import Collection from './pages/collection';
import Favorites from './pages/favorites';
import Nav from './components/nav';
import Wishlist from './pages/wishlist.js';
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {


  return (

    // <HashRouter>
    //   <div className="md:grid md:grid-cols-[200px_auto]">
    //     <Nav />        
    //     <Routes>
    //       <Route path="/" element={<Homepage />} />
    //       <Route path="/news" element={<News />} />
    //       <Route path="/collection" element={<Collection />} />
    //       <Route path="/favorites" element={<Favorites />} />
    //     </Routes>

    //   </div>
    // </HashRouter>




    
    <div className="md:grid md:grid-cols-[200px_auto]">
      <Nav />        
        <Homepage />
        {/* <Collection /> */}
        {/* <Favorites /> */}
        {/* <Wishlist /> */}
        {/* <News /> */}
    </div>
  );
}

export default App;
