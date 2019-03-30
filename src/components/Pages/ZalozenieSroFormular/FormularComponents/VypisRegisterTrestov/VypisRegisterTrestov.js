import React from 'react';
import classes from "./VypisRegisterTrestov.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const vypisRegisterTrestov= (props) => {
		let valid=false;
	let touched=true;
	let errorMessage="Sidlo error"
	let defaultErorr="Niečo sa pokazilo. Kontaktujte nás a mi vám pomôžeme."
	return(
			<div className={classes.VypisRegisterTrestov}>
				<h5 className={classes.Header}>Údaje pre výpis z registra trestov</h5>

				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="fyzickaOsoba/vypisRegistraTrestov/miestoNarodenia">Miesto narodenia*</label>
							<input value={props.vypisRegisterTrestov.miestoNarodenia} onChange={props.handleInputChange} id="fyzickaOsoba/vypisRegistraTrestov/miestoNarodenia" type="text" name="fyzickaOsoba/vypisRegistraTrestov/miestoNarodenia" placeholder="Napr. Banská Bystrica"  />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>

				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="fyzickaOsoba/vypisRegistraTrestov/statnaPrislusnost">Štátna prislušnosť*</label>
							<input value={props.vypisRegisterTrestov.statnaPrislusnost} onChange={props.handleInputChange} id="fyzickaOsoba/vypisRegistraTrestov/statnaPrislusnost" type="text" name="fyzickaOsoba/vypisRegistraTrestov/statnaPrislusnost" placeholder="Napr. Slovenská"  />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>


				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="fyzickaOsoba/vypisRegistraTrestov/rodnePriezvisko">Rodné priezvisko*</label>
							<input value={props.vypisRegisterTrestov.rodnePriezvisko} onChange={props.handleInputChange} id="fyzickaOsoba/vypisRegistraTrestov/rodnePriezvisko" type="text" name="fyzickaOsoba/vypisRegistraTrestov/rodnePriezvisko" placeholder="Rodné priezvisko"  />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>


				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="fyzickaOsoba/vypisRegistraTrestov/predchadzajucePriezvisko">Predchádzajúce priezvisko</label>
							<input value={props.vypisRegisterTrestov.predchadzajucePriezvisko} onChange={props.handleInputChange} id="fyzickaOsoba/vypisRegistraTrestov/predchadzajucePriezvisko" type="text" name="fyzickaOsoba/vypisRegistraTrestov/predchadzajucePriezvisko" placeholder="Predchádzajúce priezvisko"  />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>

				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="fyzickaOsoba/vypisRegistraTrestov/otec/meno">Meno otca*</label>
							<input value={props.vypisRegisterTrestov.otec.meno} onChange={props.handleInputChange} id="fyzickaOsoba/vypisRegistraTrestov/otec/meno" type="text" name="fyzickaOsoba/vypisRegistraTrestov/otec/meno" placeholder="Meno otca*"  />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>

				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="fyzickaOsoba/vypisRegistraTrestov/otec/priezvisko">Priezvisko otca*</label>
							<input value={props.vypisRegisterTrestov.otec.priezvisko} onChange={props.handleInputChange} id="fyzickaOsoba/vypisRegistraTrestov/otec/priezvisko" type="text" name="fyzickaOsoba/vypisRegistraTrestov/otec/priezvisko" placeholder="Priezvisko otca*"  />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>

				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="fyzickaOsoba/vypisRegistraTrestov/matka/meno">Meno matky*</label>
							<input value={props.vypisRegisterTrestov.matka.meno} onChange={props.handleInputChange} id="fyzickaOsoba/vypisRegistraTrestov/matka/meno" type="text" name="fyzickaOsoba/vypisRegistraTrestov/matka/meno" placeholder="Meno matky*"  />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>

				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="fyzickaOsoba/vypisRegistraTrestov/matka/priezvisko">Priezvisko matky*</label>
							<input value={props.vypisRegisterTrestov.matka.priezvisko} onChange={props.handleInputChange} id="fyzickaOsoba/vypisRegistraTrestov/matka/priezvisko" type="text" name="fyzickaOsoba/vypisRegistraTrestov/matka/priezvisko" placeholder="Priezvisko matky*"  />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>	


				<div className={classes.InputWrapper}>
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
							<label htmlFor="fyzickaOsoba/vypisRegistraTrestov/matka/rodnePriezvisko">Rodné priezvisko matky*</label>
							<input value={props.vypisRegisterTrestov.matka.rodnePriezvisko} onChange={props.handleInputChange} id="fyzickaOsoba/vypisRegistraTrestov/matka/rodnePriezvisko" type="text" name="fyzickaOsoba/vypisRegistraTrestov/matka/rodnePriezvisko" placeholder="Rodné priezvisko matky*"  />
						<div>{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}</div>
					</div>

				</div>				

			</div>
		);
}

export default vypisRegisterTrestov;