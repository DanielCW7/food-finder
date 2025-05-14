import './App.css';
import Home from './pages/home';
import Browse from './pages/browse';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {

  return (

    <Router>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
      <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Lobster&display=swap" rel="stylesheet"></link>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
    </Router>
  )
}

export default App;
