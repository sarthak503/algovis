import React, {Component} from 'react';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import Puzzle from "./15puzzleComponents/puzzle";



class App extends Component {

    constructor() {
        super();
    }
    componentDidMount() {
        // console.log(window.innerHeight,"  ",window.innerWidth);
    }

    render() {
        return (
            <Router basename='/'>
                <Switch>
                   
                    <Route path='/15puzzle' component={Puzzle}/>
                    <Route path='/' component={Home}/>

                </Switch>
            </Router>
        );
    }
}

export default App;
