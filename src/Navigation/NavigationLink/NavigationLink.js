import React from 'react';
import classes from "./NavigationLink.module.css"
const navigationLink= (props) => {
	let icon=null;
	let linkType=props.children;
	if(!props.subMenuB){
		linkType=<span>{props.children}</span>
	}
	if(props.subMenuIndicator){
		icon=(<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-down" className="dropdownSvg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

<path fill="#999" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 
33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>)
	}
	return (
		<div className={classes.NavLink}>
			<a  className="py-2  d-md-inline-block navigationLink py-2  d-md-inline-block"  href={props.href}>
			{linkType}
			</a>
			{icon}
		</div>)
}


export default navigationLink;