import React,{Component} from "react"
import classes from "./ZalozenieSroFormular.module.css";
import FormSteps from "../../FormSteps/FormSteps";
import OrangeButton from "../../UI/OrangeButton/OrangeButton";
import FormularStepOne from "./FormularStepOne/FormularStepOne"
import FormularStepTwo from "./FormularStepTwo/FormularStepTwo"
class  ZalozenieSroFormular extends Component{
 state = {
    modals:{
      vlozitZakladatelaModal:false
    },
    step: 1,
    numberOfSteps:5,
    stepAccessMax:3,
    formIsValid: true,
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
  componentWillMount() {
    let {stepAccessMax}=this.state
    let krok=parseInt(this.props.match.params.krok)
    if(krok>stepAccessMax){
      krok=stepAccessMax
      this.props.history.push('/zalozenie-sro-formular/'+krok);
    }
    this.setState({
      step: krok
    });
  }


  nextStep = () => {
    let { step,stepAccessMax,numberOfSteps} = this.state;
    if(step===numberOfSteps){
    	return;
    }
    else if(!this.state.formIsValid){
      return;
    }
    step=step+1
    this.props.history.push('/zalozenie-sro-formular/'+step);
    this.setState({
      step: step,
      stepAccessMax:stepAccessMax+1
    });
  };

  // Go back to prev step
  prevStep = () => {

    let { step } = this.state;
   step=step-1
    this.props.history.push('/zalozenie-sro-formular/'+step);
    this.setState({
      step: step
    });
  };

  pickStep=(pickedStep)=>{
  	const {stepAccessMax}= this.state;

  	if(pickedStep>stepAccessMax){
  		return;
  	}
    this.props.history.push('/zalozenie-sro-formular/'+pickedStep);
  	this.setState({
  		step:pickedStep
  	});

  }
  vlozitZakladatelaHandler=()=>{
    console.log("Clicked");
    let newValue={vlozitZakladatelaModal:true}
    this.setState({
      modals:newValue
    })
  };

  closeModals=()=>{
    let newValue={vlozitZakladatelaModal:false}
    this.setState({
      modals:newValue
    })
  };


 renderForm() {
  switch(this.state.step) {
    case 1:
    	return <FormularStepOne/>
    case 2:
    	return <FormularStepTwo closeModals={this.closeModals} vlozitZakladatelaHandler={this.vlozitZakladatelaHandler} state={this.state}/>
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
			<div className={this.state.step===1?classes.ControlsStart:classes.Controls}>
			{(this.state.step>1) 
				? <OrangeButton action={this.prevStep} text="Spať"/> 
				:null
			}
			<OrangeButton action={this.nextStep} text="Pokračovať"/></div>
			</div>);
	}
}


export default ZalozenieSroFormular;