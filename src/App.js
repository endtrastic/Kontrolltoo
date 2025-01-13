import './index.css'
import Header from './components/Header'
import Meals from './components/Meals' 


fetch('http://localhost:3001/meals')
  .then(response => response.json())
  .then(data => {
    console.log('Data:', data);
});

const App = () => {
 return (
    <>
     <h1>Food Order App</h1>
     <Meals />
     <Header/>
    </>
  );
}

export default App;
