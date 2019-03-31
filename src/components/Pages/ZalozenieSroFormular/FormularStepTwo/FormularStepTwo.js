import React from 'react';
import classes from "./FormularStepTwo.module.css";
import ZakladneImanie from "./ZakladneImanie/ZakladneImanie";
import Zakladatelia from "./Zakladatelia/Zakladatelia";
const formularStepTwo= (props) => {
	return(
		<div className={classes.formularStepOne}>
			<h1 className={classes.formularHeading}>Vyplnte nasledujuce údaje o firme.</h1>
			<p className={classes.subHeading}>Vyplňte základné imanie a pridajte zakladateľov (spoločníkov) a konateľov.</p>
			<div className={classes.FormularItems}>
				<ZakladneImanie/>
				<Zakladatelia  upravitZakladatelaModal={props.upravitZakladatelaModal} ulozitZakladatela={props.ulozitZakladatela} closeModals={props.closeModals} vlozitZakladatelaHandler={props.vlozitZakladatelaHandler} state={props.state}/>
			</div>
		</div>
		);	
}

export default formularStepTwo;