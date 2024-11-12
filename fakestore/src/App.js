import "./App.css"; 
import TermekAdmin from "./components/TermekekAdmin";
import Urlap from "./components/Urlap";
import Public from "./pages/Public";

function App() {

  return (
      <div className="App">
        <header className="App-header">
          <h1>FakeStore</h1>
        </header>
        <main>
          <Urlap/>
        </main>
        <TermekAdmin/>
      </div>
  );
}

export default App;
