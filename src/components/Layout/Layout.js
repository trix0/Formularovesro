import React,{Component} from "react"
import ReactAux from "../../hoc/ReactAux"
//import classes from "./Layout.module.css"
import Navigation from "../../Navigation/Navigation";
import Footer from "../../Footer/Footer";
import './product.css';

import { library } from '@fortawesome/fontawesome-svg-core'

import { fab} from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle,faTimesCircle,faPlus} from '@fortawesome/free-solid-svg-icons'

library.add(fab,faCheckCircle,faTimesCircle,faPlus)


class  Layout extends Component{


render(){
	return(
		<ReactAux>
			<Navigation/>
			<main>
			{this.props.children}
			</main>
			<Footer/>
		</ReactAux>
		);
}
}


export default Layout;