import React from 'react';
import classes from "./NovyZakladatel.module.css"
import FyzickaOsoba from "./FyzickaOsoba/FyzickaOsoba"
import PravnickaOsoba from "./PravnickaOsoba/PravnickaOsoba"
class NovyZakladatel extends React.Component {
constructor(props) {
super(props);
this.state={
	typZakladatela:"fyzickaOsoba",
	fyzickaOsoba:{
		pohlavie:"Muž",
		titulPredMenom:"",
		meno:"",
		priezvisko:"",
		titulZaMenom:"",
		ulica:"",
		supisneCislo:"",
		orientacneCislo:"",
		obec:"",
		psc:"",
		stat:"",
		datumNarodenia:{
			den:"",
			mesiac:"",
			rok:""
		},
		rodneCislo:{
			cislo:"",
			koncovka:""
		},
		dokladTotoznosti:{
			typ:"",
			cisloDokladu:""
		},
		vyskaVkladu:5000,
		podielSpolocnosti:100,
		rozsahSplatenia:5000,
		spravcaVkladu:false,
		budeKonatelom:true,
		vypisRegistraTrestov:{
			miestoNarodenia:"",
			statnaPrislusnost:"",
			rodnePriezvisko:"",
			predchadzajucePriezvisko:"",
			otec:{
				meno:"",
				priezvisko:""

			},
			matka:{
				meno:"",
				priezvisko:"",
				rodnePriezvisko:""

			}
		}
	},
	pravnickaOsoba:{
		ico:"",
		obchodneMeno:"",
		ulica:"",
		supisneCislo:"",
		orientacneCislo:"",
		obec:"",
		psc:"",
		stat:"",
		zastupenieOsobou:{
			meno:"",
			priezvisko:"",
			datumNarodenia:{
				den:"",
				mesiac:"",
				rok:""
			},
			rodneCislo:{
				cislo:"",
				koncovka:""
			}		
		},
		vyskaVkladu:5000,
		podielSpolocnosti:100,
		rozsahSplatenia:5000,
		spravcaVkladu:false

		}
}

this.handleInputChange = this.handleInputChange.bind(this);
this.handleInputChangeMaster = this.handleInputChangeMaster.bind(this);
}


handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  	let newNameTarget=name.split("/");
  	if(newNameTarget.length>1){
  		let oldfyzickaOsoba={...this.state.fyzickaOsoba};
  		console.log(oldfyzickaOsoba)
  		oldfyzickaOsoba[newNameTarget[1]]=value;
  		this.setState({
      		fyzickaOsoba: oldfyzickaOsoba
    	});
  	}
  	else{
	    this.setState({
	    	[name]: value
	    }); 		
  	}


}

handleInputChangeMaster(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
}

render(){
let formular=(<FyzickaOsoba fyzickaOsoba={this.state.fyzickaOsoba} handleInputChange={this.handleInputChange}/>)
if(this.state.typZakladatela==="pravnickaOsoba"){
	formular=(<PravnickaOsoba handleInputChange={this.handleInputChange}/>)
}

let fyzickaOsoba={
	pohlavie:"Muz",
	titulPredMenom:"",
	meno:"",
	priezvisko:"",
	titulZaMenom:"",
	ulica:"",
	supisneCislo:"",
	orientacneCislo:"",
	obec:"",
	psc:"",
	stat:"",
	datumNarodenia:{
		den:"",
		mesiac:"",
		rok:""
	},
	rodneCislo:{
		cislo:"",
		koncovka:""
	},
	dokladTotoznosti:{
		typ:"",
		cisloDokladu:""
	},
	vyskaVkladu:5000,
	podielSpolocnosti:100,
	rozsahSplatenia:5000,
	spravcaVkladu:false,
	budeKonatelom:true,
	vypisRegistraTrestov:{
		miestoNarodenia:"",
		statnaPrislusnost:"",
		rodnePriezvisko:"",
		predchadzajucePriezvisko:"",
		otec:{
			meno:"",
			priezvisko:""

		},
		matka:{
			meno:"",
			priezvisko:"",
			rodnePriezvisko:""

		}
	}
}
let pravnickaOsoba={
	ico:"",
	obchodneMeno:"",
	ulica:"",
	supisneCislo:"",
	orientacneCislo:"",
	obec:"",
	psc:"",
	stat:"",
	zastupenieOsobou:{
		meno:"",
		priezvisko:"",
		datumNarodenia:{
			den:"",
			mesiac:"",
			rok:""
		},
		rodneCislo:{
			cislo:"",
			koncovka:""
		}		
	},
	vyskaVkladu:5000,
	podielSpolocnosti:100,
	rozsahSplatenia:5000,
	spravcaVkladu:false

}
	return(
		<div className={classes.NovyZakladatel}>
			<h5 className={classes.Header}>Nový zakladateľ(spoločník)</h5>
			<div className={classes.InputWrapper}>
				<div className={classes.InputContainer}>
					<label htmlFor="typZakladatela">Typ zakladateľa*</label>
					<select value={this.state.typZakladatela} id="typZakladatela" name="typZakladatela" onChange={this.handleInputChangeMaster}>
		  				<option value="fyzickaOsoba">Fyzická osoba</option>				
		  				<option value="pravnickaOsoba">Právnická osoba</option>				
					</select>
				</div>
			</div>
			<div className={classes.Formular}>
			{formular}
			</div>
		</div>
		);
}
}


export default NovyZakladatel;				