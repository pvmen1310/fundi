// Locales

import React, { Fragment, Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { CookiesProvider } from 'react-cookie';
import Loadable from 'react-loadable';
import Preloader from 'Components/Preloader/';
import Configuration from 'API/configuration';
import withRouter from 'react-router-dom/withRouter';

import 'Stylesheets/design.scss';

const App = Loadable({
    loading: Preloader,
    loader: () => import('Containers/App/')
});

class Root extends Component {
    constructor() {
        super();
        Configuration.initialize();
        this.state = {
            translations: null,
            locale: '',
            languages: [],
            isChangingLocale: false
        };
    }

    componentDidMount() {

    }

    render() {
        let children;

        children = (
            <IntlProvider locale={this.state.locale} messages={this.state.translations}>
                <CookiesProvider>
                    <App
                        {...this.props}
                        locale={this.state.locale}
                    />
                </CookiesProvider>
            </IntlProvider>
        );

        if (children) {
            return <Fragment>{children}</Fragment>;
        }

        return <div />;
    }
}

export default withRouter(Root);
