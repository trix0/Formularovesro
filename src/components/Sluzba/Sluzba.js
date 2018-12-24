import React from 'react';
import classes from "./Sluzba.module.css"

const sluzba= (props) => {

return(
	<div className={classes.Sluzba}>
		<div className={classes.Content}>
			<h1>{props.Name}</h1>
			<p>{props.Content}</p>
		</div>
		<div className={classes.Price}>{props.Price}€</div>
		<div className={classes.Clear}></div>
	</div>
	)
}

export default sluzba;