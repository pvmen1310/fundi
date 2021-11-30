import axios from 'axios';

export default class CMS {
    static getBanner() {
        return axios
            .get('https://api.fundi.vn/api/v1/slider/sliders')
            .then(function(res) {
                return res;
            })
            .catch(function(e) {
                return e;
            });
    }

    static getCoupons(queryCondition) {
        return axios
            .get('https://api.fundi.vn/api/v1/seller/coupons',{
               'params' : queryCondition,
            })
            .then(function(res) {
                return res;
            })
            .catch(function(e) {
                return e;
            });
    }

   static getSellers() {
        return axios
            .get('https://api.fundi.vn/api/v1/seller/lists')
            .then(function(res) {
                return res;
            })
            .catch(function(e) {
                return e;
            });
    }

      static getPromotions() {
            return axios
                .get('https://api.fundi.vn/api/v1/seller/promotions')
                .then(function(res) {
                    return res;
                })
                .catch(function(e) {
                    return e;
                });
        }

    static getCategories() {
        return axios
            .get('https://api.fundi.vn/api/v1/category/list')
            .then(function(res) {
                return res;
            })
            .catch(function(e) {
                return e;
            });
    }

     static getProducts(queryCondition) {
        return axios
            .get('https://api.fundi.vn/api/v1/product/list',{
               'params' : queryCondition,
            })
            .then(function(res) {
                return res;
            })
            .catch(function(e) {
                return e;
            });
     }

     static subscribeEmail(email) {
        return axios
            .post('https://api.fundi.vn/api/v1/guest/subscribe', {
               'email' : email,
            })
            .then(function(res) {
                return res;
            })
            .catch(function(e) {
                return Promise.reject(e);
            });
     }

      static getPosts(slug) {
         return axios
             .get('https://blog.fundi.vn/wp-json/wp/v2/posts?slug='+slug)
             .then(function(res) {
                 return res;
             })
             .catch(function(e) {
                 return e;
             });
      }

      static getPostsByCategory(category) {
        return axios
            .get('https://blog.fundi.vn/wp-json/wp/v2/posts?categories='+category)
            .then(function(res) {
                return res;
            })
            .catch(function(e) {
                return e;
            });
     }

       static getAllPosts() {
           return axios
               .get('https://blog.fundi.vn/wp-json/wp/v2/posts')
               .then(function(res) {
                   return res;
               })
               .catch(function(e) {
                   return e;
               });
      }

        static getPostImages(postId) {
         return axios
             .get('https://blog.fundi.vn/wp-json/wp/v2/media/'+postId)
             .then(function(res) {
                 return res;
             })
             .catch(function(e) {
                 return e;
             });
      }

      static getComments(postId) {
         return axios
             .get('https://blog.fundi.vn/wp-json/wp/v2/comments?post='+postId)
             .then(function(res) {
                 return res;
             })
             .catch(function(e) {
                 return e;
             });
      }

      static login(data) {
        return axios
        .post('https://api.fundi.vn/api/v1/sign-in',data)
        .then(function(res) {
            return res;
        })
        .catch(function(e) {
            return Promise.reject(e);
        });
      }

      static loginSocial(data,source) {
        return axios
        .post('https://api.fundi.vn/api/v1/sign-in/'+source,data)
        .then(function(res) {
            return res;
        })
        .catch(function(e) {
            console.log(e);
            return Promise.reject(e);
        });
      }

      static register(data) {
        return axios
        .post('https://api.fundi.vn/api/v1/sign-up',data)
        .then(function(res) {
            return res;
        })
        .catch(function(e) {
            console.log(e);
            return Promise.reject(e);
        });
      }

      static getUserDetail() {
        return axios
            .get('https://api.fundi.vn/api/v1/my-account/detail')
            .then(function(res) {
                return res;
            })
            .catch(function(e) {
                return e;
            });
     }
}
