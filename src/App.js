import './App.css';
import Home from './pages/home';
import Browse from './pages/browse';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodDetails from './pages/foodDetails';


function App() {


  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/browse/:id" element={<FoodDetails />} />
          {/* <Route path="/collections" element={<Collections />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/compare" element={} /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App;
