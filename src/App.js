import React, { Component } from 'react';
import Search from './components/Search';

import ReactCSSTransititionsGroup from 'react-addons-css-transition-group';

import SynonymCard from './components/SynonymCard';

import './App.css';

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
        axios.get(`https://api.datamuse.com/words?md=d&ml=${this.state.searchTerm}&max=10`)
            .then((response) => {
            	this.setState({wordData: response.data})
            })
        event.preventDefault();
    }

  render() {
  	const newData = Array.from(this.state.wordData)
  	const synonyms =  newData.map((synonym) => {
		        	return <li>{synonym.word}</li>
		        })
    return (

      <div className="App wrapper">
        <h1>Cinnamon</h1>
        <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.searchTerm} onChange={this.handleChange} />
        <div>
        	<ReactCSSTransititionsGroup 
        	component="ul"
        	transitionName="slide"
        	transitionEnterTimeout={500}
        	transitionLeaveTimeout={500}
        	transtitionAppear={true}
        	transitionAppearTimeout={500}
        	>
        	{synonyms}
		       
        	</ReactCSSTransititionsGroup>
        	
        </div>
      </div>

    );
  }
}

export default App;
