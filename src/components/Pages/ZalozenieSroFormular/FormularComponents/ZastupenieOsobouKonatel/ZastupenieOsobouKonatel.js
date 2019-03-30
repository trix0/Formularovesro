import React from 'react';
import classes from "./ZastupenieOsobouKonatel.module.css"
import InputMask from 'react-input-mask';
import Checkbox from "../../../../UI/Checkbox/Checkbox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const zastupenieOsobouKonatel= (props) => {
	let valid=false;
	let touched=true;
	let errorMessage="Sidlo error"
	let defaultErorr="Niečo sa pokazilo. Kontaktujte nás a mi vám pomôžeme."
	return(
			<div className={classes.ZastupenieOsobouKonatel}>
				<h5 className={classes.Header}>Zastúpenie osobou (konateľ)</h5>

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="pravnickaOsoba/zastupenieOsobou/meno">Meno*</label>
						<input value={props.zastupenieOsobou.meno} onChange={props.handleInputChange} id="pravnickaOsoba/zastupenieOsobou/meno" type="text" name="pravnickaOsoba/zastupenieOsobou/meno" placeholder="Meno*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>	

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="pravnickaOsoba/zastupenieOsobou/priezvisko">Priezvisko*</label>
						<input value={props.zastupenieOsobou.priezvisko} onChange={props.handleInputChange} id="pravnickaOsoba/zastupenieOsobou/priezvisko" type="text" name="pravnickaOsoba/zastupenieOsobou/priezvisko" placeholder="Priezvisko*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>	

			<div className={classes.InputWrapperSelect}>
				<div className={classes.InputContainer}>
					<label htmlFor="pravnickaOsoba/zastupenieOsobou/pohlavie">Pohlavie*</label>
					<select value={props.zastupenieOsobou.pohlavie} id="pravnickaOsoba/zastupenieOsobou/pohlavie" name="pravnickaOsoba/zastupenieOsobou/pohlavie" onChange={props.handleInputChange}>
		  				<option value="Muž">Muž</option>				
		  				<option value="Žena">Žena</option>				
					</select>
				</div>
			</div>	

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="pravnickaOsoba/zastupenieOsobou/datumNarodenia">Dátum narodenia*</label>
						<InputMask mask="99/99/9999" value={props.zastupenieOsobou.datumNarodenia} onChange={props.handleInputChange} id="pravnickaOsoba/zastupenieOsobou/datumNarodenia" type="text" name="pravnickaOsoba/zastupenieOsobou/datumNarodenia" placeholder="Deň/Mesiac/Rok*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="pravnickaOsoba/zastupenieOsobou/rodneCislo">Rodné číslo*</label>
						<InputMask mask="999999/9999" value={props.zastupenieOsobou.rodneCislo} onChange={props.handleInputChange} id="pravnickaOsoba/zastupenieOsobou/rodneCislo" type="text" name="pravnickaOsoba/zastupenieOsobou/rodneCislo" placeholder="Rodné číslo*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>


			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="pravnickaOsoba/zastupenieOsobou/vyskaVkladu">Výška vkladu(€)*</label>
						<input value={props.zastupenieOsobou.vyskaVkladu} onChange={props.handleInputChange} id="pravnickaOsoba/zastupenieOsobou/vyskaVkladu" type="text" name="pravnickaOsoba/zastupenieOsobou/vyskaVkladu" placeholder="Výška vkladu*"  />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>						

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="pravnickaOsoba/zastupenieOsobou/podielSpolocnosti">Podiel v spoločnosti(%)*</label>
						<input value={props.zastupenieOsobou.podielSpolocnosti} onChange={props.handleInputChange} id="pravnickaOsoba/zastupenieOsobou/podielSpolocnosti" type="text" name="pravnickaOsoba/zastupenieOsobou/podielSpolocnosti" placeholder="Podiel v spoločnosti*"  />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>	


			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="pravnickaOsoba/zastupenieOsobou/rozsahSplatenia">Rozsah splatenia vkladu(€)*</label>
						<input value={props.zastupenieOsobou.rozsahSplatenia} onChange={props.handleInputChange} id="pravnickaOsoba/zastupenieOsobou/rozsahSplatenia" type="text" name="pravnickaOsoba/zastupenieOsobou/rozsahSplatenia" placeholder="Rozsah splatenia vkladu*"  />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>	

						

			</div>
		);
}

export default zastupenieOsobouKonatel;