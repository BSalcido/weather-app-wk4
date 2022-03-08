import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="container">
        <Weather />
      </div>
      <footer>
        <a href="https://github.com/BSalcido/weather-app-wk4">
          Open-source code
        </a>{" "}
        by Brisa Salcido
      </footer>
    </div>
  );
}

export default App;
