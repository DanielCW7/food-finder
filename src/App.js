import './App.css';
import Home from './pages/home';
import Browse from './pages/browse';
import Collections from './pages/collections';
import Profile from './pages/profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodDetails from './pages/foodDetails';
import Compare from './pages/compare';


function App() {


  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/browse/:id" element={<FoodDetails />} />
          {/* <Route path="/collections" element={<Collections />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/compare" element={<Compare />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
