import React, { Component } from 'react';
import App from './App';
import { render } from 'react-dom';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import Header from './Header';
import Login from './Login';
class Home extends Component{

    render(){
        return(
          <div>
            <Router >
            <div>
                   
                   <Header/>
                   <Switch>
                   <Route exact path="/"component={Login}/>
                   
                     <Route exact path="/App"component={App}/>                   
                  </Switch>
               </div>
            </Router>
           </div>
        );
    }
}

export default Home;