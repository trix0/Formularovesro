import React from 'react';
import classes from "./FyzickaOsoba.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputMask from 'react-input-mask';
import Checkbox from "../../../../../../UI/Checkbox/Checkbox"
import VypisRegisterTrestov from "../../../../FormularComponents/VypisRegisterTrestov/VypisRegisterTrestov"
const fyzickaOsoba = (props) => {
	let valid=false;
	let touched=true;
	let errorMessage="Sidlo error"
	let defaultErorr="Niečo sa pokazilo. Kontaktujte nás a mi vám pomôžeme."
	let vypisRegisterTrestov=<VypisRegisterTrestov handleInputChange={props.handleInputChange} vypisRegisterTrestov={props.fyzickaOsoba.vypisRegistraTrestov}/>
	if(!props.fyzickaOsoba.budeKonatelom){
		vypisRegisterTrestov=null;
	}
	return(<div className={classes.FyzickaOsoba}>
			<div className={classes.InputWrapperSelect}>
				<div className={classes.InputContainer}>
					<label htmlFor="fyzickaOsoba/pohlavie">Pohlavie*</label>
					<select value={props.fyzickaOsoba.pohlavie} id="fyzickaOsoba/pohlavie" name="fyzickaOsoba/pohlavie" onChange={props.handleInputChange}>
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

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/datumNarodenia">Dátum narodenia*</label>
						<InputMask mask="99/99/9999" value={props.fyzickaOsoba.datumNarodenia} onChange={props.handleInputChange} id="fyzickaOsoba/datumNarodenia" type="text" name="fyzickaOsoba/datumNarodenia" placeholder="Deň/Mesiac/Rok*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/rodneCislo">Rodné číslo*</label>
						<InputMask mask="999999/9999" value={props.fyzickaOsoba.rodneCislo} onChange={props.handleInputChange} id="fyzickaOsoba/rodneCislo" type="text" name="fyzickaOsoba/rodneCislo" placeholder="Rodné číslo*" />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>

			<div className={classes.InputWrapperSelect}>
				<div className={classes.InputContainer}>
					<label htmlFor="fyzickaOsoba/dokladTotoznostiTyp">Typ dokladu totožnosti*</label>
					<select value={props.dokladTotoznostiTyp} id="fyzickaOsoba/dokladTotoznostiTyp" name="fyzickaOsoba/dokladTotoznostiTyp" onChange={props.handleInputChange}>
		  				<option value="Občiansky preukaz">Občiansky preukaz</option>				
		  				<option value="Pas">Pas</option>				
					</select>
				</div>
			</div>	

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/dokladTotoznostiCislo">Číslo dokladu totožnosti*</label>
						<input value={props.fyzickaOsoba.dokladTotoznostiCislo} onChange={props.handleInputChange} id="fyzickaOsoba/dokladTotoznostiCislo" type="text" name="fyzickaOsoba/dokladTotoznostiCislo" placeholder="Číslo dokladu totožnosti*"  />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>	


			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/vyskaVkladu">Výška vkladu(€)*</label>
						<input value={props.fyzickaOsoba.vyskaVkladu} onChange={props.handleInputChange} id="fyzickaOsoba/vyskaVkladu" type="text" name="fyzickaOsoba/vyskaVkladu" placeholder="Výška vkladu*"  />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>						

			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/podielSpolocnosti">Podiel v spoločnosti(%)*</label>
						<input value={props.fyzickaOsoba.podielSpolocnosti} onChange={props.handleInputChange} id="fyzickaOsoba/podielSpolocnosti" type="text" name="fyzickaOsoba/podielSpolocnosti" placeholder="Podiel v spoločnosti*"  />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>	


			<div className={classes.InputWrapper}>
							<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
						<label htmlFor="fyzickaOsoba/rozsahSplatenia">Rozsah splatenia vkladu(€)*</label>
						<input value={props.fyzickaOsoba.rozsahSplatenia} onChange={props.handleInputChange} id="fyzickaOsoba/rozsahSplatenia" type="text" name="fyzickaOsoba/rozsahSplatenia" placeholder="Rozsah splatenia vkladu*"  />
					<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
				</div>

			</div>	

			<div className={classes.InputWrapper}>
				<Checkbox checked={props.fyzickaOsoba.budeKonatelom} text="Tento zakladateľ (spoločník) bude aj konateľom" htmlFor="fyzickaOsoba/budeKonatelom"  value={props.fyzickaOsoba.budeKonatelom} onChange={props.handleInputChange} id="fyzickaOsoba/budeKonatelom" type="text" name="fyzickaOsoba/budeKonatelom" placeholder="Bude konatelom*"  />
			</div>	

			<div className={classes.InputWrapper}>
				<Checkbox info="Správca vkladu musí byť vždy ustanovený. Môže to byť iba jeden zo spoločníkov." checked={props.fyzickaOsoba.spravcaVkladu} text="Tento zakladateľ (spoločník) bude aj správcom vkladu" htmlFor="fyzickaOsoba/spravcaVkladu"  value={props.fyzickaOsoba.spravcaVkladu} onChange={props.handleInputChange} id="fyzickaOsoba/spravcaVkladu" type="text" name="fyzickaOsoba/spravcaVkladu" placeholder="Bude spravcom vkladu*"  />
			</div>	
			{vypisRegisterTrestov}

	</div>)
}


export default fyzickaOsoba;