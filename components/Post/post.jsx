import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import {isMobile} from 'react-device-detect'
import GoogleAds from '../GoogleAds/googleAds';
import './post.scss';

const Post = props => {

    console.log(props);
    return(
    <section>
    <div className="post container">
        <GoogleAds slot="7284242238" format="auto"/>
        <h2 style={{color:"black",fontWeight: "600" }} ><div dangerouslySetInnerHTML={{ __html:  props.post && props.post.title && props.post.title.rendered }} /></h2>
        <h3 ><div className="mt-3" dangerouslySetInnerHTML={{ __html: props.post && props.post.content && props.post.content.rendered }}/></h3>
        <GoogleAds slot="9935993447"  format="autorelaxed"/>
     </div>

     <div className="comment mb-5 container">
         <h1 className="mt-2 mb-4" style={{color:"black",fontWeight:"bold"}}>Bình Luận </h1>
        {props.comments && props.comments.reverse().map((item,key) => {
            return <Comment
                key={key}
                avatar={item.author_avatar_urls ? item.author_avatar_urls[48] : '' }
                date={item.date_gmt ? item.date_gmt:''}
                content={item.content && item.content}
                author={item.author_name}
                isMobile={isMobile}
            />
        })}
     </div>
     </section>
     )
};

export default Post;
