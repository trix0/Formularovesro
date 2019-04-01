import React from 'react';
import classes from "./Zakladatelia.module.css";
import OrangeButtonIcon from "../../../../UI/OrangeButtonIcon/OrangeButtonIcon";
import Modal from "../../../../UI/Modal/Modal";
import EditIcon from "../../../../UI/EditIcon/EditIcon";
import NovyZakladatel from "./NovyZakladatel/NovyZakladatel"
const zakladatelia= (props) => {
	let spolcniciList=[...props.state.spolocnici]
	let spolcnici=spolcniciList.map((spolocnik,index)=>{
		if(spolocnik.typZakladatela==="pravnickaOsoba"){
			return(	
				<tr key={index}>
				<td>{spolocnik.pravnickaOsoba.obchodneMeno}</td>
				<td>{spolocnik.pravnickaOsoba.vyskaVkladu}</td>
				<td>{spolocnik.pravnickaOsoba.podielSpolocnosti}</td>
				<td>{spolocnik.pravnickaOsoba.rozsahSplatenia}</td>
				<td><EditIcon  color="#7A9AA5" size="lg" icon="edit" onClick={()=>props.upravitZakladatelaModal(index)}>Upraviť</EditIcon></td>
				<td><EditIcon  color="#7A9AA5" size="lg" icon="trash-alt"  onClick={()=>props.zmazatZakladatela(index)}>Odobrať</EditIcon></td>
				</tr>
			)
		}
		return(
			<tr key={index}>
			{console.log(spolocnik)}
				<td>{spolocnik.fyzickaOsoba.meno+" "+spolocnik.fyzickaOsoba.priezvisko}</td>
				<td>{spolocnik.fyzickaOsoba.vyskaVkladu}</td>
				<td>{spolocnik.fyzickaOsoba.podielSpolocnosti}</td>
				<td>{spolocnik.fyzickaOsoba.rozsahSplatenia}</td>
				<td><EditIcon  color="#7A9AA5" size="lg" icon="edit" onClick={()=>props.upravitZakladatelaModal(index)}>Upraviť</EditIcon></td>
				<td><EditIcon  color="#7A9AA5" size="lg" icon="trash-alt"  onClick={()=>props.zmazatZakladatela(index)}>Odobrať</EditIcon></td>
			</tr>
			)

	})
	return(
		<div className={classes.ZakladneImanie}>
			<h5>Zakladatelia(Spoločníci)</h5>
			<div className={classes.itemContainer}>
				<OrangeButtonIcon action={props.vlozitZakladatelaHandler} icon={{type:"plus",size:"1x",color:"white"}} text="Vložiť nového zakladateľa"/>
				{props.state.modals.vlozitZakladatelaModal?<Modal closeModals={props.closeModals} modalID="vlozitZakladatelaModal" show={props.state.modals.vlozitZakladatelaModal}><NovyZakladatel closeModals={props.closeModals} ulozitZakladatela={props.ulozitZakladatela}/></Modal>:null}
				{props.state.modals.upravitZakladatelaModal?<Modal closeModals={props.closeModals} modalID="upravitZakladatelaModal" show={props.state.modals.upravitZakladatelaModal}><NovyZakladatel closeModals={props.closeModals} upravitZakladatela={props.upravitZakladatela} spolocnici={props.state.spolocnici} upravitZakladatelaID={props.state.sideInfo.upravitZakladatelaID} /></Modal>:null}
			</div>		
				<div className={classes.ZakladateliaList}>
					<table>
						<thead>
							<tr>
								<th>Meno priezvisko</th>
								<th>Vklad</th>
								<th>Podiel</th>
								<th>Splatené</th>
								<th>Upraviť</th>
								<th>Odobrať</th>
							</tr>
						</thead>
						<tbody>
							{spolcnici}
						</tbody>
					</table>
				</div>
		</div>
		);	
}

export default zakladatelia;