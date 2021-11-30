import React, { Component, Fragment } from 'react';

import CMS from '../../lib/api';
import Head from 'next/head';
import CategoryFilter from '../../components/Category/CategoryFilter'
import SearchList from '../../components/Search/SearchList'
import {isMobile} from 'react-device-detect'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage : 1,
            total : 0,
            products : this.props.products,
            orderBy : '',
            orderType : '',
            minPrice : '',
            maxPrice : '',
            catName : '',
            hideShowMore : 0,
            post : {},
            comments : [],
        };
    }

    mobileCheck() {
        return isMobile
    }

    getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    getProductsByCondition(queryCondition,isResetPageNumber = true)
    {
        let products = this.state.products;
        let currentPage = this.state.currentPage;
        CMS.getProducts(queryCondition).then(response => {
            if(!isResetPageNumber) {
              this.setState({
                  products: this.state.products.concat(response.data.data),
                  total : response.data.pagination && response.data.pagination.total,
                  currentPage: currentPage + 1,
               });
            } else {
                 this.setState({
                     products: response.data.data,
                     total : response.data.pagination && response.data.pagination.total,
                  });
            }

            if(response.data.pagination && response.data.pagination.current_page == response.data.pagination.total_page) {
                this.setState({
                    hideShowMore : 1
                })
            }else {
              this.setState({
                   hideShowMore : 0
               })
            }
        });
    }

    getPost(slug) {
        CMS.getPosts(slug).then(response => {
            this.setState({
                post: response.data[0],
            });

           CMS.getComments(response.data[0].id).then(response => {
                 this.setState({
                    comments: response.data,
                });
           })
        });
    }

    onChangeSearchOrder = (event) => {
        let orderBy = '';
        let orderType = '';

        if(event.currentTarget.value == 1) {
            orderBy = 'regular_price';
            orderType = 'ASC'
        }

        if(event.currentTarget.value == 2) {
            orderBy = 'regular_price';
            orderType = 'DESC'
        }

         if(event.currentTarget.value == 3) {
            orderBy = 'discount_percent';
            orderType = 'DESC'
         }

         this.setState({
            orderBy: orderBy,
            orderType : orderType,
            currentPage : 1,
         });

        let queryCondition =  {
            'name' : this.props.searchName,
            'cat_name' : this.props.catUrl,
            'page' : this.state.currentPage,
            'min_price': this.state.minPrice,
            'max_price' : this.state.maxPrice,
            'order_by' : orderBy,
            'order_type' : orderType,
        };

        this.getProductsByCondition(queryCondition,true);
    }

   onChangePriceRange = (event) => {
        let minPrice = '';
        let maxPrice = '';

        if(event.currentTarget.value == 1) {
            maxPrice = 500000;
        }

        if(event.currentTarget.value == 2) {
            minPrice = 500000;
            maxPrice = 1000000;
        }

         if(event.currentTarget.value == 3) {
            minPrice = 1000000;
            maxPrice = 5000000;
         }

         if(event.currentTarget.value == 4) {
             minPrice = 5000000;
             maxPrice = 10000000;
         }

         if(event.currentTarget.value == 5) {
             minPrice = 10000000;
         }
         this.setState({
            minPrice: minPrice,
            maxPrice : maxPrice,
            currentPage : 1,
         });

        let queryCondition =  {
            'name' : this.props.searchName,
            'cat_name' : this.props.catUrl,
            'page' : this.state.currentPage,
            'min_price' : minPrice,
            'max_price' : maxPrice,
            'orderBy': this.state.orderBy,
            'orderType' : this.state.orderType,
        };

        this.getProductsByCondition(queryCondition,true);
    }

    showMore = (event) => {

       let currentPage = this.state.currentPage;
       let queryCondition =  {
         'name' : this.props.searchName,
         'cat_name' : this.props.catUrl,
         'page' : currentPage + 1,
         'per_page' : 20,
         'order_by' : this.state.orderBy,
         'order_type' : this.state.orderType,
         'min_price' : this.state.minPrice,
         'max_price' : this.state.maxPrice,
       };
       this.getProductsByCondition(queryCondition,false);
    }

    render() {
        
            return (
            <Fragment>
                <Head>
                    <link key="shortcut_icon" rel="shortcut icon" href="/assets/images/fundi-logo.png" />
                    <link key="apple-touch-icon" rel="apple-touch-icon" href="/assets/images/fundi-logo.png"/>  
                    <title>{"Danh mục " + this.props.catName}</title>
                    <meta name="description" content={"Kết quả thuộc " + this.props.catName + ": " + " sản phẩm giảm giá trên Fundi.vn"
                        + ". Khuyến mãi HOT, coupon giảm giá, bài review để mua hàng tại Lazada, Tiki, Adayroi, Lotte, FPT shop, Nguyễn Kim và các sàn TMĐT khác."} />
                </Head>
                <CategoryFilter {...this.props} categories={this.props.categories } total={this.props.total} onChangePriceRange={this.onChangePriceRange}
                onChangeSearchOrder={this.onChangeSearchOrder}/>
                <SearchList {...this.props} products = {this.props.products} mobileCheck={this.mobileCheck} showMore={this.showMore} hideShowMore={this.state.hideShowMore} />
            </Fragment>
            );
    }
}

export default Category
