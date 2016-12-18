/**
 * Created by basin on 12/17/2016.
 */
import React from 'react';
import ShowOverlayActions from '../actions/ShowOverlayActions';
import '../styles/core.css'
import '../styles/base.css'
var Overlay = React.createClass({
    componentDidMount() {
        document.body.className = 'no-scroll';
    },
    componentWillUnmount() {
        document.body.className = '';
    },
    handleHiddenLogin() {
        ShowOverlayActions.showLogin(false);
    },
    render() {
        return (
            <div className="base-overlay">
                <div className="base-overlay-mask" onClick={this.handleHiddenLogin}></div>
                <div className="base-overlay-inner">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Overlay;
