import React from 'react';
import "./BurgerMenu.css"
const burgerMenu= (props) => {
	let classnames="hamburger hamburgerSpring";
	if(props.status){
		classnames="hamburger hamburgerSpring isActive";
	}
	return(
	<button onClick={props.click} className={classnames} type="button">
	  <span className="hamburgerBox">
	    <span className="hamburgerInner"></span>
	  </span>
	</button>
);


}

export default burgerMenu;