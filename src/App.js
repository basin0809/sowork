import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Reflux from 'reflux';
import {ReactRouter, RouteHandler} from 'react-router';
import Overlay from './components/Overlay';
import LoginForm from './components/LoginForm';
import ShowOverlayActions from './actions/ShowOverlayActions';
import ShowOverlayStore from './stores/ShowOverlayStore';
import UserStore from './stores/UserStore';
import UserSessionStore from './stores/UserSessionStore';
import UserSessionActions from './actions/UserSessionActions';
import Footer from './components/Footer';
import TopNav from './components/TopNav';

var App = React.createClass({
    mixins: [
        Reflux.connect(ShowOverlayStore, "showLogin"),
        Reflux.connect(UserSessionStore, "current_user")
    ],
    contextTypes: {
        current_user: React.PropTypes.object
    },
    childContextTypes: {
        current_user: React.PropTypes.object.isRequired
    },
    getChildContext() {
        return {
            current_user: this.state.current_user
        };
    },
    componentDidMount() {
        UserSessionActions.fetchCurrentUser();
    },
    handleShowLogin() {
        ShowOverlayActions.showLogin(true);
    },
    handleLogout(e) {
        e.preventDefault();
        UserSessionActions.logout();
    },

    render() {
        var current_user = this.context.current_user;
        var nav =(
            <div className="nav">
                <button className="button" onClick={this.handleShowLogin}>Log in</button>
            </div>
        );
        // if (!current_user.username) {
        //     nav = (
        //         <div className="nav">
        //             <button className="button" onClick={this.handleShowLogin}>Log in</button>
        //         </div>
        //     );
        // }
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>欢迎来到 Sowork.me</h2>
                </div>
                <p className="App-intro">
                    我 90% 的 时 间 都 在 配 置 环 境 。
                </p>
                <div className="site-account">
                    { nav }
                </div>
                <Footer />
                {
                    ((obj) => {
                        if (obj.state.showLogin )
                            return <Overlay><LoginForm /></Overlay>;
                    })(this)
                }
            </div>
        );
    }
});

module.exports = App;
