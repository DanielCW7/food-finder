import './App.css';
import Home from './pages/home';
import Browse from './pages/browse';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodDetails from './pages/foodDetails';


function App() {


  return (

    <BrowserRouter>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Permanent+Marker&display=swap" rel="stylesheet"></link>
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
