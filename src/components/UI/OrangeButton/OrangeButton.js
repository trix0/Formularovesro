import React from 'react';
import {Link} from 'react-router-dom';
import classes from "./OrangeButton.module.css"

const orangeButton= (props) => {
let style = {...props.style};
let side=props.side||null;
let sideClass=null;
if(side!=null){
sideClass=classes[side]
console.log(sideClass)
}
if(props.link){
return(
<Link to={props.link} className={classes.Button}>{props.text}</Link>
	)	
}
return(
<button style={style} to="" onClick={() => props.action()} className={[sideClass,classes.Button,(props.disabled?classes.Disabled:null)].join(" ")}>{props.text}</button>
	)

}

export default orangeButton;
