import React from 'react';
import classes from "./Card.module.css"
import {Link} from 'react-router-dom';
import OrangeButton from "../UI/OrangeButton/OrangeButton";

const card= (props) => {
let bg=require('../../assets/images/'+props.bgImage);

return(
		<div className={classes.Card+" card"} >
		  <img className="card-img-top" src={bg} alt="Card image cap"/>
		  <div className="card-body">
		    <h5 className="card-title">{props.title}</h5>
		    <p className="card-text">{props.paragraph}</p>
		    <Link to={props.link} className="btn btn-primary">{props.linkText}</Link>
		  </div>
		</div>
	)
}

export default card;




