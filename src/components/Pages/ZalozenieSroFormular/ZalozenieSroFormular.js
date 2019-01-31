import React,{Component} from "react"
import classes from "./ZalozenieSroFormular.module.css";
import FormSteps from "../../FormSteps/FormSteps";
import OrangeButton from "../../UI/OrangeButton/OrangeButton";
class  ZalozenieSroFormular extends Component{
 state = {
    step: 1,
    numberOfSteps:5,
    stepAccessMax:2,
    formIsValid: false,
    price:0,
    loading: false,
    obchodneMeno:"",
    druhSpolocnosti:"",
    email:"",
    telefon:"",
    sidlo:{
        ulica:"",
        supisneCislo:null,
        orientacneCislo:null,
        obec:"",
        psc:"",
        suhlasVlastnika:{
            druh:"",
            vlastnik:""
        }
    },
    zakladneImanie:{
        vyska:5000,
        rozsahSplatenia:5000,
    },
    spolocnici:[],
    uzivateliaVyhod:{},
    sposobKonania:"",
    predmetPodnikania:[],
    fakturacneUdaje:{
        ico:"",
        obchodneMeno:"",
        dic:"",
        icDPH:"",
        ulica:"",
        supisneCislo:null,
        orientacneCislo:null,
        obec:"",
        psc:"",
        stat:""
    }
};

  nextStep = () => {
    const { step,stepAccessMax,numberOfSteps} = this.state;
    if(step+1>stepAccessMax||step==numberOfSteps){
    	return;
    }
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  pickStep=(pickedStep)=>{
  	const {step,stepAccessMax}= this.state;
  	if(pickedStep>stepAccessMax){
  		return;
  	}

  	this.setState({
  		step:pickedStep
  	});

  }
 renderForm() {
  switch(this.state.step) {
    case 1:
    	return 1;
    case 2:
    	return 2;
    case 3:
    	return 3;
    case 4:
    	return 4;
    case 5:
    	return 5;
    default:
    	return 'Niečo sa pokazilo';
  }
}
	render(){
		return(
			<div className="container">
			<FormSteps step={this.state.step} stepAccessMax={this.state.stepAccessMax} pickStep={this.pickStep}/>
			{this.renderForm()}
			<div className={this.state.step==1?classes.ControlsStart:classes.Controls}>
			{(this.state.step>1) 
				? <OrangeButton action={this.prevStep} text="Spať"/> 
				:null
			}
			<OrangeButton disabled action={this.nextStep} text="Pokračovať"/></div>
			</div>);
	}
}


export default ZalozenieSroFormular;