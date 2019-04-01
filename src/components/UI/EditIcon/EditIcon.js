import React from 'react';
import {Link} from 'react-router-dom';
import classes from "./EditIcon.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const editIcon= (props) => {
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

<FontAwesomeIcon {...props} style={style} />
	)

}

export default editIcon;
