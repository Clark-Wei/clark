import React from 'react';
import './App.scss';
import {HashRouter, Switch, Route} from "react-router-dom"
import Login from './pages/login'
import Home from './pages/home'
import Stage from './pages/game/stage'

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/stage" component={Stage}></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
