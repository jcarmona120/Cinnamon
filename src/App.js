import React, { Component } from 'react';
import Search from './components/Search';
import SynonymCard from './components/SynonymCard';

import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props)
    	this.state = {
        	searchTerm: '',
        	wordData: ''
    	};

    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
   	}

    handleChange(event) {
        this.setState({ searchTerm: event.target.value })
    }

    handleSubmit(event) {
        axios.get(`https://api.datamuse.com/words?md=d&ml=${this.state.searchTerm}`)
            .then((response) => {
            	this.setState({wordData: response.data})
            })
        event.preventDefault();
    }

  render() {
  	const newData = Array.from(this.state.wordData)
    return (

      <div className="App">
        <h1>Cinnamon</h1>
        <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.searchTerm} onChange={this.handleChange} />
        <div>
        	<ul>
		        {newData.map((synonym) => {
		        	return <li>{synonym.word}</li>
		        })}
        	</ul>
        </div>
      </div>

    );
  }
}

export default App;
