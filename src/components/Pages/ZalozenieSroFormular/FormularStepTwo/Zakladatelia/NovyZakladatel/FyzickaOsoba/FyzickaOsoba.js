import React from 'react';
import classes from "./FyzickaOsoba.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const fyzickaOsoba = (props) => {
	let valid=false;
	let touched=true;
	let errorMessage="Sidlo error"
	let defaultErorr="Niečo sa pokazilo. Kontaktujte nás a mi vám pomôžeme."
	return(<div className={classes.FyzickaOsoba}>
			<div className={classes.InputWrapperSelect}>
				<div className={classes.InputContainer}>
					<label htmlFor="fyzickaOsoba/pohlavie">Pohlavie*</label>
					<select value={props.pohlavie} id="fyzickaOsoba/pohlavie" name="fyzickaOsoba/pohlavie" onChange={props.handleInputChange}>
		  				<option value="Muž">Muž</option>				
		  				<option value="Žena">Žena</option>				
					</select>
				</div>
			</div>	

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/titulPredMenom">Titul pred menom</label>
						<input value={props.fyzickaOsoba.titulPredMenom} onChange={props.handleInputChange} id="fyzickaOsoba/titulPredMenom" type="text" name="fyzickaOsoba/titulPredMenom" placeholder="Titul" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>	

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/meno">Meno*</label>
						<input value={props.fyzickaOsoba.meno} onChange={props.handleInputChange} id="fyzickaOsoba/meno" type="text" name="fyzickaOsoba/meno" placeholder="Meno*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>	

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/priezvisko">Priezvisko*</label>
						<input value={props.fyzickaOsoba.priezvisko} onChange={props.handleInputChange} id="fyzickaOsoba/priezvisko" type="text" name="fyzickaOsoba/priezvisko" placeholder="Priezvisko*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>	

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/titulZaMenom">Titul za menom</label>
						<input value={props.fyzickaOsoba.titulZaMenom} onChange={props.handleInputChange} id="fyzickaOsoba/titulZaMenom" type="text" name="fyzickaOsoba/titulZaMenom" placeholder="Titul za menom" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/ulica">Ulica*</label>
						<input value={props.fyzickaOsoba.ulica} onChange={props.handleInputChange} id="fyzickaOsoba/ulica" type="text" name="fyzickaOsoba/ulica" placeholder="Nazov ulice" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/supisneCislo">Súpisné číslo</label>
						<input value={props.fyzickaOsoba.supisneCislo} onChange={props.handleInputChange} id="fyzickaOsoba/supisneCislo" type="text" name="fyzickaOsoba/supisneCislo" placeholder="Súpisné číslo" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/orientacneCislo">Orientačné číslo*</label>
						<input value={props.fyzickaOsoba.orientacneCislo} onChange={props.handleInputChange} id="fyzickaOsoba/orientacneCislo" type="text" name="fyzickaOsoba/orientacneCislo" placeholder="Orientačné číslo*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/obec">Obec*</label>
						<input value={props.fyzickaOsoba.obec} onChange={props.handleInputChange} id="fyzickaOsoba/obec" type="text" name="fyzickaOsoba/obec" placeholder="Obec*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>


			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/psc">PSČ*</label>
						<input value={props.fyzickaOsoba.psc} onChange={props.handleInputChange} id="fyzickaOsoba/psc" type="text" name="fyzickaOsoba/psc" placeholder="PSČ*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/stat">Štát*</label>
						<input value={props.fyzickaOsoba.stat} onChange={props.handleInputChange} id="fyzickaOsoba/stat" type="text" name="fyzickaOsoba/stat" placeholder="Štát*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>

	</div>)
}


export default fyzickaOsoba;