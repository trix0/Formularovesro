import React,{Component} from "react"
import ReactAux from "../../hoc/ReactAux"
//import classes from "./Layout.module.css"
import Navigation from "../../Navigation/Navigation";
import Footer from "../../Footer/Footer";
import './product.css';

import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


class  Layout extends Component{


render(){
	return(
		<ReactAux>
			<Navigation/>
			<main>
				<div className="position-relative overflow-hidden  text-center bg-light banner padding-over margin-over">
			        <div className="col-md-5 p-lg-5 mx-auto my-5">
			          <p className="lead font-weight-normal font-weight-bold">Založenie s.r.o rýchlo a jednoducho, aj so všetkými službami, s kompletnou dokumentáciou pripravenou v spolupráci s advokáckou kanceláriou</p>
			          <a className="btn btn-outline-secondary" href="/#">Viac</a>
			        </div>
			    </div>
			    <div className="divider mb-5"></div>
			</main>
			<Footer/>
		</ReactAux>
		);
}
}


export default Layout;