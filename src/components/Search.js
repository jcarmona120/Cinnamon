import React from 'react';


const Search = (props) => {
        return (

		        <div className="searchForm"> 
			        <form onSubmit={props.handleSubmit}>
			        	<span>
			        	<label className="searchForm_label">
			          	Word:</label>
			          	<input className="basic-slide" type="text" value={props.searchTerm} onChange={props.handleChange} placeholder="Search" />
			          	</span>
			        	<input type="submit" value="Submit" id="submitButton" />
			      	</form>
			    </div>
        );
}

export default Search;