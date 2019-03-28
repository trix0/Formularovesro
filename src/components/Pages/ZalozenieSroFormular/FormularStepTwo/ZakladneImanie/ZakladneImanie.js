import React from 'react';
import classes from "./ZakladneImanie.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const zakladneImanie= (props) => {
	let valid=false;
	let touched=true;
	let errorMessage="Imanie error";

	let defaultErorr="Niečo sa pokazilo. Kontaktujte nás a mi vám pomôžeme.";
	return(
		<div className={classes.ZakladneImanie}>
			<h5>Základné imanie</h5>
			<div className={classes.GroupItem}>
				<div className={classes.itemContainer}>
					<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
						<label htmlFor="vyskaImania">Výška ímania</label>
						<input id="vyskaImania" type="email" name="vyskaImania" placeholder="5000€*" />
						{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}
					</div>
					
				</div>	

				<div className={classes.itemContainer}>
					<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
						<label htmlFor="rozsahSplatenia">Rozsah splatenia</label>
						<input id="rozsahSplatenia" type="email" name="rozsahSplatenia" placeholder="5000€*" />
						{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}
					</div>
					
				</div>			
			</div>

		</div>
		);	
}

export default zakladneImanie;