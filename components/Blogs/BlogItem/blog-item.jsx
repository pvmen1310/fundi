import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import './blog-item.scss';

const BlogItem = props => {
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

export default BlogItem;
