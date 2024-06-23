import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import SobreDiv from "./components/SobreDiv/SobreDiv";
import HabilidadesDiv from "./components/HabilidadesDiv/HabilidadesDiv";

function App() {
  return (
    <div className="App">
      <Header/>
      <SobreDiv/>
      <HabilidadesDiv/>
    </div>
  );
}

export default App;
