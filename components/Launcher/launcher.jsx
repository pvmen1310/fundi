// Launcher

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

export default class Launcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: 0,
            screenHeight: 0
        };

        this.handResize = this.handResize.bind(this);
    }

    handResize() {
        const width = window.innerWidth;
        const mobileWidth = 1200;
        const headerHeight = width > mobileWidth ? 80 : 60;
        const height = window.innerHeight - headerHeight;

        this.setState({
            screenWidth: width,
            screenHeight: height
        });
    }

    componentDidMount() {
        this.handResize();
        window.addEventListener('resize', this.handResize);
    }

    render() {
        const { name, link } = this.props;
        const { screenWidth, screenHeight } = this.state;

        return (
            <Fragment>
                <Helmet>
                    <style>
                        {`
                            body,
                            main {
                                padding: 0;
                            }

                            .header {
                                position: static;
                                margin-bottom: 0 !important;
                            }
                            
                            .footer,
                            .sidebar,
                            #livechat-compact-container  {
                                display: none !important;
                            }
                            
                            @media (max-device-width: 640px) and (orientation: landscape) {
                                .header {
                                    display: none;
                                }
                            }
                        `}
                    </style>
                </Helmet>
                {this.props.link && (
                    <iframe
                        src={link}
                        title={name}
                        width={screenWidth} 
                        height={screenHeight} 
                        frameBorder="0"
                    />
                )}
            </Fragment>
        );
    }
}

Launcher.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string
};
