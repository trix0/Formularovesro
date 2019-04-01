import React from 'react';
import classes from "./ObchodneMeno.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  OrangeButton from "../../../../UI/OrangeButton/OrangeButton"

const obchodneMeno= (props) => {
	let valid=props.state.validation.obchodneMeno.valid

	let touched=props.state.validation.obchodneMeno.touched
	let errorMessage=props.state.validation.obchodneMeno.error
	let defaultErorr="Niečo sa pokazilo. Kontaktujte nás a mi vám pomôžeme."
	return(
		<div className={classes.obchodneMeno}>

			<div>
				<h5>Obchodné meno</h5>
				<div className={classes.itemContainer}>
				<div className={classes.ValidationIcon}>{props.state.validation.obchodneMeno.touched?props.state.validation.obchodneMeno.valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputsContainer}>
						<div className={classes.InputsInnerContainer}>
							<div className={classes.inputs}>
								<input onChange={props.handleInputChange} type="text" id="obchodneMeno"  name="obchodneMeno" placeholder="Zvoľte obchodné meno*"/>

								<select onChange={props.handleInputChange} name="druhSpolocnosti" id="druhSpolocnosti">
								  <option value="s.r.o.">s.r.o.</option>
								  <option value=", s.r.o.">, s.r.o.</option>
								  <option value=", spol. s.r.o">, spol. s.r.o</option>
								</select>						
							</div>
							<div>
								<OrangeButton style={{height:"35px"}}  side="ObchodneMeno" text="Overiť"/>
							</div>
						</div>
						<div>{props.state.validation.obchodneMeno.valid||!props.state.validation.obchodneMeno.touched?null:<div className={classes.error}>{props.state.validation.obchodneMeno.error?props.state.validation.obchodneMeno.error:defaultErorr}</div>}</div>
					</div>
				</div>
										
			</div>
		
		
		</div>

		);	
}

export default obchodneMeno;
