import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h4>Chose a country</h4>
      <select id="countries">
        <option value="">Select a country</option>
        <option value="angola">Canada</option>
        <option value="angola">Hungary</option>
        <option value="angola">USA</option>
        <option value="angola">UK</option>
        <option value="angola">Spain</option>
      </select>
      <h4>Chose a metric</h4>
      <select id="metrics">
        <option value="">Select a metric</option>
        <option value="angola">GDP</option>
        <option value="angola">Deficit</option>
        <option value="angola">Population</option>
        <option value="angola">Area</option>
        <option value="angola">GDP World Ranking</option>
      </select>
      <h4>Submit</h4>
      <input value="submit" type="button"/>
    </div>
  );
}

export default App;
