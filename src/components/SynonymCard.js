import React from 'react';
import ReactCSSTransititionsGroup from 'react-addons-css-transition-group';


const SynonymCard = (props) => {
		return (
			<div className="synonymsList">
	            	<ReactCSSTransititionsGroup 
	            	component="ul"
	            	transitionName="slide"
	            	transitionEnterTimeout={500}
	            	transtitionAppear={true}
	            	transitionAppearTimeout={500}
	            	>
	            	{props.synonyms}
	    		       
	            	</ReactCSSTransititionsGroup>
	            	
	        </div>
        )
    }



export default SynonymCard;