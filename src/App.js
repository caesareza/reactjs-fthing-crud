import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import CustomerIndex from './pages/customer/customerIndex';
import CustomerDetail from './pages/customer/customerDetail';
import CustomerAdd from './pages/customer/customerAdd';

function App() {
    return (
        <Router>
            <div className="app">
                <header>
                    <div className="logo">ReactJS CRUD</div>
                    <div className="menu">
                        <Link to="/">Home</Link>
                        <Link to="/">About Me</Link>
                    </div>
                </header>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={CustomerIndex} />
                        <Route exact path="/customer/detail/:id" component={CustomerDetail} />
                        <Route exact path="/customer/add" component={CustomerAdd} />
                    </Switch>
                </div>
                <footer>
                    <div>&copy; Dreas - Oktober 2020</div>
                    <div>ReactJS CRUD, simple customer crud app using reactjs and react hook</div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
