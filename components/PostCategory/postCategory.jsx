import React from 'react';
import PropTypes from 'prop-types';
import {isMobile} from 'react-device-detect'
import GoogleAds from '../GoogleAds/googleAds';
import './postCategory.scss';
import Link from 'next/link'

const PostItem = props => {
    return   <div className="blog">
        <Link href={props.link} >
            <a target="_blank" className={`blog-item ${props.isMobile ? 'mobile' : 'desktop'}`}>
                <img className="img-fluid desktop-cta" src={props.image ? props.image : "/assets/images/bannersmall.png"}/>
                <div className='blog-description'>
                    <a></a>
                    {props.name.replace(/&#([0-9]{1,4});/gi, function(match, numStr) {
                            var num = parseInt(numStr, 10); // read num as normal number
                            return String.fromCharCode(num);
                        })}
                </div>
            </a>
        </Link>

    </div>

};

const PostCategory = props => {
    return(
        <section className="blogs">
        <div className="container">
            <div className="row">
                {props && props.postList && props.postList.forEach(item => (
                    <PostItem
                        key={key}
                        name={item.title && item.title.rendered}
                        image={item.image_src && item.image_src.replace("http:","https:")}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    </section>
     )
};

export default PostCategory;
