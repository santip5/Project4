import React from 'react';
import './States.css';

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };
    console.log('window.models.states', window.models.states);
  }

  handleInputChange = (event) => {
    this.setState({ searchString: event.target.value });
  };

  filterStates = () => {
    const { searchString } = this.state;
    const filteredStates = window.models.states().filter((state) =>
        state.toLowerCase().includes(searchString.toLowerCase())
    );
    return filteredStates;
  };

  render() {
    const filteredStates = this.filterStates();
    return (
      <div>
        <input
            type="text"
            placeholder="Search state"
            value={this.state.searchString}
            onChange={this.handleInputChange}
        />
        <div>
          <p>States containing: {this.state.searchString}</p>
        </div>
        <ul>
          {filteredStates.length > 0 ? (
              filteredStates.map((state, index) => (
                  <li key={index}>{state}</li>
              ))
          ) : (
              <p>No matching states found.</p>
          )}
        </ul>
      </div>
    );
  }
}

export default States;
