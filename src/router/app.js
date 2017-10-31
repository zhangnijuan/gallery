import React, { Component } from 'react'
require('../styles/App.scss')
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Index from "../components/home/index.js";
import List from '../components/list/list.js';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Index} />
                    <Route path='/list' component={List} />
                </div>
            </Router>
        )
    }
}


