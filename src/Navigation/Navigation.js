import React,{Component}from 'react';
import classes from "./Navigation.module.css";
import ReactAux from "../hoc/ReactAux";
import NavigationLink from "./NavigationLink/NavigationLink";
import Logo from "../components/Logo/Logo";
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import BurgerMenu from "./BurgerMenu/BurgerMenu"
class Navigation extends Component {
		state={
		navigation:[
		{
			listName:"O nás",
			href:"/o-nas",
			subMenuItems:[]
		},
		{
			listName:"Založenie s.r.o",
			href:"/#",
			subMenuItems:[
			{
				listName:"Test1",
				href:"/test1"}
			,
			{
				listName:"Test2",
				href:"/test2"
			
			}]
		},
		{
			listName:"Zmeny v s.r.o",
			href:"/#",
			subMenuItems:[]
		},
		{
			listName:"Služby",
			href:"/sluzby",
			subMenuItems:[
			{
				listName:"Test3",
				href:"/test3"}
			,
			{
				listName:"Test4",
				href:"/test4"
			
			}]
		},
		{
			listName:"Kontakt",
			href:"/#",
			subMenuItems:[]
		}
		],
		displayDropDown:false,
		dropDownToShow:null,
		burgerMenuStatus:false
	}
burgerMenuHandler=()=>{
	console.log("burgerMenuHandler")
	this.setState(prevState=>({
		burgerMenuStatus:!prevState.burgerMenuStatus
	}))
}

subMenuHandlerOpen=(id)=>{
this.setState(prevState => ({
  displayDropDown: true,
  dropDownToShow:id
}));

}
subMenuHandlerClose=(id)=>{
this.setState(prevState => ({
  displayDropDown: false,
  dropDownToShow:null
}));
}

 render(){
 	console.log(NavLink.location)
 	let navigation=[...this.state.navigation];
 	navigation=Object.keys(navigation).map((objectKey,index)=>{
 		let currentObject=navigation[objectKey];
 		let dropdownItems=null;
 		let currentClasses=[classes.dropdownContent]
 		if(currentObject.subMenuItems.length>0){
 			dropdownItems=currentObject.subMenuItems;
 			dropdownItems=dropdownItems.map((currentDropDownItem,index)=>{
		 		return( <NavigationLink subMenuB key={index} href={currentDropDownItem.href}>
		 		 	{currentDropDownItem.listName} 
		 		 </NavigationLink> 		
		 		 );		
 			})

 		}


 		if(this.state.displayDropDown&&this.state.dropDownToShow===index&&currentObject.subMenuItems.length>0){
 			currentClasses=[classes.dropdownDisplay,classes.dropdownContent]
 		}


 		return(
 		<div onMouseOver={()=>this.subMenuHandlerOpen(index)} onMouseLeave={()=>this.subMenuHandlerClose(index)}  key={index} className={this.state.burgerMenuStatus?"displayBlock position-relative":"  position-relative  "+[classes.dropDown].join(" ")}>
	 		 <NavigationLink  subMenuIndicator={currentObject.subMenuItems.length>0?true:false}  linkIndex={index} href={currentObject.href}>
	 		 	{currentObject.listName}
	 		 </NavigationLink>
	 		 <div className={currentClasses.join(" ")}>
	 		 	{dropdownItems}
	 		 </div>
 		 </div>
 		 );
 	})
  return(
  	<ReactAux>
  	<nav  className={classes.siteHeader+" sticky-top"}>

      	<div className={classes.navContainer+" container d-flex flex-column flex-md-row justify-content-md-between"}>
	        <Link className="text-center" to="/">
	         	<Logo/>
	        </Link>
	  {navigation}
	        

      	</div>
      	<BurgerMenu status={this.state.burgerMenuStatus} click={this.burgerMenuHandler}/>
    </nav>
    </ReactAux>
  );
 }
}
export default Navigation;


