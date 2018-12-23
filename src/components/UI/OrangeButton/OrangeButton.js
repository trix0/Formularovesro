import React from 'react';
import {Link} from 'react-router-dom';
import classes from "./OrangeButton.module.css"

const orangeButton= (props) => {

return(
<Link to={props.link} className={classes.Button}>{props.text}</Link>
	)
}

export default orangeButton;
