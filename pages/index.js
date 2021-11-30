// App
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

import  Header  from '../components/Header/header';
import  Home  from '../containers/Home/home';
import  Footer from '../components/Footer/footer'
import fetch from 'isomorphic-unfetch'
import '../stylesheets/base.scss'
import '../stylesheets/design.scss'
import CMS from '../lib/api'
import Configuration from '../lib/api/configuration'
import Head from 'next/head';
import Router, { withRouter } from 'next/router'
import Login from '../components/Login';
import ReactGA from 'react-ga';

class Index extends Component {

    static async getInitialProps(){

      const json = {"pagination":{"total":18,"current_page":1,"limit":20,"total_page":1},"data":[{"id":4,"slug":"sach-vpp","title":"S\u00e1ch, VPP","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon3.png","fa_class_name":"fa-book-open","sort_order":1},{"id":7,"slug":"may-tinh-laptop","title":"M\u00e1y t\u00ednh & Laptop","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon6.png","fa_class_name":"fa-laptop","sort_order":2},{"id":8,"slug":"dien-thoai-may-tinh-bang","title":"\u0110i\u1ec7n tho\u1ea1i & M\u00e1y t\u00ednh b\u1ea3ng","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon7.png","fa_class_name":"fa-mobile-alt","sort_order":3},{"id":17,"slug":"vouchers-du-lich","title":"Vouchers Du l\u1ecbch","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon4.png","fa_class_name":"fa-plane","sort_order":4},{"id":18,"slug":"vouchers-dich-vu","title":"Vouchers D\u1ecbch v\u1ee5","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon5.png","fa_class_name":"fa-ticket","sort_order":5},{"id":15,"slug":"thuc-pham-sieu-thi","title":"Th\u1ef1c ph\u1ea9m & Si\u00eau Th\u1ecb","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon2.png","fa_class_name":"fa-shopping-cart","sort_order":6},{"id":16,"slug":"nha-cua-doi-song","title":"Nh\u00e0 c\u1eeda & \u0110\u1eddi s\u1ed1ng","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon3.png","fa_class_name":"fa-home-lg-alt","sort_order":7},{"id":13,"slug":"me-be-do-ch\u01a1i","title":"M\u1eb9 & B\u00e9 & \u0110\u1ed3 ch\u01a1i","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon0.png","fa_class_name":"fa-baby-carriage","sort_order":8},{"id":14,"slug":"dien-may-dien-gia-dung","title":"\u0110i\u1ec7n m\u00e1y - \u0111i\u1ec7n gia d\u1ee5ng","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon1.png","fa_class_name":"fa-refrigerator","sort_order":9},{"id":6,"slug":"thoi-trang","title":"Th\u1eddi trang","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon5.png","fa_class_name":"fa-tshirt","sort_order":10},{"id":11,"slug":"suc-khoe-lam-dep","title":"S\u1ee9c Kho\u1ebb & L\u00e0m \u0111\u1eb9p","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon10.png","fa_class_name":"fa-spa","sort_order":11},{"id":2,"slug":"the-thao-da-ngoai","title":"Th\u1ec3 thao & D\u00e3 ngo\u1ea1i","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon1.png","fa_class_name":"fa-running","sort_order":12},{"id":19,"slug":"cham-soc-thu-cung","title":"Ch\u0103m s\u00f3c th\u00fa c\u01b0ng","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon6.png","fa_class_name":"fa-paw","sort_order":13},{"id":20,"slug":"thuc-pham-chuc-nang","title":"Th\u1ef1c ph\u1ea9m ch\u1ee9c n\u0103ng","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon7.png","fa_class_name":"fa-flower-daffodil","sort_order":14},{"id":10,"slug":"may-quay-phim-may-anh","title":"M\u00e1y quay phim & m\u00e1y \u1ea3nh","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon9.png","fa_class_name":"fa-camera","sort_order":16},{"id":9,"slug":"tivi","title":"Tivi","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon8.png","fa_class_name":"fa-tv","sort_order":17},{"id":5,"slug":"oto-xe-may-thiet-bi-so","title":"\u00d4t\u00f4, xe m\u00e1y & thi\u1ebft b\u1ecb s\u1ed1","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon4.png","fa_class_name":"fa-car","sort_order":18},{"id":3,"slug":"phu-kien-dien-tu","title":"Ph\u1ee5 ki\u1ec7n \u0111i\u1ec7n t\u1eed","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon2.png","fa_class_name":"fa-plug","sort_order":19}]}
      const res = await CMS.getCoupons()
      return {
          categories : json.data,
          products : res.data.data,
      }
    }

