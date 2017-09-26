import React, { Component } from 'react';
import axios from 'axios';

import SynonymCard from './SynonymCard';

class Search extends Component {
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
                console.log(this.state.wordData)
            })
        event.preventDefault();
    }

    render() {
    	let synonymCard;
	    if (this.state.wordData) {
	    	synonymCard = <SynonymCard data={this.state.wordData} />
	    } else {
	    	synonymCard = <h4>Type Your Word Now</h4>
	    }
        return (
        	<div>
		        <div> 
			        <form onSubmit={this.handleSubmit}>
			        	<label>
			          	Name:
			          	<input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
			        	</label>
			        	<input type="submit" value="Submit" />
			      	</form>
			    </div>
			    {synonymCard}
		    </div>
        );
    }
}

export default Search;