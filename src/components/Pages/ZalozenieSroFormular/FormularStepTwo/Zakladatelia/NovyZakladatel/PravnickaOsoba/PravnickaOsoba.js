import React from 'react';
import classes from "./PravnickaOsoba.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputMask from 'react-input-mask';
import Checkbox from "../../../../../../UI/Checkbox/Checkbox"
import ZastupenieOsobouKonatel from "../../../../FormularComponents/ZastupenieOsobouKonatel/ZastupenieOsobouKonatel"
const pravnickaOsoba = (props) => {
	let valid=false;
	let touched=true;
	let errorMessage="Sidlo error"
	let defaultErorr="Niečo sa pokazilo. Kontaktujte nás a mi vám pomôžeme."


	return(<div className={classes.PravnickaOsoba}>
			<div className={classes.InputWrapperSelect}>
				<div className={classes.InputContainer}>
					<label htmlFor="pravnickaOsoba/ico">IČO*</label>
					<input value={props.pravnickaOsoba.ico} onChange={props.handleInputChange} id="pravnickaOsoba/ico" type="text" name="pravnickaOsoba/ico" placeholder="ICO" />
				</div>
			</div>	

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="pravnickaOsoba/obchodneMeno">Obchodné meno*</label>
						<input value={props.pravnickaOsoba.obchodneMeno} onChange={props.handleInputChange} id="pravnickaOsoba/obchodneMeno" type="text" name="pravnickaOsoba/obchodneMeno" placeholder="Obchodné meno*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>	

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="pravnickaOsoba/ulica">Ulica*</label>
						<input value={props.pravnickaOsoba.ulica} onChange={props.handleInputChange} id="pravnickaOsoba/ulica" type="text" name="pravnickaOsoba/ulica" placeholder="Ulica*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>	

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="pravnickaOsoba/supisneCislo">Súpisné číslo</label>
						<input value={props.pravnickaOsoba.supisneCislo} onChange={props.handleInputChange} id="pravnickaOsoba/supisneCislo" type="text" name="pravnickaOsoba/supisneCislo" placeholder="Súpisné číslo" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>	

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="pravnickaOsoba/orientacneCislo">Orientačné čislo*</label>
						<input value={props.pravnickaOsoba.orientacneCislo} onChange={props.handleInputChange} id="pravnickaOsoba/orientacneCislo" type="text" name="pravnickaOsoba/orientacneCislo" placeholder="Orientačné čislo*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="pravnickaOsoba/obec">Obec*</label>
						<input value={props.pravnickaOsoba.obec} onChange={props.handleInputChange} id="pravnickaOsoba/obec" type="text" name="pravnickaOsoba/obec" placeholder="Napr. Banská Bystrica" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="pravnickaOsoba/psc">PSČ*</label>
						<input value={props.pravnickaOsoba.psc} onChange={props.handleInputChange} id="pravnickaOsoba/psc" type="text" name="pravnickaOsoba/psc" placeholder="PSČ" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="pravnickaOsoba/stat">Štát*</label>
						<input value={props.pravnickaOsoba.stat} onChange={props.handleInputChange} id="pravnickaOsoba/stat" type="text" name="pravnickaOsoba/stat" placeholder="Stát*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>

			<ZastupenieOsobouKonatel handleInputChange={props.handleInputChange} zastupenieOsobou={props.pravnickaOsoba.zastupenieOsobou}/>

			
			<div className={classes.InputWrapper}>
				<Checkbox info="Správca vkladu musí byť vždy ustanovený. Môže to byť iba jeden zo spoločníkov." checked={props.pravnickaOsoba.spravcaVkladu} text="Tento zakladateľ (spoločník) bude aj správcom vkladu" htmlFor="pravnickaOsoba/spravcaVkladu"  value={props.pravnickaOsoba.spravcaVkladu} onChange={props.handleInputChange} id="pravnickaOsoba/spravcaVkladu" type="text" name="pravnickaOsoba/spravcaVkladu" placeholder="Bude spravcom vkladu*"  />
			</div>	

	</div>)
}


export default pravnickaOsoba;