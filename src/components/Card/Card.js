import React from 'react';
import classes from "./Card.module.css"
import HardBlueButton from "../UI/HardBlueButton/HardBlueButton";

const card= (props) => {
let bg=require('../../assets/images/'+props.bgImage);

return(
		<div className={classes.Card+" card"} >
		  <img className="card-img-top" src={bg} alt={props.imgAlt}/>
		  <div className="card-body">
		    <h5 className="card-title">{props.title}</h5>
		    <p className="card-text">{props.paragraph}</p>
		    <HardBlueButton link={props.link} text={props.linkText} className="btn btn-primary"/>
		  </div>
		</div>
	)
}

export default card;




