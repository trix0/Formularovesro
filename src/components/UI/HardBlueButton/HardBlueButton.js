import React from 'react';
import {Link} from 'react-router-dom';
import classes from "./HardBlueButton.module.css"

const hardBlueButton= (props) => {

return(
<Link to={props.link} className={classes.Button}>{props.text}</Link>
	)
}

export default hardBlueButton;
