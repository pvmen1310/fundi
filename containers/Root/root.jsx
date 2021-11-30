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
    }

    render() {
        let children;
            children = (
                <IntlProvider >
                    <CookiesProvider>
                        <App
                            {...this.props}
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

export default Root;
