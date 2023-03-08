import logo from './logo.svg';
import './App.css';
import Homepage from './pages/home';
import Hero from './components/hero';


const submit = async (event) => {
    event.preventDefault()
        try {
        const response = await fetch("https://us-east-2.aws.data.mongodb-api.com/app/data-wxbpp/endpoint/data/v1")
        // const response = await fetch("https://jsonplaceholder.typicode.com/todos/5")
        const info = await response.json()
            console.log(info)
        } catch(error) {
            throw error
        }
}

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
