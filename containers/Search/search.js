import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import {Helmet} from 'react-helmet';
import Loadable from 'react-loadable';
import { injectIntl } from 'react-intl';
import CMS from '../../lib/api';
import SearchFilter from '../../components/Search/SearchFilter'
import SearchFilter from '../../components/Search/SearchList'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage : 1,
            total : 0,
            products : [],
            orderBy : '',
            orderType : '',
            minPrice : '',
            maxPrice : '',
            catName : '',
            hideShowMore : 0,
        };
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

    componentDidMount() {
         let q = this.getParameterByName("q",window.location.search);
         let queryCondition =  {
             'name' : q,
             'page' : this.state.currentPage,
         };

         this.getProductsByCondition(queryCondition,true);

    }

    shouldComponentUpdate(nextProps){
        if(nextProps.location.search && this.props.location.search != nextProps.location.search){
            let queryCondition =  {
                 'name' : this.getParameterByName("q",window.location.search),
                 'cat_name' : this.state.catName,
                 'page' : this.state.currentPage,
                 'min_price': this.state.minPrice,
                 'max_price' : this.state.maxPrice,
                 'page' : 1,
                 'orderBy': this.state.orderBy,
                 'orderType' : this.state.orderType,
            };
            this.getProductsByCondition(queryCondition,true);
            return true;
        }
        return true;
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
                     currentPage : 1,
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
            'name' : this.getParameterByName("q",window.location.search),
            'cat_name' : this.state.catName,
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
            'name' : this.getParameterByName("q",window.location.search),
            'cat_name' : this.state.catName,
            'page' : this.state.currentPage,
            'min_price' : minPrice,
            'max_price' : maxPrice,
            'orderBy': this.state.orderBy,
            'orderType' : this.state.orderType,
        };

        this.getProductsByCondition(queryCondition,true);
    }

    onChangeCategory = (event) => {
            let catName = event.currentTarget.value;
            let queryCondition =  {
                'name' : this.getParameterByName("q",window.location.search),
                'cat_name' : catName,
                'page' : this.state.currentPage,
                'min_price' : this.state.minPrice,
                'max_price' : this.state.maxPrice,
                'orderBy': this.state.orderBy,
                'orderType' : this.state.orderType,
            };

           this.setState({
                catName: catName,
                currentPage : 1,
           });

            this.getProductsByCondition(queryCondition,true);
        }

    showMore = (event) => {

       let currentPage = this.state.currentPage;
       let queryCondition =  {
         'name' : this.getParameterByName("q",window.location.search),
         'cat_name' : this.state.catName,
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
                <Helmet>
                    <style>
                        {`body {
                            background: url(${this.state.backgroundImage}) top center no-repeat fixed;
                            background-size: cover;
                        }
                        @media (max-width: 575.98px) {
                            #root > main {
                                padding-left: 0rem;
                            }
                        }`}
                    </style>
                    <title>{"Kết quả tìm kiếm cho" + this.getParameterByName("q",window.location.search) + " : " + this.state.total + " sản phẩm giảm giá trên Fundi.vn"}</title>
                    <meta name="description" content={"Kết quả tìm kiếm cho" + this.getParameterByName("q",window.location.search) + ":" + this.state.total + "sản phẩm giảm giá trên Fundi.vn"
                    + ".Khuyến mãi HOT, coupon giảm giá, bài review để mua hàng tại Lazada, Tiki, Adayroi, Lotte, FPT shop, Nguyễn Kim và các sàn TMĐT khác."
                    } />
                </Helmet>
                <SearchFilter isSearchPage={true} categories={this.props.categories } onChangeCategory={this.onChangeCategory} searchName={this.getParameterByName("q",window.location.search)} catName={this.state.catName} total={this.state.total} onChangePriceRange={this.onChangePriceRange}
                onChangeSearchOrder={this.onChangeSearchOrder}/>
                <SearchList {...this.props} products={this.state.products} showMore={this.showMore} hideShowMore={this.state.hideShowMore} />
            </Fragment>
        );
    }
}

export default injectIntl(Search)
