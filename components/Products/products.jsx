// Products

import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import './products.scss';
import moment from 'moment';
const Products = props => {
    return (
        <section className="products">
            <div className="container">
                <h1 className="mb-3" style={{color: 'black',textAlign: 'start',fontWeight: '600'}}>Tổng hợp <a style={{color:'red'}}>mã giảm giá</a> và <a style={{color:'red'}}>khuyến mãi</a> mới nhất</h1>
                <div className="row">
                    {props.products.map((item, key) => key >= 0 ? (
                        <ProductItem
                            key={key}
                            isMobile={props.isMobile}
                            enTitle={item.title_en}
                            name={item.name}
                            image={item.image_src}
                            link={item.link}
                            logo={item.seller_logo}
                            days={moment(item.expired_date).diff(moment() , 'days')}
                            hours={moment(item.expired_date).diff(moment() , 'hours')}
                            minutes={moment(item.expired_date).diff(moment() , 'minutes')}
                            seconds={moment(item.expired_date).diff(moment() , 'seconds')}
                        />
                    ) : '')}
                </div>
                <button className="btn btn-primary col-lg-1 mb-3 control bold button" style={{background:'#D8101D'}} type="submit"
                   onClick={ () => {
                        props.showMore();
                   }}
                >XEM THÊM</button>
            </div>
        </section>
    );
};

Products.propTypes = {
    products: PropTypes.array.isRequired,
    isMobile : PropTypes.bool,
};

export default Products;
