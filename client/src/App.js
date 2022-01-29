import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Box } from "@material-ui/core"
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
//components import
import Header from "./components/Header"
import Home from "./components/home/home"
import Detailview from "./components/post/detailView";
import CreateView from "./components/post/createView";
import UpdateView from "./components/post/updateView";
import Contact from "./components/comments/contact/Contact";
import About from './components/about/About'

function App() {
  return (
    <BrowserRouter>
    <Box style={{marginTop: 64}}> 
      <Header/> 
      <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/details/:id" component ={Detailview}/>
            <Route exact path="/create" component ={CreateView}/>
            <Route exact path="/Update/:id" component ={UpdateView}/>
            <Route exact path="/contact" component ={Contact}/>
            <Route exact path="/about" component ={About}/>

      </Switch>
     </Box>   
      </BrowserRouter>
  );
}

export default App;
