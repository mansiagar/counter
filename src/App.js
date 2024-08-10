//import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import Counter from "./Components/Counter.jsx";
import { CounterContext } from "./context/Counter.jsx";
function App() {
  const counterState = useContext(CounterContext);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Count {counterState.count} </h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;
