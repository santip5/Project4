//p4 jsx file
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import './styles/main.css'
import Header from '/components/header/Header';
import States from './components/states/States';
import Example from './components/example/Example';






class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <nav>
                    <ul>
                        <li>
                            <Link to="/example">Example</Link>
                        </li>
                        <li>
                            <Link to="/states">States</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
                <Route path="/example" component={Example} />
                <Route path="/states" component={States} />
            </div>
        );
    }
}

ReactDOM.render(
    <HashRouter>
        <Main />
    </HashRouter>,
    document.getElementById('reactapp')
);