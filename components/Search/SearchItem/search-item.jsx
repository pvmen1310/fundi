// Slots Filter

import React from 'react';
import { Link } from 'next/link';

import './search-item.scss';

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

export default SearchItem;
