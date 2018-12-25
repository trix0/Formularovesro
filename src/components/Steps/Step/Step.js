import React from 'react';
import classes from "./Step.module.css"

const step= (props) => {
return(
				<div className={classes.Step}>
					<h1>{props.Heading}</h1>
					<p>{props.Content}</p>
			    </div>
	)
}

export default step;




