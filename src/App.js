import './App.css';
import Home from './pages/home';
import Browse from './pages/browse';
import Collections from './pages/collections';
import Profile from './pages/profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
