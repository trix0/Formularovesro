import React from 'react';
import classes from "./FormStep.module.css"

const formStep= (props) => {
	let activeClassNumber=[classes.FormStepNumber];
	let activeClassStep=[classes.FormStep];
	if(props.Active){
		activeClassNumber.push(classes.Active);
		activeClassStep.push(classes.ActiveStep);
	}
	else if(props.button){
		activeClassStep.push(classes.ButtonOn);
	}
		return(
			<div onClick={() => props.pickStep(props.stepNumber)} className={activeClassStep.join(" ") }>
				<span className={activeClassNumber.join(" ")}>{props.stepNumber}</span>
				<div className={classes.FormStepName}>{props.stepName}</div>
			</div>
		)	
}

export default formStep;