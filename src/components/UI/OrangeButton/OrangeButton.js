import React from 'react';
import {Link} from 'react-router-dom';
import classes from "./OrangeButton.module.css"

const orangeButton= (props) => {
if(props.link){
return(
<Link to={props.link} className={classes.Button}>{props.text}</Link>
	)	
}
return(
<button to="" onClick={() => props.action()} className={[classes.Button,(props.disabled?classes.Disabled:null)].join(" ")}>{props.text}</button>
	)

}

export default orangeButton;
