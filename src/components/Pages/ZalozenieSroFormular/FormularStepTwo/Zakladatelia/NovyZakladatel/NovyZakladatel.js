import React from 'react';
import classes from "./NovyZakladatel.module.css"
import FyzickaOsoba from "./FyzickaOsoba/FyzickaOsoba"
import PravnickaOsoba from "./PravnickaOsoba/PravnickaOsoba"
class NovyZakladatel extends React.Component {
constructor(props) {
super(props);
if(this.props.upravitZakladatelaID!=undefined){
	let upravitSpolocnika={...this.props.spolocnici[this.props.upravitZakladatelaID]}
	this.state=upravitSpolocnika
}
else{

	console.log("else")
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
		datumNarodenia:"",
		rodneCislo:"",
		dokladTotoznostiTyp:"",
		dokladTotoznostiCislo:"",
		vyskaVkladu:5000,
		podielSpolocnosti:100,
		rozsahSplatenia:5000,
		spravcaVkladu:true,
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
			pohlavie:"",
			datumNarodenia:"",
			rodneCislo:""		
		},
		vyskaVkladu:5000,
		podielSpolocnosti:100,
		rozsahSplatenia:5000,
		spravcaVkladu:false

		}


}
}

this.handleInputChange = this.handleInputChange.bind(this);
this.handleInputChangeMaster = this.handleInputChangeMaster.bind(this);
}

saveAndReset=()=>{
	let initialState={
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
		datumNarodenia:"",
		rodneCislo:"",
		dokladTotoznostiTyp:"",
		dokladTotoznostiCislo:"",
		vyskaVkladu:5000,
		podielSpolocnosti:100,
		rozsahSplatenia:5000,
		spravcaVkladu:true,
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
			pohlavie:"",
			datumNarodenia:"",
			rodneCislo:""		
		},
		vyskaVkladu:5000,
		podielSpolocnosti:100,
		rozsahSplatenia:5000,
		spravcaVkladu:false

		}
}
	this.props.ulozitZakladatela(this.state)
	  		this.setState({
      		...initialState
    	});
}

handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  	let newNameTarget=name.split("/");

  	if(newNameTarget.length===2){
  		let oldfyzickaOsoba={...this.state};
  		console.log(oldfyzickaOsoba)
  		oldfyzickaOsoba[newNameTarget[0]][newNameTarget[1]]=value;
  		//create rodne cislo from birthday

  		if(newNameTarget[1]==="datumNarodenia"||newNameTarget[1]==="pohlavie"){
  			let datumNarodenia=oldfyzickaOsoba[newNameTarget[0]].datumNarodenia.split("/");
  			if(datumNarodenia.length>2){
				let den=datumNarodenia[0]
	  			let mesiac=datumNarodenia[1]
	  			let rok=datumNarodenia[2]
	  			let rocnik=rok[2]+rok[3]
	  			if(oldfyzickaOsoba[newNameTarget[0]].pohlavie==="Žena"){
	  			mesiac=parseInt(mesiac)+50	
	  			}
	  			oldfyzickaOsoba[newNameTarget[0]].rodneCislo=rocnik+""+mesiac+""+den;  				
  			}
  			
  		}
  		this.setState({
      		...oldfyzickaOsoba
    	});
  	}
  	else if(newNameTarget.length===3){
  		console.log(newNameTarget)
  		let oldfyzickaOsoba={...this.state};
  		console.log(oldfyzickaOsoba)
  		oldfyzickaOsoba[newNameTarget[0]][newNameTarget[1]][newNameTarget[2]]=value; 

  		if(newNameTarget[2]==="datumNarodenia"||newNameTarget[2]==="pohlavie"){
  			console.log("fired")
  			let datumNarodenia=oldfyzickaOsoba[newNameTarget[0]][newNameTarget[1]].datumNarodenia.split("/");
  			if(datumNarodenia.length>2){
				let den=datumNarodenia[0]
	  			let mesiac=datumNarodenia[1]
	  			let rok=datumNarodenia[2]
	  			let rocnik=rok[2]+rok[3]
	  			if(oldfyzickaOsoba[newNameTarget[0]][newNameTarget[1]].pohlavie==="Žena"){
	  			mesiac=parseInt(mesiac)+50	
	  			}
	  			oldfyzickaOsoba[newNameTarget[0]][newNameTarget[1]].rodneCislo=rocnik+""+mesiac+""+den;  				
  			}
  			
  		} 		
  		this.setState({
      		...oldfyzickaOsoba
    	});
  	}
  	else if(newNameTarget.length===4){
  		console.log(newNameTarget)
  		let oldfyzickaOsoba={...this.state};
  		console.log(oldfyzickaOsoba)
  		oldfyzickaOsoba[newNameTarget[0]][newNameTarget[1]][newNameTarget[2]][newNameTarget[3]]=value;  		
  		this.setState({
      		...oldfyzickaOsoba
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
	formular=(<PravnickaOsoba pravnickaOsoba={this.state.pravnickaOsoba} handleInputChange={this.handleInputChange}/>)
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
			<div className={classes.Controls}>
			<div className={classes.ControlsZrusit}><button>Zrušiť</button></div>
			<div className={classes.ControlsUlozit}><button onClick={this.saveAndReset}>Uložiť</button></div>
			</div>
			 
			</div>
		</div>
		);
}
}


export default NovyZakladatel;				