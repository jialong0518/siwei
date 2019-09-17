import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, HashRouter, MemoryRouter, Route , Switch ,Redirect} from 'react-router-dom';
import './index.css';
import App from './App';
import Jsdemo from './routes/jsdemo/index';
import Jsdemob from './routes/jsdemob';
import Jsdemoc from './routes/jsdemoc';
import Nav from './components/nav';
import Error from './routes/error';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Jsdemo} />
                <Route  path="/Jsdemob" component={Jsdemob} />
                <Route  path="/Jsdemoc" component={Jsdemoc} />
                <Redirect from="/redirect" to="/Jsdemob" />
                <Route component={Error} />  //这个一定要在所有连接最后
            </Switch>
        </div>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
