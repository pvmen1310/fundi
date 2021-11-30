// Live Casino

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Loadable from 'react-loadable';
import Preloader from 'Components/Preloader/';
import Boss from 'API/boss';
import APIConfig from 'APIConfig';

const LauncherComponent = Loadable({
    loading: Preloader,
    loader: () => import('Components/Launcher/')
});

export default class Launcher extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <LauncherComponent  name={this.state.launchedGame.name ? this.state.launchedGame.name  : ''}  link={this.state.launchedGame.link ? this.state.launchedGame.link : ''} />
        );
    }

    componentWillMount() {
        this.setState({
            launchedGame :{},
        })
    }

    componentWillUnmount() {
        this.props.refreshBalance();
    }

    componentDidMount() {
        this.onLaunchGame(this.props.match.params.query);
    }

    onLaunchGame (query) {
        const { mobileCheck } = this.props ;
        this.props.showNotification(true);
        Boss.getGame(query).then((response) => {
            this.props.showNotification(false);
            let data = response.data;
            if (data.status == 1) {
                if(mobileCheck) {
                    window.location.replace(`${data.data.game_url}`);
                }else {
                    this.setState({
                        launchedGame: {
                            name: name,
                            link: data.data.game_url,
                        }
                    });
                }
            } else {
                this.props.showNotification(true,'error',data.errors.message.common || data.errors.message);
            }
        });

    }
}
