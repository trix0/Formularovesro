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
						<label htmlFor="streetName">Názov ulice</label>
						<input id="streetName" type="text" name="streetName" placeholder="Názov ulice*" />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>
				

				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
						<label htmlFor="supisneCislo">Súpisné čislo</label>
						<input id="supisneCislo" type="text" name="supisneCislo" placeholder="Súpisné čislo*" />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>	
				

				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
						<label htmlFor="OrientacneCislo">Orientačné čislo</label>
						<input id="OrientacneCislo" type="text" name="orientacneCislo" placeholder="Oričntačné číslo*" />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>				


				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
						<label htmlFor="city">Obec*</label>
						<input id="city" type="text" name="city" placeholder="Napr. Banská Bystrica*" />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>	


				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="psc">PSČ*</label>
							<input id="psc" type="text" name="psc" placeholder="#####*" />
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
						<label htmlFor="propretyType">Druh priestoru*</label>
						<select id="propretyType" name="propretyType">
			  				<option value="nebytovyPriestor">Nebytový priestor</option>				
			  				<option value="bytVBytovomDome">Byt v bytovom dome</option>				
			  				<option value="inaBudova">Iná budova</option>				
			  				<option value="rodinnyDom">Rodinný dom</option>				
			  				<option value="samostatneStojacaGaraz">Samostatne stojaca garáž</option>				
						</select>
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>

				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="menoVlastnika">Meno vlastníka*</label>
							<input id="menoVlastnika" type="text" name="menoVlastnika" placeholder="Meno*" />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>	

				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="priezviskoVlastnika">Priezvisko vlastníka*</label>
							<input id="priezviskoVlastnika" type="text" name="priezviskoVlastnika" placeholder="Priezvisko*" />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>	
			</div>

		);	
}

export default sidlo;


