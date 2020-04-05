import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "../../scenes/Home";
import StateNews from "../../scenes/StateNews";

export default class Routing extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/s/:state' component={StateNews}/>
                    <Route exact path='/c/:state' component={StateNews}/>
                </Switch>
            </main>
        );
    }
}