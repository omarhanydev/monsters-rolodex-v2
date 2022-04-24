import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        firstName: 'Omar',
        lastName: 'Hany'
      },
      company: 'Izam'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work in {this.state.company}
          </p>
          <button onClick={() => {
            // this.setState({name: {firstName: 'Zoho', lastName: 'Test'}});
            // this.setState((state, props) => {
            this.setState(
              () => {
              return {name: {firstName: 'Zoho', lastName: 'Test'}}
            },
              () => {
              console.log(this.state);
            });
          }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
