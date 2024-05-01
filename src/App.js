import './App.css';
import Home from './pages/home';
import Browse from './pages/browse';
import Collections from './pages/collections';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/collections" element={<Collections />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
