// App
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

import  Header  from '../../components/Header';
import  Post  from '../../components/Post';
import  Footer from '../../components/Footer'
import  PageNotFound from '../../components/PageNotFound'
import  PostCategory from '../../components/PostCategory'
import fetch from 'isomorphic-unfetch'
import '../../stylesheets/base.scss'
import '../../stylesheets/design.scss'
import CMS from '../../lib/api'
import { useRouter } from 'next/router'
import Head from 'next/head';
import Error from 'next/error';
import Router, { withRouter } from 'next/router'
import Privacy from '../../components/Pages/Privacy';
import About from '../../components/Pages/About';
import Login from '../../components/Login';

class PagePost extends Component {

    static async getInitialProps({query}){
      const postCategoryId= [ 
        {
          id:22,
          "slug" : "bai-noi-bat"
        },
        {
          id:32,
          "slug" : "bitis-hunter"
        },
        {
          id:37,
          "slug" : "kinh-nghiem-hay"
        },
        {
          id:1,
          "slug" : "chuyen-muc-khac"
        },
        {
          id:3,
          "slug" : "blog"
        },
        {
          id:28,
          "slug" : "dat-phong-khach-san"
        },
        {
          id:177,
          "slug" : "dien-may-dien-gia-dung"
        },
        {
          id:38,
          "slug" : "khuyen-mai-moi"
        },
        {
          id:29,
          "slug" : "lam-dep"
        },
        {
          id:27,
          "slug" : "ma-giam-gia"
        },
        {
          id:33,
          "slug" : "me-va-be"
        },
        {
          id:24,
          "slug" : "mua-hang-online"
        },
        {
          id:186,
          "slug" : "thoi-trang"
        },
        {
          id:31,
          "slug" : "tour-du-lich"
        },
        {
          id:20,
          "slug" : "ve-may-bay"
        },
        {
          id:197,
          "slug" : "voucher-an-uong"
        },
    ];

      const postCategorySlug= [
        "bai-noi-bat",
        "bitis-hunter",
        "kinh-nghiem-hay",
        "chuyen-muc-khac",
        "blog",
        "dat-phong-khach-san",
        "dien-may-dien-gia-dung",
        "khuyen-mai-moi",
        "lam-dep",
        "ma-giam-gia",
         "me-va-be",
        "mua-hang-online",
         "thoi-trang",
        "tour-du-lich",
        "ve-may-bay",
        "voucher-an-uong",
      ]

      const pages = [
        "chinh-sach-bao-mat",
        "gioi-thieu-fundi-vn",
      ]

      const json = {"pagination":{"total":18,"current_page":1,"limit":20,"total_page":1},"data":[{"id":4,"slug":"sach-vpp","title":"S\u00e1ch, VPP","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon3.png","fa_class_name":"fa-book-open","sort_order":1},{"id":7,"slug":"may-tinh-laptop","title":"M\u00e1y t\u00ednh & Laptop","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon6.png","fa_class_name":"fa-laptop","sort_order":2},{"id":8,"slug":"dien-thoai-may-tinh-bang","title":"\u0110i\u1ec7n tho\u1ea1i & M\u00e1y t\u00ednh b\u1ea3ng","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon7.png","fa_class_name":"fa-mobile-alt","sort_order":3},{"id":17,"slug":"vouchers-du-lich","title":"Vouchers Du l\u1ecbch","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon4.png","fa_class_name":"fa-plane","sort_order":4},{"id":18,"slug":"vouchers-dich-vu","title":"Vouchers D\u1ecbch v\u1ee5","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon5.png","fa_class_name":"fa-ticket","sort_order":5},{"id":15,"slug":"thuc-pham-sieu-thi","title":"Th\u1ef1c ph\u1ea9m & Si\u00eau Th\u1ecb","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon2.png","fa_class_name":"fa-shopping-cart","sort_order":6},{"id":16,"slug":"nha-cua-doi-song","title":"Nh\u00e0 c\u1eeda & \u0110\u1eddi s\u1ed1ng","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon3.png","fa_class_name":"fa-home-lg-alt","sort_order":7},{"id":13,"slug":"me-be-do-ch\u01a1i","title":"M\u1eb9 & B\u00e9 & \u0110\u1ed3 ch\u01a1i","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon0.png","fa_class_name":"fa-baby-carriage","sort_order":8},{"id":14,"slug":"dien-may-dien-gia-dung","title":"\u0110i\u1ec7n m\u00e1y - \u0111i\u1ec7n gia d\u1ee5ng","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon1.png","fa_class_name":"fa-refrigerator","sort_order":9},{"id":6,"slug":"thoi-trang","title":"Th\u1eddi trang","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon5.png","fa_class_name":"fa-tshirt","sort_order":10},{"id":11,"slug":"suc-khoe-lam-dep","title":"S\u1ee9c Kho\u1ebb & L\u00e0m \u0111\u1eb9p","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon10.png","fa_class_name":"fa-spa","sort_order":11},{"id":2,"slug":"the-thao-da-ngoai","title":"Th\u1ec3 thao & D\u00e3 ngo\u1ea1i","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon1.png","fa_class_name":"fa-running","sort_order":12},{"id":19,"slug":"cham-soc-thu-cung","title":"Ch\u0103m s\u00f3c th\u00fa c\u01b0ng","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon6.png","fa_class_name":"fa-paw","sort_order":13},{"id":20,"slug":"thuc-pham-chuc-nang","title":"Th\u1ef1c ph\u1ea9m ch\u1ee9c n\u0103ng","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon7.png","fa_class_name":"fa-flower-daffodil","sort_order":14},{"id":10,"slug":"may-quay-phim-may-anh","title":"M\u00e1y quay phim & m\u00e1y \u1ea3nh","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon9.png","fa_class_name":"fa-camera","sort_order":16},{"id":9,"slug":"tivi","title":"Tivi","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon8.png","fa_class_name":"fa-tv","sort_order":17},{"id":5,"slug":"oto-xe-may-thiet-bi-so","title":"\u00d4t\u00f4, xe m\u00e1y & thi\u1ebft b\u1ecb s\u1ed1","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon4.png","fa_class_name":"fa-car","sort_order":18},{"id":3,"slug":"phu-kien-dien-tu","title":"Ph\u1ee5 ki\u1ec7n \u0111i\u1ec7n t\u1eed","description":null,"image_src":"https:\/\/fundi-storage.s3-ap-southeast-1.amazonaws.com\/images\/fundi-categories-icon\/icon2.png","fa_class_name":"fa-plug","sort_order":19}]}

      if(query.post_slug == undefined)
        return {}
      
      if(pages.includes(query.post_slug)) {
        return {
          categories : json.data,
          pages : query.post_slug,
        }
      }

      if(postCategorySlug.includes(query.post_slug)) {
          var categoryId = '';
          postCategoryId.forEach(item => {
            if(item.slug == query.post_slug) {
              categoryId = item.id;
            }
          })
          const res = await CMS.getPostsByCategory(categoryId)

          return {
            categories : json.data,
            postList : res.data,
          }
      } else {
        const res = await CMS.getPosts(query.post_slug)
      
        if(res.data[0] && res.data[0].id) {
          const commentRes = await CMS.getComments(res.data[0].id);
            return {
              categories : json.data,
              post : res.data[0],
              comments : commentRes.data 
           }
        } else {
          return {
            categories : json.data,
          }
        }
      }
    }

