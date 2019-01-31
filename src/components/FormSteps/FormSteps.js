import React from 'react';
import classes from "./FormSteps.module.css";
import FormStep from "./FormStep/FormStep";

const formSteps= (props) => {
	let steps=[
		{
			stepNumber:1,
			stepName:"Obchodné meno a sídlo"
		},
		{
			stepNumber:2,
			stepName:"Údaje o spoločnosti"
		},
		{
			stepNumber:3,
			stepName:"Predmet podnikania"
		},
		{
			stepNumber:4,
			stepName:"Záverečné údaje"
		},
		{
			stepNumber:5,
			stepName:"Platba"
		}
	];
	steps=steps.map((step)=><FormStep button={step.stepNumber<=props.stepAccessMax} Active={step.stepNumber==props.step} key={step.stepNumber} pickStep={props.pickStep} stepNumber={step.stepNumber} stepName={step.stepName}/>)
		return(
			<section className={"container "+classes.FormSteps}>
			{steps}
			</section>
		);	
}

export default formSteps;