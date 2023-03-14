import './App.css';
import Homepage from './pages/home';
import Nav from './components/nav';


function App() {

  return (
    <div className="grid md:grid-cols-[150px_auto]">
      <Nav />
      <Homepage />
    </div>
  );
}

export default App;
