// Sidebar

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FormattedMessage } from 'react-intl';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
    faUser,
    faMoneyBill,
    faBookmark,
    faComment,
    faPhone,
    faArrowCircleDown,
    faEnvelope,
    faEnvelopeOpenDollar,
    faGift,
} from '@fortawesome/pro-regular-svg-icons';

import './sidebar.scss';

const LiveChatOpen = () => {

    window.LC_API.open_chat_window();
};

const Sidebar = props => (
    <aside className="sidebar">
        <nav className="sidebar-nav">
            <ul className="sidebar-nav-menu">
                {props.token && (
                    <Fragment>
                        <li>
                            <Link to={`/${props.locale}/player-center/account/profile/`}>
                                <FontAwesomeIcon icon={faUser} />
                                <div>
                                    <FormattedMessage id="player_center_nav.account" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/${props.locale}/player-center/banking/`}>
                                <FontAwesomeIcon icon={faEnvelopeOpenDollar} />
                                <div>
                                    <FormattedMessage id="player_center_nav.banking" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/${props.locale}/player-center/promos/`}>
                                <FontAwesomeIcon icon={faGift} />
                                <div>
                                    <FormattedMessage id="player_center_nav.mypromos" />
                                </div>
                            </Link>
                        </li>
                        <li className={props.unreadMessages > 0 ? 'active' : ''}>
                            <Link to={`/${props.locale}/player-center/messages/`}>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <div>
                                    <FormattedMessage id="player_center_nav.messages" />
                                </div>
                            </Link>
                        </li>
                    </Fragment>
                )}
                <li>
                    <a onClick={()=>{props.showLivechatOptionals(true)}}>
                        <FontAwesomeIcon icon={faComment} />
                        <div>
                            <FormattedMessage id="sidebar.livechat" />
                        </div>
                    </a>
                </li>
                <li>
                    <Link to={`/${props.locale}/contact/`}>
                        <FontAwesomeIcon icon={faPhone} />
                        <div>
                            <FormattedMessage id="sidebar.contact" />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={`/${props.locale}/downloads/`}>
                        <FontAwesomeIcon icon={faArrowCircleDown} />
                        <div>
                            <FormattedMessage id="sidebar.download" />
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    </aside>
);

Sidebar.propTypes = {
    locale: PropTypes.string.isRequired,
    token: PropTypes.string
};

export default Sidebar;
