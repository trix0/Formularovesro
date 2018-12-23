import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout/Layout"
import {Route} from "react-router-dom";
import Index from "./components/Pages/Index/Index";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        	<Route path="/" exact component={Index}/>
        </Layout>
      </div>
    );
  }
}

export default App;
