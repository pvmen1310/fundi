// Footer Navigation

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FormattedMessage } from 'react-intl';

import './footer-nav.scss';

const FooterNav = props => (
    <div className="row">
        <nav className="footer-nav">
            <ul className="footer-nav-menu">
                <li>
                    <Link to={`/${props.locale}/about/`}>
                        <FormattedMessage id="footer.about" />
                    </Link>
                </li>
                <li>
                    <Link to={`/${props.locale}/faq/`}>
                        <FormattedMessage id="footer.faq" />
                    </Link>
                </li>
                <li>
                    <Link to={`/${props.locale}/terms-and-conditions/`}>
                        <FormattedMessage id="footer.terms-and-conditions" />
                    </Link>
                </li>
                <li>
                    <Link to={`/${props.locale}/privacy/`}>
                        <FormattedMessage id="footer.privacy" />
                    </Link>
                </li>
                <li>
                    <Link to={`/${props.locale}/responsible-gaming/`}>
                        <FormattedMessage id="footer.responsible-gaming" />
                    </Link>
                </li>
                <li>
                    {props.locale == 'zh-cn' ?   <a
                        href={`//www.webetaffiliates.com/zh/`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FormattedMessage id="footer.affiliates" />
                    </a> : <a
                        href={`//www.webetaffiliates.com/${props.locale}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FormattedMessage id="footer.affiliates" />
                    </a>}

                </li>
                <li>
                    <Link to={`/${props.locale}/disclaimer/`}>
                        <FormattedMessage id="footer.disclaimer" />
                    </Link>
                </li>
                <li>
                    <Link to={`/${props.locale}/sitemap/`}>
                        <FormattedMessage id="footer.sitemap" />
                    </Link>
                </li>
                <li>
                    <Link to={`/${props.locale}/contact/`}>
                        <FormattedMessage id="footer.contact" />
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
);

FooterNav.propTypes = {
    locale: PropTypes.string
};

export default FooterNav;
