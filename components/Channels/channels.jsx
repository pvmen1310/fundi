// Channels

import React from 'react';
import PropTypes from 'prop-types';
import './channels.scss';

const Channels = props => {
    return (
        <section className="channels">
            <div className="container">
            <p className='col-md-12 channels-title' >Đối tác hoàn tiền </p>
            <div className="row">
                {props.sellers && props.sellers.map((item,key) => 
                  (<div className="col-md-2 mt-5 channels-image">
                      <a target="_blank" rel="nofollow" href={item.seller_cashback_cat[0].link_to_url+props.userId}><img style={{width:"70%",height:"70%" }} width="100" height="100" src={item.logo_image_src} alt={item.name} name={item.name}/></a>
                  </div>)
               )}
            </div>
            </div>
        </section>
    );
};

export default Channels;
