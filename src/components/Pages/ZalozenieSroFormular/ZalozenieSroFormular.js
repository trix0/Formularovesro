import React,{Component} from "react"
import classes from "./ZalozenieSroFormular.module.css";
import FormSteps from "../../FormSteps/FormSteps";
import OrangeButton from "../../UI/OrangeButton/OrangeButton";
import FormularStepOne from "./FormularStepOne/FormularStepOne"
import FormularStepTwo from "./FormularStepTwo/FormularStepTwo"
class  ZalozenieSroFormular extends Component{
constructor(props) {
super(props);
 this.state = {
    sideInfo:{
      upravitZakladatelaID:null
    },
    modals:{
      vlozitZakladatelaModal:false,
      upravitZakladatelaModal:false
    },
    step: 1,
    numberOfSteps:5,
    stepAccessMax:3,
    formIsValid: true,
    price:0,
    loading: false,
    obchodneMeno:"",
    druhSpolocnosti:"s.r.o.",
    email:"",
    emailRepeat:"",
    telefon:"",
    sidlo:{
        ulica:"",
        supisneCislo:null,
        orientacneCislo:null,
        obec:"",
        psc:"",
        suhlasVlastnika:{
            druh:"Nebytový priestor",
            vlastnikMeno:"",
            vlasnikPriezvisko:""
        }
    },
    zakladneImanie:{
        vyska:5000,
        rozsahSplatenia:5000,
    },
    spolocnici:[],
    konatelia:[],
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
    },
  validation:{    
    obchodneMeno:{
      valid:false,
      touched:false,
      error:"",
      rules:["required"]
    },
    druhSpolocnosti:{
      valid:false,
      touched:false,
      error:"",
      rules:[]
    },
    email:{
      valid:false,
      touched:false,
      error:"",
      rules:["required","email"]
    },
    emailRepeat:{
      valid:false,
      touched:false,
      error:"",
      rules:["required","emailRepeat"]
    },
    telefon:{
      valid:false,
      touched:false,
      error:"",
      rules:["telefon"]
    },
    sidlo:{
        ulica:{
          valid:false,
          touched:false,
          error:"",
          rules:["required"]
        },
        supisneCislo:{
          valid:false,
          touched:false,
          error:"",
          rules:["number"]
        },
        orientacneCislo:{
          valid:false,
          touched:false,
          error:"",
          rules:["required","number"]
        },
        obec:{
          valid:false,
          touched:false,
          error:"",
          rules:["required"]
        },
        psc:{
          valid:false,
          touched:false,
          error:"",
          rules:["required","number"]
        },
        suhlasVlastnika:{
            druh:{
              valid:false,
              touched:false,
              error:"",
              rules:[]
            },
            vlastnik:{
              valid:false,
              touched:false,
              error:"",
              rules:["required"]
            }
        }
    },
    zakladneImanie:{
        vyska:5000,
        rozsahSplatenia:5000,
    },
    spolocnici:[],
    konatelia:[],
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
  }
}
this.handleInputChange = this.handleInputChange.bind(this)
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let newNameTarget=name.split("/");

    this.formValidation(newNameTarget,value);

    if(newNameTarget.length===2){
      let oldState={...this.state};
      oldState[newNameTarget[0]][newNameTarget[1]]=value;
      this.setState({
          ...oldState
      });
    }
    else if(newNameTarget.length===3){
      let oldState={...this.state};
      oldState[newNameTarget[0]][newNameTarget[1]][newNameTarget[2]]=value;
      this.setState({
          ...oldState
      });
    }
    else{
        this.setState({
          [name]: value
        }); 
    }




}
  formValidation=(target,testingValue)=>{
    if(target.length===2){

    }
    else if(target.length===3){

    }
    else{
    let targetRules=this.state.validation[target].rules
    console.log(targetRules)
    let validation=this.inputValidator(testingValue,targetRules)
    console.log(validation)
    console.log(target)
    let newState={...this.state};
    newState.validation[target].valid=validation.valid
    newState.validation[target].error=validation.error
    newState.validation[target].touched=true;
    this.setState({
      newState
    }); 
    }
  }
  inputValidator=(inputValue,rules)=>{
    let error=""
    let valid=false;

    let required=(input)=>{
      if(input==null || input==""){
        error="Pole nemôže byť prázdne"
        return false;
      }
      valid=true
      return valid
    }    

    let obchodneMeno=(input)=>{

    }

    rules.forEach((rule)=>{
    if(rule==="required"){
    valid=required(inputValue)
    }

    })
  return({valid:valid,error:error})
  }

  fakeApiCall(obchodneMeno,stallTime = 3000) {
    return new Promise(resolve =>{
      setTimeout(()=>{
        if(obchodneMeno==="test"){
          resolve("Exists")  
        }
        else{
          resolve("DoesntExist")   
        }
      }, stallTime)
      
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
    let newValue={vlozitZakladatelaModal:true}
    this.setState({
      modals:newValue
    })
  };



  upravitZakladatelaModal=(index)=>{
    console.log(index)
    let newValue={upravitZakladatelaModal:true}
    let newValue2={upravitZakladatelaID:index}
    this.setState({
      modals:newValue
    })
    this.setState({
      sideInfo:newValue2
    })
  };


  ulozitZakladatela=(zakladatel)=>{
    let oldSpolocnici=[...this.state.spolocnici];
    console.log(zakladatel)
    oldSpolocnici.push(zakladatel)
    this.setState({
      spolocnici:oldSpolocnici
    })
    this.closeModals()
  };
  upravitZakladatela=(updated,index)=>{
    console.log(updated)
    console.log(index)
    this.setState(oldState=>{
      let newState={...oldState}
      newState=newState.spolocnici[index]=updated;
      return(newState)
    })
    this.closeModals()

  }

  zmazatZakladatela=(index)=>{

    this.setState(oldState=>{
      let newState={...oldState}
      newState=newState.spolocnici.splice(index,1)
      return(newState)
    })
    this.closeModals()

  }

  closeModals=()=>{
    let newValue={
      vlozitZakladatelaModal:false,
      upravitZakladatelaModal:false
    }
    this.setState({
      modals:newValue
    })
  };


 renderForm() {

  switch(this.state.step) {
    case 1:
    	return <FormularStepOne handleInputChange={this.handleInputChange} state={this.state}/>
    case 2:
    	return <FormularStepTwo zmazatZakladatela={this.zmazatZakladatela} upravitZakladatela={this.upravitZakladatela} upravitZakladatelaModal={this.upravitZakladatelaModal} ulozitZakladatela={this.ulozitZakladatela} closeModals={this.closeModals} vlozitZakladatelaHandler={this.vlozitZakladatelaHandler} state={this.state}/>
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