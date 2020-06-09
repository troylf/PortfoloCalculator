import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BalanceCalculator/>       
      </header>
    </div>
  );
}

class BalanceCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fullBalance: 100 };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      
      <div>
        <div style={{marginBottom:"30px"}}>
          <label>Full Balance: </label>
          <input
            id="balanceInput"
            type="number"
            onChange={this.handleChange}
            value={this.state.fullBalance}
          />
        </div>
        <table>
        <tr><td>Stocks</td><td>{ (this.state.fullBalance*0.3).toFixed(2)}</td></tr>
        <tr><td>Intermediate US Bonds</td><td>{ (this.state.fullBalance*0.15).toFixed(2)}</td></tr>
        <tr><td>Long Term US Bonds</td><td>{ (this.state.fullBalance*0.4).toFixed(2)}</td></tr>
        <tr><td>Gold</td><td>{ (this.state.fullBalance*0.075).toFixed(2)}</td></tr>
        <tr><td>Commodities</td><td>{ (this.state.fullBalance*0.075).toFixed(2)}</td></tr>
        </table>
      </div>
    );
  }

  handleChange(event) {    this.setState({fullBalance: event.target.value});  }

}

export default App;
