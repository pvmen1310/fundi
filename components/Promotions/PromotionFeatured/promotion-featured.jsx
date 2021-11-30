// Promotion featured

import React from 'react';
import PropTypes from 'prop-types';

import PromotionBanner from 'Components/Promotions/PromotionBanner/';

const PromotionFeatured = props => {
    return (
        <section className="promotion-featured">
            <div className="container">
                <div className="row">
                    {props.promotions.map((item, key) => (
                        <PromotionBanner
                            key={key}
                            name={item.title}
                            image={item.image}
                            link={'/' + props.locale + '' + item.link}
                            cta={item.cta_text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

PromotionFeatured.propTypes = {
    promotions: PropTypes.array.isRequired,
    locale: PropTypes.string.isRequired
};

export default PromotionFeatured;
