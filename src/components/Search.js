import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    state = {
        searchTerm: ''
    };

    handleSubmit(event) {
        axios.get(`https://api.datamuse.com/words?ml=${this.state.searchTerm}`)
            .then((response) => {
                var words = response.data;
                console.log(words)
            })
    }

    render() {
        return ( 
        <form onSubmit={this.handleSubmit}>
        	<label>
          	Name:
          	<input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        	</label>
        	<input type="submit" value="Submit" />
      	</form>
        );
    }
}

export default Search;