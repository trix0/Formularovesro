import React from 'react';
import classes from "./OrangeButtonJS.module.css"

const orangeButtonJS= (props) => {

return(
<button className={classes.Button}>{props.text}</button>
	)
}

export default orangeButtonJS;
