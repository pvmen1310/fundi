// Promotion Item

import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import './promotion-item.scss';
import { injectIntl } from 'react-intl';
import Loadable from 'react-loadable';

const LiveChatOpen = () => {
    window.LC_API.open_chat_window();
};

const PromotionItem = props => {
    let joinNowText = props.intl.formatMessage({ id: 'promotion.join-now' });
    let chatCSText = props.intl.formatMessage({ id: 'chatWithUs' });

    return (
        <div className="promotion-item col-lg-8 mx-auto">
            <img className="img-fluid" src={props.image} alt={props.title}/>
            <div className="promotion-item-content">
                <h1 className="promotion-item-title">{props.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: props.content }} />
                <div className="text-center">
                    {(typeof props.cta_items !== 'undefined' && props.cta_items.length > 0) ? (props.cta_items.map((item, key) => {
                        return (
                            item.promo_code ? 
                            (
                            <a
                                key={key}
                                className={props.isPlayerRestricted ? 'btn btn-primary disabled mr-2 mb-2' : 'btn btn-primary mr-2 mb-2'}
                                onClick={() => {
                                    props.cookieManagement('promo_code','store',item.promo_code,true);
                                    props.cookieManagement('promo_type','store',item.type,true);
                                    props.applyPromotion(item.promo_code, item.type)
                                }}
                            >{item.cta_text ? item.cta_text : chatCSText}</a>
                            ) : 
                            (
                            <a
                                key={key}
                                className={props.isPlayerRestricted ? 'btn btn-primary disabled mr-2 mb-2' : 'btn btn-primary mr-2 mb-2'}
                                onClick={() => {props.showLivechatOptionals(true)}}
                            >{item.cta_text ? item.cta_text : chatCSText}</a>
                            )
                        )
                    })) : (
                        <a
                            className={props.isPlayerRestricted ? 'btn btn-primary disabled' : 'btn btn-primary'}
                            onClick={() => {props.showLivechatOptionals(true)}}
                        >
                            {chatCSText}
                        </a>
                    )}
                </div>
            </div>
            <div className="promotion-item-terms">
                <h2>
                    <FormattedMessage id="promotion.terms-and-conditions"/>
                </h2>
                <div dangerouslySetInnerHTML={{ __html: props.terms_and_conditions }} />
            </div>
        </div>
    );
};

PromotionItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    cta_text: PropTypes.string.isRequired,
    content: PropTypes.string,
    terms_and_conditions: PropTypes.string
};

export default injectIntl(PromotionItem);
