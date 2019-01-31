import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout/Layout"
import {Route} from "react-router-dom";
import Index from "./components/Pages/Index/Index";
import Onas from "./components/Pages/Onas/Onas";
import Sluzby from "./components/Pages/Sluzby/Sluzby";
import AkoFungujeme from "./components/Pages/AkoFungujeme/AkoFungujeme";
import ZalozenieSroFormular from "./components/Pages/ZalozenieSroFormular/ZalozenieSroFormular";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        	<Route path="/" exact component={Index}/>
        	<Route path="/o-nas" exact component={Onas}/>
        	<Route path="/sluzby" exact component={Sluzby}/>
          <Route path="/ako-fungujeme" exact component={AkoFungujeme}/>
        	<Route path="/zalozenie-sro-formular" exact component={ZalozenieSroFormular}/>
        </Layout>
      </div>
    );
  }
}

export default App;
