/**
 * Created by basin on 12/17/2016.
 */
import React from 'react';

var Footer = React.createClass({
    getDefaultProps() {
        return {
            year: new Date().getFullYear()
        };
    },
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div style={{float: "left"}}>Copyright &copy; { this.props.year } Sowork.me China </div>
                    <div style={{float: "right"}}>
                        <a href="">了解更多</a> •
                        <a href="">联系我们</a>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Footer;
