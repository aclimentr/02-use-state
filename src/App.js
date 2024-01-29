import logo from './logo.svg';
import './App.css';
import MiPrimerEstado from './Components/MiPrimerEstado';
import ComponenteAño from './Components/ComponenteAño';

let newYear = 2024;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Hook useState</h1>
          <MiPrimerEstado/>
          <ComponenteAño año={newYear}/>
      </header>
    </div>
  );
}

export default App;
