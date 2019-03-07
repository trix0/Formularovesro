import React from 'react';
import classes from "./ObchodneMeno.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  OrangeButton from "../../../../UI/OrangeButton/OrangeButton"

const obchodneMeno= (props) => {
	let valid=false;
	let touched=true;
	let errorMessage="Zvolené obchodné meno už existuje"
	let defaultErorr="Niečo sa pokazilo. Kontaktujte nás a mi vám pomôžeme."
	return(
		<div className={classes.obchodneMeno}>

			<div>
				<h5>Obchodné meno</h5>
				<div className={classes.itemContainer}>
					<div className={classes.ValidationIcon}>
						{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:null}
					</div>	
					<div className={classes.InputsContainer}>
						<div className={classes.InputsInnerContainer}>
							<div className={classes.inputs}>
								<input type="text" name="obchodneMenoInput" placeholder="Zvoľte obchodné meno*"/>

								<select name="druhSpolocnostiInput">
								  <option value="sro">s.r.o.</option>
								  <option value="ciarkaSro">, s.r.o.</option>
								  <option value="spolSro">, spol. s.r.o</option>
								</select>						
							</div>
							<div>
								<OrangeButton style={{height:"35px"}}  side="ObchodneMeno" text="Overiť"/>
							</div>
						</div>
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>
				</div>
										
			</div>
		
		
		</div>

		);	
}

export default obchodneMeno;
