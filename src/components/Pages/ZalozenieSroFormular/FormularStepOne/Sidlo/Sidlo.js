import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from "./Sidlo.module.css";

const sidlo= (props) => {
	let valid=false;
	let touched=true;
	let errorMessage="Sidlo error"
	let defaultErorr="Niečo sa pokazilo. Kontaktujte nás a mi vám pomôžeme."
	return(
			<div className={classes.Sidlo}>
				<h5>Sídlo spoločnosti</h5>
				<div className={classes.InputWrapper}>
				<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
						<label htmlFor="sidlo/ulica">Názov ulice</label>
						<input onChange={props.handleInputChange} type="text" id="sidlo/ulica"  name="sidlo/ulica"  type="text" placeholder="Názov ulice*" />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>
				

				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
						<label htmlFor="sidlo/supisneCislo">Súpisné čislo</label>
						<input onChange={props.handleInputChange} id="sidlo/supisneCislo" type="text" name="sidlo/supisneCislo" placeholder="Súpisné čislo*" />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>	
				

				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
						<label htmlFor="sidlo/orientacneCislo">Orientačné čislo</label>
						<input onChange={props.handleInputChange} id="sidlo/orientacneCislo" type="text" name="sidlo/orientacneCislo" placeholder="Oričntačné číslo*" />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>				


				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
						<label htmlFor="sidlo/obec">Obec*</label>
						<input onChange={props.handleInputChange} id="sidlo/obec" type="text" name="sidlo/obec" placeholder="Napr. Banská Bystrica*" />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>	


				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="sidlo/psc">PSČ*</label>
							<input onChange={props.handleInputChange} id="sidlo/psc" type="text" name="sidlo/psc" placeholder="#####*" />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>	

<br/>
<br/>
				<h5>Informácie o vlastníkovi nehnutelnosti</h5>
				<span className={classes.InfoText}>Na vytvorenie dokumentu "Súhlas vlastníka nehnuteľnosti" so zápisom nehnuteľnosti do obchodného registra ako sídla vašej spoločnosti budeme potrebovať nasledovné údaje:</span>
				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
						<label htmlFor="sidlo/suhlasVlastnika/druh">Druh priestoru*</label>
						<select onChange={props.handleInputChange}  id="sidlo/suhlasVlastnika/druh" name="sidlo/suhlasVlastnika/druh">
			  				<option value="Nebytový priestor">Nebytový priestor</option>				
			  				<option value="Byt v bytovom dome">Byt v bytovom dome</option>				
			  				<option value="Rodinný dom">Rodinný dom</option>				
			  				<option value="Samostatne stojaca garáž">Samostatne stojaca garáž</option>				
			  				<option value="Iná budova">Iná budova</option>				
						</select>
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>

				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="sidlo/suhlasVlastnika/vlastnikMeno">Meno vlastníka*</label>
							<input onChange={props.handleInputChange} id="sidlo/suhlasVlastnika/vlastnikMeno" type="text" name="sidlo/suhlasVlastnika/vlastnikMeno" placeholder="Meno*" />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>	

				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="sidlo/suhlasVlastnika/vlasnikPriezvisko">Priezvisko vlastníka*</label>
							<input onChange={props.handleInputChange} id="sidlo/suhlasVlastnika/vlasnikPriezvisko" type="text" name="sidlo/suhlasVlastnika/vlasnikPriezvisko" placeholder="Priezvisko*" />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>	
			</div>

		);	
}

export default sidlo;


