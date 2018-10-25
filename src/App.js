import React, {Component} from 'react';
import {getTester} from "./api";
import { Table } from "./Table/Table";
import './App.css';

class App extends Component {
  state = {
    testerName: '',
    payload: null,
    error: null,
  };

  onFieldChange = (event) => {
    this.setState({
      testerName: event.target.value
    });
  };

  onFetch = () => {
    getTester(this.state.testerName)
      .then(payload => {
        const testers = Array.isArray(payload) ? payload : [payload];
        this.setState({
          error: null,
          payload: testers,
        });
      })
      .catch(error => {
        this.setState({
          error: error.message === 'Unexpected end of JSON input' ? 'Could not find tester' : "Temporary error occurred, please try again later",
          payload: null,
        });
      })
  };

  render() {
    const inputError = this.state.testerName.length < 2 || this.state.testerName.length > 12;
    const errorClass = inputError ? 'error': '';
    return (
      <div className="App">
        <div className="viewport">
          <h1>Search bugs<img src='/bug.png' className='icon'/></h1>
          <div className='search-form'>
            <label className='search-form__label'>Tester Name</label>
            <input
              placeholder='Enter the tester name'
              value={this.state.testerName}
              onChange={this.onFieldChange}
              className={`search-form__input ${errorClass}`}
            />
            <button
              autoFocus={true}
              disabled={inputError}
              className='search-form__button'
              onClick={this.onFetch}>Fetch
            </button>
          </div>
          <div className='payload'>
            {this.state.payload && <Table testers={this.state.payload}/>}
            {this.state.error && <div className='payload__error'>{this.state.error}</div>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