    state = {
      categoryIndex : 0,
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
  
   render(){

      if(this.props.pages == 'chinh-sach-bao-mat') {
        return (
          <Fragment>
            <Head>
            <link key="shortcut_icon" rel="shortcut icon" href="/assets/images/fundi-logo.png" />
            <link key="apple-touch-icon" rel="apple-touch-icon" href="/assets/images/fundi-logo.png"/>  
            <title>Chính sách bảo mật</title>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PR6RH5');`,
        }}></script>
                  </Head>
                  <Header {...this.props} collapseCategory={this.collapseCategory} expandCategory={this.expandCategory}
                  categoryIndex = {this.state.categoryIndex}
                  showLoginPage={this.showLoginPage}
                  />
                  <main className="main">
                      <Privacy {...this.props} />
                      {
                        this.state.showLoginPage && <Login  showLoginPage={this.showLoginPage} cookieManagement={this.cookieManagement}/>
                      }
                  </main>
                  <Footer/>
              </Fragment>
            )  
      }

      if(this.props.pages == 'gioi-thieu-fundi-vn') {
        return (
          <Fragment>
            <Head>
            <link key="shortcut_icon" rel="shortcut icon" href="/assets/images/fundi-logo.png" />
            <link key="apple-touch-icon" rel="apple-touch-icon" href="/assets/images/fundi-logo.png"/>  
            <title>Giới thiệu về fundi</title>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PR6RH5');`,
        }}></script>
                  </Head>
                  <Header {...this.props} collapseCategory={this.collapseCategory} expandCategory={this.expandCategory}
                  categoryIndex = {this.state.categoryIndex}
                  showLoginPage={this.showLoginPage}
                  />
                  <main className="main">
                      <About {...this.props} />
                      {
                        this.state.showLoginPage && <Login  showLoginPage={this.showLoginPage} cookieManagement={this.cookieManagement}/>
                      }
                  </main>
                  <Footer/>
              </Fragment>
            )  
      }

      if(this.props.post) {
        return (
          <Fragment>
            <Head>
            <link key="shortcut_icon" rel="shortcut icon" href="/assets/images/fundi-logo.png" />
            <link key="apple-touch-icon" rel="apple-touch-icon" href="/assets/images/fundi-logo.png"/>  
            <meta name="keywords" content={this.props.post  &&this.props.post.title.rendered}/>
            <meta name="keywords" content={this.props.post && this.props.post.title.rendered}/>
            <meta name="description" content={this.props.post && this.props.post.excerpt.rendered.replace(/&#([0-9]{1,4});/gi, function(match, numStr) {
                    var num = parseInt(numStr, 10); // read num as normal number
                    return String.fromCharCode(num);
            })} />
            <meta property="og:image" content={this.props.post && this.props.post.image_src && this.props.post.image_src.replace("http:","https:")} />
            <meta property="og:url" content={this.props.post && this.props.post.link }/>
            <title>{this.props.post && this.props.post.title && this.props.post.title.rendered.replace(/&#([0-9]{1,4});/gi, function(match, numStr) {
                    var num = parseInt(numStr, 10); // read num as normal number
                    return String.fromCharCode(num);
            })}</title>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <script dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PR6RH5');`,
  }}></script>
            </Head>
            <Header {...this.props} collapseCategory={this.collapseCategory} expandCategory={this.expandCategory}
            categoryIndex = {this.state.categoryIndex}
            showLoginPage={this.showLoginPage}
            />
            <main className="main">
                <Post {...this.props} />
                {
                    this.state.showLoginPage && <Login  showLoginPage={this.showLoginPage} cookieManagement={this.cookieManagement}/>
                }
            </main>
            <Footer/>
        </Fragment>
      )
      } else if(this.props.postList) {
        return <Fragment>
        <Head>
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
        </Head>
        <Header {...this.props} collapseCategory={this.collapseCategory} expandCategory={this.expandCategory}
        categoryIndex = {this.state.categoryIndex}
        showLoginPage={this.showLoginPage}
        />
        <main className="main">
            <PostCategory {...this.props} />
            {
                this.state.showLoginPage && <Login  showLoginPage={this.showLoginPage} cookieManagement={this.cookieManagement}/>
            }
        </main>
        <Footer/>
    </Fragment>
      } else {
        return <Fragment>
          <Head>
          <link key="shortcut_icon" rel="shortcut icon" href="/assets/images/fundi-logo.png" />
          <link key="apple-touch-icon" rel="apple-touch-icon" href="/assets/images/fundi-logo.png"/>  
          <title>Không tìm thấy trang yêu cầu | 404</title>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <script dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PR6RH5');`,
  }}></script> 
          </Head>
          <Header {...this.props} collapseCategory={this.collapseCategory} expandCategory={this.expandCategory}
          categoryIndex = {this.state.categoryIndex}/>
          <main className="main">
              <PageNotFound  />
          </main>
          <Footer/>
        </Fragment>
      }
   }
}
 
export default PagePost
