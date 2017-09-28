import React from 'react';


const Search = (props) => {
        return (
        	<div>
		        <div className="searchForm"> 
			        <form onSubmit={props.handleSubmit}>
			        	<span>
			          	<input className="basic-slide" type="text" value={props.searchTerm} onChange={props.handleChange} placeholder="Search" />
			          	</span>
			        	<input type="submit" value="Get your Synonym" id="submitButton" />
			      	</form>
			    </div>
			</div>
        );
}

export default Search;