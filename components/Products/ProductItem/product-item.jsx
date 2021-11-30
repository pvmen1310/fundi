import React from 'react';
import PropTypes from 'prop-types';
import Link  from 'next/link';
import './product-item.scss';

const ProductItem = props => {
    return   <div className="product">
        <Link href={props.link}>
            <a target="_blank" rel="nofollow" className={`product-item ${props.isMobile ? 'mobile' : 'desktop'}`} >
            <img className="img-fluid desktop-cta" src={props.image ? props.image : "/assets/images/bannersmall.png"}/>
             <div className="product-channel-icon" >
               <img src={props.logo ? props.logo : "/assets/images/icon-shopee.png"} />
            </div>
            <div className='product-description'>
                { props.days > 30 &&  <p>Số lượng có hạn</p> }
                { props.days  <= 30 &&  <p>HSD: còn { props.days } ngày {props.hours - props.days*24} giờ {props.minutes - props.hours*60} phút {props.seconds - props.minutes*60} giây</p> }

            </div>
            </a>
        </Link>

    </div>

};

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isMobile :PropTypes.bool,
    enTitle : PropTypes.string,
    enableMobileWebCTA : PropTypes.bool,
    enableWebCTA : PropTypes.bool,
    mobileWebImage :PropTypes.string,
};

export default ProductItem;
