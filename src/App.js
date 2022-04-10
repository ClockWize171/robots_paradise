import React, { Component } from 'react';
import './App.css';
import { CardLists } from './components/CardLists/CardLists';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Robots Paradise</h1>
        <SearchBox
          placeholder='Search Robots'
          handleChange={this.handleChange} />
        {filterMonsters.length === 0 ?
          (<div><h2>No Result</h2></div>)
          :
          (<CardLists monsters={filterMonsters} />)}

      </div>
    );
  };
}

export default App;