    state = {
      categoryIndex : 0,
      showLoginPage : false,
    }


    getCookie = (cookieName) => {
        console.log(cookieName);
        var match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
        if (match) return match[2];
    }

    componentDidMount() {
        // ReactGA.initialize('UA-76030080-1',{
        //     debug: true,
        //     titleCase: false,
        //   });
    }

    expandCategory = () => {
      this.setState ({
          categoryIndex : this.state.categoryIndex + 1
      })
    }

    collapseCategory = () => {
        this.setState ({
          categoryIndex : 0
        })
    }

    showLoginPage = (event) => {
        if(this.state.showLoginPage) {
             this.setState ({
                showLoginPage : false
             })
        }else {
             this.setState ({
                showLoginPage : true
             })
        }
    }

  onSearchProduct = (event) => {
      let searchText = this.state.searchKeyword;
      let key = searchText.replace(" ","+");
      Router.push({ pathname: '/tim-kiem',query: { q: key } });     
  }

  onSubscribeEmail = (event) => {
      let subscribedEmail = this.state.subscribedEmail;

      if (subscribedEmail == '') {
          return true;
      } else {
          CMS.subscribeEmail(subscribedEmail)
          .then(response => {
              alert('Đăng ký thành công email');
          })
          .catch(function(e) {
              if (e.status === 500) {
                  if (e.data.error.message) alert('Email đã tồn tại');
              }
          });
      }
  }

  onChangeSearch = (event) => {
      let searchText = event.target.value;

      this.setState({
          searchKeyword : searchText,
      });
  }

  onChangeSubscribeEmail = (event) =>{
      let subscribedEmail = event.target.value;

      this.setState({
          subscribedEmail : subscribedEmail,
      });
  }

  onKeyPressEnterSearch = (event) => {
      if(event.key === 'Enter') {
          let searchText = event.target.value;
          this.setState({
              searchKeyword : searchText,
          })

          Router.push({ pathname: '/tim-kiem',query: { q: searchText.replace(" ","+") } });  
      }
  }

   render(){
      return (
        <Fragment>
            <Head>
            <meta charset="utf-8"/>
            <meta content="ie=edge" http-equiv="x-ua-compatible"/>
            <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, viewport-fit=cover, minimal-ui" name="viewport"/>
            <meta name="description" content="Hoàn tiền không giới hạn khi mua hàng online, tích lũy đổi coupon, mua sắm thông minh tiết kiệm hơn" />
            <meta name="google-site-verification" content="SrxwQy7XQvAIxDuUy44XYMoLEwhskun04Ed0LuRIDrU" />0
            <meta name="robots" content="INDEX,FOLLOW"/>
            <meta name="keywords" content="Fundi.vn"/>
            <meta name="fragment" content="!"></meta>
            <title> Hoàn tiền, mã giảm giá từ Shopee, Tiki, Lazada, Agoda, Concung, FPT Shop, the coffee house </title>
            <link key="shortcut_icon" rel="shortcut icon" href="/assets/images/fundi-logo.png" />
            <link key="apple-touch-icon" rel="apple-touch-icon" href="/assets/images/fundi-logo.png"/>  
            <script dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PR6RH5');`,
  }}></script>
 
  <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  
/>
            </Head>
            <Header {...this.props} mobileCheck={this.mobileCheck} collapseCategory={this.collapseCategory} expandCategory={this.expandCategory}
            categoryIndex = {this.state.categoryIndex} 
            onKeyPressEnterSearch={this.onKeyPressEnterSearch}
            onSearchProduct={this.onSearchProduct}
            onChangeSearch={this.onChangeSearch}
            searchName={this.state.searchKeyword}
            showLoginPage={this.showLoginPage}
            />
            <main className="main">
                <Home {...this.props} />
                {
                    this.state.showLoginPage && <Login  showLoginPage={this.showLoginPage} cookieManagement={this.cookieManagement}/>
                }
            </main>
            <Footer 
            onSubscribeEmail={this.onSubscribeEmail} 
            onChangeSubscribeEmail={this.onChangeSubscribeEmail} 
            subscribedEmail={this.state.subscribedEmail}
            />
        </Fragment>
      )
   }
}
 
export default Index
