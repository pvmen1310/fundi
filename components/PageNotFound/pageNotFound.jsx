// Products

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './pageNotFound.scss';
const PageNotFound = props => {
    return (
        <section>
            <div className="banner_404">
            <img className="img-fluid desktop-cta" src="/assets/images/404.png"/>  
             <h1 style={{color:"white",fontWeight:"bold",marginTop:"2rem"}} >Xin lỗi, Trang không tìm thấy!</h1>
            </div>
        </section>
    );
};

export default PageNotFound;
