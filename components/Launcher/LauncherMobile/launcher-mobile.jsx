import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import './launcher-mobile.scss';

const LauncherMobile = props => {
    let titleNPlayNow = props.intl.formatMessage({ id: 'slot.play_now' });
    return <div className="launcher-mobile">
        <Link to={props.link} className="launcher-mobile-box">
            <div className="launcher-image">
                <img className="img-fluid" src={props.image} alt={props.title}/>
            </div>
            <div className="launcher-content">
                <h2 className="launcher-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="btn btn-default btn">{titleNPlayNow}</div>
            </div>
        </Link>
    </div>
};

LauncherMobile.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string
};

LauncherMobile.defaultProps = {
    title: 'WeBet (WB)',
    image: 'http://via.placeholder.com/300x300',
    link: '/'
};

export default injectIntl(LauncherMobile);
