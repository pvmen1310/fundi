import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import { FormattedMessage } from 'react-intl';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {
    faTrophy,
    faUser,
    faFutbol,
    faSpade,
    faGamepad,
} from '@fortawesome/pro-regular-svg-icons';

import './promotions-nav.scss';

const PromotionsNav = props => (
    <nav className="promotions-nav">
        <ul className="promotions-nav-menu">
            <li>
                <NavLink to={`/${props.locale}/promotions/`} exact>
                    <FontAwesomeIcon icon={faTrophy} />
                    <FormattedMessage id="promotion.category.all" />
                </NavLink>
            </li>
            <li>
                <NavLink to={`/${props.locale}/promotions/new-player/`}>
                    <FontAwesomeIcon icon={faUser} />
                    <FormattedMessage id="promotion.category.newplayer" />
                </NavLink>
            </li>
            <li>
                <NavLink to={`/${props.locale}/promotions/sportsbook/`}>
                    <FontAwesomeIcon icon={faFutbol} />
                    <FormattedMessage id="promotion.category.sportsbook" />
                </NavLink>
            </li>
            <li>
                <NavLink to={`/${props.locale}/promotions/live-casino/`}>
                    <FontAwesomeIcon icon={faSpade} />
                    <FormattedMessage id="promotion.category.livecasino" />
                </NavLink>
            </li>
            <li>
                <NavLink to={`/${props.locale}/promotions/slots/`}>
                    <FontAwesomeIcon icon={faGamepad} />
                    <FormattedMessage id="promotion.category.slots" />
                </NavLink>
            </li>
        </ul>
    </nav>
);

PromotionsNav.propTypes = {
    locale: PropTypes.string.isRequired
};

export default PromotionsNav;
