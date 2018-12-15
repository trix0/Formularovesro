import React from 'react';
import classes from "./SubMenu.module.css";

const subMenu= (props) => {
let subMenuItems=[];
if(props.subMenuToShow.subMenuItems.length>0){
	subMenuItems=props.subMenuToShow.subMenuItems;	
	subMenuItems=subMenuItems.map(item=>{
		return(<a className="py-2 px-3 d-none d-md-inline-block" href={item.href}>{item.listName}</a>)
	});
}

let attachedClasses=[classes.subMenu, classes.Close];
if(props.open){
	attachedClasses=[classes.subMenu, classes.Open]
}
return(
<nav className={attachedClasses.join(" ")}>
    <div className="container d-flex flex-column flex-md-row justify-content-md-center justify-content-sm-center">
    {subMenuItems}
    </div>
</nav>
	);


}

export default subMenu;