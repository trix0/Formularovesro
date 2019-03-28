import React from 'react';
import {Link} from 'react-router-dom';
import classes from "./OrangeButtonIcon.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const orangeButtonIcon= (props) => {
let style = {...props.style};
let side=props.side||null;
let sideClass=null;
let icon=null;
if(side!=null){
sideClass=classes[side]
console.log(sideClass)
}
if(props.icon){
icon=(<i className={classes.Icon}><FontAwesomeIcon color={props.icon.color} size={props.icon.size} icon={props.icon.type} /></i>);
}
if(props.link){
return(
<Link to={props.link} className={classes.Button}>{props.text}</Link>
	)	
}
return(
<button style={style} to="" onClick={() => props.action()} className={[sideClass,classes.Button,(props.disabled?classes.Disabled:null)].join(" ")}>{icon}{props.text}</button>
	)

}

export default orangeButtonIcon;
