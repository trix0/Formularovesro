import React from 'react';
import classes from "./Zakladatelia.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OrangeButtonIcon from "../../../../UI/OrangeButtonIcon/OrangeButtonIcon";
import Modal from "../../../../UI/Modal/Modal";
import NovyZakladatel from "./NovyZakladatel/NovyZakladatel"
const zakladatelia= (props) => {
	let valid=false;
	let touched=true;
	let errorMessage="Zakladatelia error";
	let defaultErorr="Niečo sa pokazilo. Kontaktujte nás a mi vám pomôžeme.";

	return(
		<div className={classes.ZakladneImanie}>
			<h5>Zakladatelia(Spoločníci)</h5>
			<div className={classes.itemContainer}>
				<div className={classes.InputContainer}></div>
				<OrangeButtonIcon action={props.vlozitZakladatelaHandler} icon={{type:"plus",size:"1x",color:"white"}} text="Vložiť nového zakladateľa"/>
				<Modal closeModals={props.closeModals} modalID="vlozitZakladatelaModal" show={props.state.modals.vlozitZakladatelaModal}><NovyZakladatel/></Modal>
			</div>			
		</div>
		);	
}

export default zakladatelia;