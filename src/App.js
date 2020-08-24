import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from './components/Login.js';
import {TodoApp} from './components/TodoApp.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
        localStorage.setItem("isLoggedIn",false);
        this.changeIsLoggedIn = this.changeIsLoggedIn.bind(this);
    }

    changeIsLoggedIn(){
        this.setState({ isLoggedIn : true });
        localStorage.setItem("isLoggedIn",true);
        console.log(this.state.isLoggedIn);
    }

    render() {
        const LoginView = () => (
            <Login changeIsLoggedIn = {this.changeIsLoggedIn} />
        );
        
        const TodoAppView = () => (
            <TodoApp/>
        );
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        {this.state.isLoggedIn && (<li><Link to="/todo">Todo</Link></li>)}
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        {this.state.isLoggedIn && (<Route path="/todo" component={TodoAppView}/>)}
                    </div>
                </div>
            </Router>
        );
    }



}

export default App;
