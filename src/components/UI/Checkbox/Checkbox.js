import React from 'react';
import classes from "./Checkbox.module.css"
const checkbox= (props) => {
	let labelClassName=[classes.cssLabel];
	let infoClassName=[classes.Info];
	if(!props.checked){
		labelClassName.push(classes.Disabled)
		infoClassName.push(classes.Disabled)
	}
return(
	<div className={classes.checkBox}>
	<input {...props} type="checkbox" className={classes.cssCheckbox}/><label htmlFor={props.htmlFor} className={labelClassName.join(" ")}>{props.text}</label>
	{props.info?<div className={infoClassName.join(" ")}>{props.info}</div>:null}
	</div>
)	
}

export default checkbox;