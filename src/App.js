import React from 'react';
import './App.scss';
import {HashRouter, Switch, Route} from "react-router-dom"
import Login from './pages/login'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
