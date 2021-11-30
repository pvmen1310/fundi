// Launcher Link

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FormattedMessage } from 'react-intl';

import './launcher-link.scss';

const LauncherLink = props => (
    <div className="launcher-link">
        <div className="launcher-link-item">
            <img className="img-fluid" src={props.image} alt={props.name}/>
            <div className="launcher-link-title">
                <small>{props.name}</small>
            </div>
            <Link className="launcher-link-hover" to={props.link}>
                <h2 className="h4">{props.name}</h2>
                <div className="btn btn-primary">
                    <FormattedMessage id="slot.play_now" />
                </div>
                {props.description && <small>{props.description}</small>}
            </Link>
        </div>
    </div>
);

LauncherLink.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default LauncherLink;
