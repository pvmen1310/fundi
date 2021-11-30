// App
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

import  Header  from '../../../components/Header/header';
import  Account  from '../../../containers/Account/account';
import  Footer from '../../../components/Footer/footer'
import fetch from 'isomorphic-unfetch'
import '../../../stylesheets/base.scss'
import '../../../stylesheets/design.scss'
import Head from 'next/head';
import Router, { withRouter } from 'next/router'
import Login from '../../../components/Login';

class PageAccount extends Component {

    static async getInitialProps(){
      return {
      }
    }

    state = {
      showLoginPage : false,
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


   render(){
      return (
        <Fragment>
            <Head>
            <meta charset="utf-8"/>
            <meta content="ie=edge" http-equiv="x-ua-compatible"/>
            <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, viewport-fit=cover, minimal-ui" name="viewport"/>
            <meta name="description" content="Chuyên cung cấp các khuyến mãi HOT, coupon giảm giá, bài review để mua hàng tại Lazada, Tiki, Adayroi, Lotte, FPT shop, Nguyễn Kim và các sàn TMĐT khác." />
            <meta name="google-site-verification" content="SrxwQy7XQvAIxDuUy44XYMoLEwhskun04Ed0LuRIDrU" />
            <meta name="robots" content="INDEX,FOLLOW"/>
            <meta name="keywords" content="Fundi.vn"/>
            <meta name="fragment" content="!"></meta>
            <title>Coupon khuyến mãi và sản phẩm giảm giá từ các shop online</title>
            <link key="shortcut_icon" rel="shortcut icon" href="/assets/images/fundi-logo.png" />
            <link key="apple-touch-icon" rel="apple-touch-icon" href="/assets/images/fundi-logo.png"/>  
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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
            <Header {...this.props} mobileCheck={this.mobileCheck}
            showLoginPage={this.showLoginPage}
            />
            <main className="main">
                <Account {...this.props} />
                {
                    this.state.showLoginPage && <Login  showLoginPage={this.showLoginPage}/>
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
 
export default PageAccount
