import React, { Fragment } from 'react';
import {Helmet} from 'react-helmet';
import Link from 'react-router-dom/Link';
import { FormattedMessage } from 'react-intl';

import './footer-account.scss';

const FooterAccount = props => (
    <Fragment>
        <Helmet>
            <style>{`body {
                padding-bottom: 2.5rem;
            }
            #livechat-full {
                height: 80% !important;
                transform: translate3d(0, -1.25rem, 0) !important;
            }

            #livechat-compact-container {
                transform: translate3d(0, -3.25rem, 0) !important;
            }`}</style>
        </Helmet>
        <div className="footer-account">
            <Link to={`/${props.locale}/registration/`} className="btn btn-secondary">
                <FormattedMessage id="button.joinnow" />
            </Link>
            <Link to={`/${props.locale}/login/`} className="btn btn-primary">
                <FormattedMessage id="button.login" />
            </Link>
        </div>
    </Fragment>
);

export default FooterAccount;
