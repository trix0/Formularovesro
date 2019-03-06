import React from 'react';
import classes from "./FormularStepOne.module.css";
import ObchodneMeno from "./ObchodneMeno/ObchodneMeno";
import Email from "./Email/Email";
import Sidlo from "./Sidlo/Sidlo.js";
const formularStepOne= (props) => {
	return(
		<div className={classes.formularStepOne}>
			<h1 className={classes.formularHeading}>Zvoľte si obchodné meno vašej novej firmy</h1>
			<p className={classes.subHeading}>Zadajte údaje o vašej novej firme a všetko ostatné vybavíme do dvoch týždňov za vás.<br/> Ušetríte čas s papierovačkami a zaplatíte menej.</p>
			<div className={classes.FormularItems}>
			<ObchodneMeno/>
			<Email/>
			<Sidlo/>
			</div>
		</div>
		);	
}

export default formularStepOne;