import React from 'react';
import PropTypes from 'prop-types';
import Link  from 'next/link';
import './comment.scss';
import moment from 'moment';

const Comment = props => {
    return  <div className="comment mt-4">
                <div className="comment-user">
                    <img src={props.avatar ? props.avatar : '' }/>
                    <div className='comment-author'><h3 style={{color:"black",fontWeight:"400"}}>{props.author}</h3></div>
                    <div className='comment-datetime'><h3 style={{color:"red",fontWeight:"400"}}>{moment(props.date).format("YYYY-MM-DD HH:mm:ss")}</h3></div>
                </div>
            <h3 style={{color:"black"}} className="mt-3"><div className="mt-3" dangerouslySetInnerHTML={{ __html: props.content && props.content.rendered }}/></h3>
    </div>

};

export default Comment;
