import React from 'react';
import classes from "./Sluzba.module.css"

const sluzba= (props) => {
let pre=<p>{props.Content}</p>
if(props.Content.length<129){
	pre=<p>{props.Content}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
}
return(
	<div className={classes.Sluzba}>
		<div className={classes.Content}>
			<h1>{props.Name}</h1>
			{pre}
		</div>
		<div className={classes.Price}>

			<div>{Number.isInteger(+props.Price)?props.Price+"€":props.Price}</div>
			<div className={classes.Note}>{props.Note?"("+props.Note+")":""}</div>
		</div>
	</div>
	)
}

export default sluzba;