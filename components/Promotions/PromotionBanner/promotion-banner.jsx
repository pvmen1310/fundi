import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './promotion-banner.scss';

const PromotionBanner = props => (
    <div className="promotion-banner">
        <Link
            className={props.description ? 'promotion-banner-item alt' : 'promotion-banner-item'}
            to={props.link}
        >
            <img className="img-fluid" src={props.image} alt={props.name} />
            <div className="btn btn-default btn">
                <FormattedMessage id="homepage.learn_more" />
            </div>
        </Link>
        {props.title && (props.description && (
            <div className="promotion-banner-description">
                <Link className={'promotion-banner-item'} href={props.link}>
                    <h2 className="promotion-banner-title">{props.title}</h2>
                </Link>
                <p>{props.description}</p>
            </div>
        ))}
    </div>
);

PromotionBanner.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    cta: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};

export default PromotionBanner;
