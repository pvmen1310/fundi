// Live Casino

import React, { Component, Fragment } from 'react';

import Loadable from 'react-loadable';
import Preloader from 'Components/Preloader/';
import Refactor from 'API/refactor';

const LaunchingComponent = Loadable({
    loading: Preloader,
    loader: () => import('Components/Launching/')
});

export default class Launching extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.setState({
            game :{},
        })
    }

    componentWillUnmount() {
        this.props.refreshBalance();
    }

    componentDidMount() {
        this.onLaunchGame(this.props.match.params.query);
    }

    onLaunchGame (query) {
        this.props.showNotification(true);

        Refactor.launchingGame(query).then((response) => {

            this.props.showNotification(false);
            let data = response.data;
            
            if (data.success == 1) {
                window.location.replace(`${data.url}`);
            } else {
                this.props.showNotification(true, 'error', data.message);
            }
        });
    }

    render() {
        return (
            <LaunchingComponent 
                name={this.state.game.name ? this.state.game.name  : ''}
                link={this.state.game.link ? this.state.game.link : ''} 
            />
        );
    }
}