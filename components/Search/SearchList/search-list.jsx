// Products

import React from 'react';
import PropTypes from 'prop-types';
// import SearchItem from '../SearchItem';
import './search-list.scss';
import moment from 'moment';
import '../SearchItem/search-item.scss';
import Link from 'next/link'

const SearchItem = props => {
    return  <div className="search">
               <Link  href={ props.link}  >
                   <a target="_blank" rel="nofollow" className={`search-item ${props.isMobile ? 'mobile' : 'desktop'}`} >
                   <img className="img-fluid desktop-cta" src={props.image ? props.image : "/assets/images/bannersmall.png"}/>
                   <div className="search-channel-icon" >
                       <img src={props.logo ? props.logo : "/assets/images/icon-shopee.png"} />
                   </div>

                   <div className='search-description'>
                        <h4>
                            {props.name}
                        </h4>
                        <div className='row'>
                            <h4 className = "search-price" >
                                {(props.discount_price).toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, "$1.")}đ
                            </h4>
                            <h4 className="ml-1 search-original-price">
                                {props.regular_price.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, "$1.")}đ
                            </h4>
                            {props.discount_percent ? (<h4 className="search-percent">
                                { '-'+props.discount_percent+'%'}
                            </h4>) : ''}

                        </div>
                   </div>
                   </a>
               </Link>
           </div>
};

const SearchList = props => {
    return (
        <section className="products">
            <div className="container">
                <div className="row">
                     {props.products.map((item, key) => (
                        <SearchItem
                            {...props}
                            key={key}
                            name={item.name}
                            image={item.image_src}
                            link={item.link}
                            logo={item.seller_logo}
                            regular_price = {item.regular_price}
                            discount_price = {item.discount_price}
                            discount_percent = {item.discount_percent}
                            isMobile = {props.mobileCheck()}
                        />
                     ))}
                </div>
                {!props.hideShowMore &&
                <button className="btn btn-primary col-lg-1 mb-3 control bold button" style={{background:'#D8101D'}} type="submit"
                   onClick={ () => {
                        props.showMore();
                   }}
                >XEM THÊM</button> }
            </div>
        </section>
    );
};

export default SearchList;
