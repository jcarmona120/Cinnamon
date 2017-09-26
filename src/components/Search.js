import React from 'react';


const Search = (props) => {
        return (
        	<div>
		        <div> 
			        <form onSubmit={props.handleSubmit}>
			        	<label>
			          	Name:
			          	<input type="text" value={props.searchTerm} onChange={props.handleChange} placeholder="Search" />
			        	</label>
			        	<input type="submit" value="Submit" />
			      	</form>
			    </div>
		    </div>
        );
}

export default Search;