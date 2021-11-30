// Products

import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from './BlogItem';
import './blogs.scss';
import moment from 'moment';
import GoogleAds from '../GoogleAds';

const Blogs = props => {
    return (

        <section className="blogs">
            <div className="container">
                <h1 className="mb-3" style={{color: 'black',textAlign: 'start',fontWeight: '600'}}>Bài viết nổi bật</h1>
                <div className="row">
                    {props.posts && props.posts.map((item, key) => key >= 0 ? (
                        <BlogItem
                            key={key}
                            name={item.title && item.title.rendered}
                            image={item.image_src && item.image_src.replace("http:","https:")}
                            link={item.link}
                        />
                    ) : '')}
                </div>
            </div>
        </section>
    );
};
export default Blogs;
