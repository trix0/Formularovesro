import React from 'react';
import classes from "./HeroImage.module.css"
import ReactAux from "../../hoc/ReactAux"
import OrangeButton from "../UI/OrangeButton/OrangeButton";

const heroImage= (props) => {
let bg=require('../../assets/images/hero/'+props.bgImage);
return(
		<ReactAux>
				<section style={{ backgroundImage: "url("+bg+")" }} className={classes.Banner}>
				<div className={classes.BannerContainer}>
				<div className="container">
					<h1>{props.heading}<br/>{props.heading2}</h1>
			         <p className="lead font-weight-normal font-weight-bold">{props.paragraph}</p>
			          <OrangeButton text={props.buttonText} link={props.buttonLink}/>				
				</div>

				</div>
			        
			    </section>
	</ReactAux>
	)
}

export default heroImage;




