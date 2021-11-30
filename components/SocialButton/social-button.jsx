// Header Navigation

import React from 'react';
import SocialLogin from 'react-social-login'
import * as ReactDOM from "react-dom";
import './social-button.scss';

const SocialButton = props => {
    return (
        <button onClick={this.props.triggerLogin} {...this.props}>
        { this.props.children }
      </button>
    )
}

export default SocialLogin(SocialButton);