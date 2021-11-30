// Carousel

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

export default class GoogleAds extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount () {
        setTimeout(function(){(adsbygoogle = window.adsbygoogle || []).push({})}, 1000);
    }

    render() {
        if(this.props.format ) {
            return (
                <ins className="adsbygoogle"
                     style={this.props.style ? this.props.style : {display:"block"}}
                     data-ad-client="ca-pub-8702820125787045"
                     data-ad-slot={this.props.slot}
                     data-ad-format={this.props.format}
                     data-full-width-responsive={this.props.isMobile ? "false" : "true" }/>
            );
        } else {
            return (
                <ins className="adsbygoogle"
                     style={this.props.style ? this.props.style : {display:"block"}}
                     data-ad-client="ca-pub-8702820125787045"
                     data-ad-slot={this.props.slot}
                     data-full-width-responsive={this.props.isMobile ? "false" : "true" }/>
            );
        }
    }

}
