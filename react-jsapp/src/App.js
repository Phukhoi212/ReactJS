import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './component/menu/index'
import routes from './routes';
import './App.css';

class App extends Component{


  render(){
    return(

      <Router>
          {/* <Menu /> */}
          <div className="App">
            {this.showContentMenus(routes)}
          </div>
      </Router>
    );
      
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component = {route.main}
        />
      });
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
