import React from 'react';
import classes from "./FormularStepOne.module.css";
import ObchodneMeno from "./ObchodneMeno/ObchodneMeno";
import Email from "./Email/Email";
import Sidlo from "./Sidlo/Sidlo.js";
const formularStepOne= (props) => {
	return(
		<div className={classes.formularStepOne}>
			<div className={classes.FormularItems}>
			<ObchodneMeno/>
			<Email/>
			<Sidlo/>
			</div>
			<div className={classes.Price}>
				
			</div>
		</div>
		);	
}

export default formularStepOne;