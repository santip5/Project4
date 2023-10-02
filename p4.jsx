//p4 jsx file
import React from 'react';
import ReactDOM from 'react-dom';

import '/components/header/Header.css';
import Header from '../components/header/Header.jsx';
import States from './components/states/States';

class Example extends Component {
  render() {
    return (
      <div>
        <h1>Example View</h1>
        <button onClick={this.props.toggleView}>Switch to States</button>
      </div>
    );
  }
}

class States extends Component {
  render() {
    return (
      <div>
        <h1>States View</h1>
        <button onClick={this.props.toggleView}>Switch to Example</button>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      showExample: true,
    };
  }

  toggleView = () => {
    this.setState((prevState) => ({
      showExample: !prevState.showExample,
    }));
  };

  render() {
    return (
      <div>
        {this.state.showExample ? (
          <Example toggleView={this.toggleView} />
        ) : (
          <States toggleView={this.toggleView} />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reactapp'));
