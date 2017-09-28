import React, { Component } from 'react';
import axios from 'axios';

import Search from './components/Search';
import SynonymCard from './components/SynonymCard';
import SiteTitle from './components/SiteTitle';

import './App.css';

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
        event.preventDefault();
        axios.get(`https://api.datamuse.com/words?md=d&ml=${this.state.searchTerm}&max=10`)
            .then((response) => {
            	this.setState({wordData: response.data})
            })
        
    }

  render() {
  	const newData = Array.from(this.state.wordData)
  	const synonyms =  newData.map((synonym) => {
		        	return <li key={synonym.score}>{synonym.word}</li>
		        })
    return (
      <div className="App wrapper">
        <SiteTitle />
        <div className="synonymWrapper">
            <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.searchTerm} onChange={this.handleChange} />
            <SynonymCard synonyms={synonyms} />
        </div>
      </div>

    );
  }
}

export default App;
