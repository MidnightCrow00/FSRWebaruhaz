import { useContext } from "react";
import "./App.css";
import Kosar from "./components/Kosar";
import Vasarloter from "./components/Vasarloter";
import { ApiContext } from "./contexts/ApiContext";

function App() {
  const {termekLista}=useContext(ApiContext)
  return (
    <div className="App">
      <header className="App-header">
        <h1>FakeStore</h1>
      </header>
      <main className="row">
        <aside className="col-lg-4">
          <h4>Kosár</h4>
          <Kosar />
        </aside>
        <article className="col-lg-8">
          <h4>Vasárlótér</h4>
          <Vasarloter termekLista={termekLista}/>
        </article>
      </main>
    </div>
  );
}

export default App;
