// Channels

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './login.scss';
import Popup from "reactjs-popup";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import API from '../../lib/api/cms';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAYH-G8WKT-p-HL_OKwUGqLXUscgAe4kpE",
    authDomain: "fir-fundi.firebaseapp.com",
    databaseURL: "https://fir-fundi.firebaseio.com",
    projectId: "firebase-fundi",
    storageBucket: "firebase-fundi.appspot.com",
    messagingSenderId: "72519489304",
    appId: "1:72519489304:web:d7ba6bab43e6991648f06d"
};
//import 'react-tabs/style/react-tabs.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

export const auth = firebase.auth();
export const firestore = firebase.firestore();


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showTabLogin : true,
            email : '',
            password : '',
            name: '',
            errorMsg : '',
            openWindow : true,
            errorMsgEmail: '',
            errorMsgPassword : '',

        };

      
    }

    provider = new firebase.auth.GoogleAuthProvider();

    tagManagerArgs = {
        gtmId: 'UA-76030080-1',
    }

    componentDidMount() {
        
    }

    responseGoogle = (e) =>{
        auth.signInWithPopup(this.provider).then(response => {
            if(response) {
                let data = {
                    social_token : response.credential && response.credential.idToken
                }

                API.loginSocial(data,'google').then(response => {
                    if(response.data.api_token) {
                        console.log(response.data);
                        this.createCookieInHour('api_token',response.data.api_token,100000)
                        this.createCookieInHour('user_id',response.data.data.id,100000)
                        this.setState({
                            openWindow:false
                        })
                        location.reload();
                    }
                }).catch(error => {
                    var data = error.response;
                    if(data.data.messages) {
                        this.setState({
                            errorMsg : data.data.messages,
                        })
                    }
                });
            }
        });
    }

    responseFacebook = (response) => {
        let data = {
            social_token : response.accessToken
        }

        API.loginSocial(data,'facebook').then(response => {
            if(response.data.api_token) {
                console.log(response.data);
                this.createCookieInHour('api_token',response.data.api_token,100000)
                this.createCookieInHour('user_id',response.data.data.id,100000)
                this.setState({
                    openWindow:false
                })
                location.reload();
            }
        }).catch(error => {
            var data = error.response;
            if(data.data.messages) {
                this.setState({
                    errorMsg : data.data.messages,
                })
            }
        });
    }

    handleChangeName = (e) => {
        this.setState({
            name : e.target.value
        })
    }

    handleChangeEmail = (e) => {
        this.setState({
            email : e.target.value
        })
    }
    
    handleChangePassword = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    handleSubmitLogin = (e) =>  {
        let data = {
            email : this.state.email,
            password : this.state.password,
        }

        API.login(data).then(response => {
            if(response.data.api_token) { 
                this.createCookieInHour('api_token',response.data.api_token,100000)
                this.createCookieInHour('user_id',response.data.data.id,100000)
                this.setState({
                    openWindow:false
                })
                location.reload();
            }
        }).catch(error => {
            var data = error.response;
            if(data.data.messages) {
                this.setState({
                    errorMsgEmail : data.data.messages && data.data.messages.email,
                    errorMsgPassword : data.data.messages && data.data.messages.password,
                    errorMsg : data.data.messages && data.data.messages[0],
                })
            }
        });
    }

    createCookieInHour = (cookieName, cookieValue, hourToExpire) => {
        let date = new Date();
        date.setTime(date.getTime()+(hourToExpire*60*60*1000));
        document.cookie = cookieName + " = " + cookieValue + "; expires = " +date.toGMTString();
    }
    

    handleSubmitRegister = (e) => {
       
        let data = {
            email : this.state.email,
            password : this.state.password,
            name : this.state.name,
        }

        // ReactGA.event({
        //     category: "Tracking",
        //     action: "Sign up Completed",
        //     label: "Tracking users every time they register in.",
        //     nonInteraction: true
        //   });
          

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        'formLocation': 'register',
        'event': 'signUpComplete'
        });

        API.register(data).then(response => {
            if(response.data.api_token) {
                  this.createCookieInHour('api_token',response.data.api_token,100000)
                  this.createCookieInHour('user_id',response.data.data.id,100000)
                this.setState({
                    openWindow:false
                })
                location.reload();
            }
        })
        .catch(error => {
            console.log(error.response);
            var data = error.response;
            if(data.data.messages) {
                this.setState({
                    errorMsgEmail : data.data.messages && data.data.messages.email,
                    errorMsgPassword : data.data.messages && data.data.messages.password,
                    errorMsg : data.data.messages && data.data.messages[0],
                })
            }
        });
    }

    render () { 
        return (
        <Popup
        open={this.state.openWindow}
        modal
        nested
        position="top center"
      >
        {close => (
          <div className="modal">
            <span className="close" onClick={() => {
                close
                this.props.showLoginPage()
            }}>
                X
            </span>
            <div className="header">
            </div>
            <div className="content row">
                    {this.state.showTabLogin ? (
                        <div className="col-md-5">
                            <br/>
                            <span style={{fontWeight:'600',fontSize:'20px',marginTop:'10px'}}>Đăng nhập</span><br></br><br></br>
                            <span >Đăng nhập để theo dõi ,quản lý các sản phẩm yêu thích, nhận tin tức khuyến mãi ưu đãi sớm nhất</span><br/><br/>
                            <img className="mr-1" style={{marginLeft:'29px'}} src="/assets/images/login-icon.png" />
                        </div>
                    ) : (
                        <div className="col-md-5">
                            <br/>
                            <span style={{fontWeight:'600',fontSize:'20px',marginTop:'10px'}}>Tạo tài khoản</span><br></br><br></br>
                            <span >Tạo tài khoản để theo dõi, quản lý các sản phẩm yêu thích , nhận tin tức khuyến mãi ưu đãi sớm nhất</span><br/><br/>
                            <img className="mr-1" style={{marginLeft:'29px'}} src="/assets/images/login-icon.png" />
                        </div>
                    )}
                <div className="col-md-7">
                <Tabs>
            <TabList>
            <Tab onClick={() => {
                 this.setState({
                    showTabLogin:true,
                    errorMsg: '',
                 })
            }} >Đăng nhập</Tab>
            <Tab onClick={() => {
                this.setState({
                    showTabLogin:false,
                    errorMsg: '',
                })
            }}>Tạo tài khoản</Tab>
            </TabList>
        
            <TabPanel>
                {
                    this.state.errorMsg && <div className="row"><span  style={{color:'red',marginBottom: '-30px',
                    marginLeft: '78px'}}>{this.state.errorMsg}</span></div>     
                }
                {
                    this.state.errorMsgEmail && <div className="row"><span  style={{color:'red',marginBottom: '-30px',
                    marginLeft: '78px'}}>{this.state.errorMsgEmail}</span></div> 
                } 
                {
                    this.state.errorMsgPassword && !this.state.errorMsgEmail && <div className="row"><span  style={{color:'red',marginTop:"10px",marginBottom: '-30px',
                    marginLeft: '78px'}}>{this.state.errorMsgPassword}</span></div>     
                } 
                <div className="row" style={{marginTop:'30px'}}>
                    <label className="col-md-2 mt-1" >Email</label> <input placeholder="Nhập email" value={this.state.email} onChange={this.handleChangeEmail} required className="form-control col-md-8" type="text" />     
                </div>
                <div className="row" style={{marginTop:'10px'}}>
                    <label className="col-md-2 mt-1" >Mật khẩu</label> <input placeholder="Nhập mật khẩu" value={this.state.password} onChange={this.handleChangePassword} required className="form-control col-md-8" type="password" />
                </div>
                <div className="row" style={{marginTop:'5px'}} >
                    {/* <p className="col-md-8 text-left" style={{marginLeft:'65px'}} >Quên mật khẩu <a href="#">Nhấn vào đây</a></p> */}
                </div>
                <div className="row no-margin-top-mobile" style={{marginTop:'10px'}} >
                    <button className="col-md-8 no-margin" onClick={ () => this.handleSubmitLogin()}  style={{backgroundColor:"#ff9340",marginLeft:'75px'}} >Đăng nhập</button>
                </div>
                <div className="row hidden-in-mobile" style={{marginTop:'10px'}}>
                    <span style={{marginLeft: "13rem"}}>Hoặc</span>
                </div>
                
                <div className="row" style={{marginTop:'10px'}}>
                <FacebookLogin
                    appId="580469216218491" 
                    fields="name,email,picture"
                    buttonText="Đăng nhập bằng Facebook"
                    render={renderProps => (
                        <button className="col-md-8 fa fa-facebook no-margin"  style={{backgroundColor:"#3b5998",marginLeft:'75px',paddingTop:'1px',paddingBottom:'1px'}} onClick={renderProps.onClick}><img style={{float:"left"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDYuODI3IDYuODI3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIj48cmVjdCBjbGFzcz0iZmlsMCIgd2lkdGg9IjYuODI3IiBoZWlnaHQ9IjYuODI3IiByeD0iMS40NTYiIHJ5PSIxLjQ1NiIgZmlsbD0iIzNiNTk5OCIvPjxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNNC4xOTcgMy41MTNIMy42NXYyLjAwNGgtLjgzVjMuNTEzaC0uMzk0di0uNzA0aC4zOTR2LS40NTZjMC0uMzI2LjE1NS0uODM2LjgzNi0uODM2bC42MTQuMDAydi42ODRoLS40NDZjLS4wNzMgMC0uMTc1LjAzNi0uMTc1LjE5MnYuNDE0aC42MmwtLjA3My43MDR6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"></img><span style={{lineHeight:'30px'}}>Đăng nhập bằng Facebook</span></button>
                      )}
                    callback={this.responseFacebook}
                />
                </div>
                <div className="row" style={{marginTop:'10px'}}>
                    <button className="col-md-8 no-margin"  style={{backgroundColor:"#bf2f2f",marginLeft:'75px'}} onClick={this.responseGoogle} ><img style={{float:"left",height:"22px",marginLeft:"2px"}} src="/assets/images/googleplus.png"></img>Đăng nhập bằng Gmail</button>
                </div>
            </TabPanel>
            <TabPanel>
                {
                    this.state.errorMsg && <div className="row"><span style={{color:'red',marginBottom: '-30px',
                    marginLeft: '90px'}}>{this.state.errorMsg}</span></div>     
                }
                <div className="row" style={{marginTop:'30px'}}>
                    <label className="col-md-2 mt-1" >Họ tên </label> <input placeholder="Nhập họ tên" value={this.state.name} onChange={this.handleChangeName} className="form-control col-md-8" type="text" />
                </div>
                <div className="row" style={{marginTop:'10px'}}>
                    <label className="col-md-2 mt-1" >Email</label> <input placeholder="Nhập email" value={this.state.email} onChange={this.handleChangeEmail} required className="form-control col-md-8" type="text" />
                </div>
                <div className="row" style={{marginTop:'10px'}}>
                    <label className="col-md-2 mt-1" >Mật khẩu</label> <input placeholder="Nhập mật khẩu" value={this.state.password} onChange={this.handleChangePassword} required className="form-control col-md-8" type="password" />
                </div>
                <div className="row" style={{marginTop:'10px'}} >
                    <button className="col-md-8 " onClick={ () => this.handleSubmitRegister()} style={{backgroundColor:"#ff9340",marginLeft:'75px'}} >Tạo tài khoản</button>
                </div>
                <div  className="row" style={{marginTop:'10px'}}>
                    <span style={{marginLeft:'75px'}}>Đăng kí là bạn đã đồng ý với <a target="_blank" href="https://fundi.vn/khong-tin-duoc-fundi-shopback-hoan-tien-khi-mua-hang-online/
">Điều khoản sử dụng Fundi.vn</a></span>
                </div>
             
            </TabPanel>
        </Tabs>
                </div>
             
            </div>
          </div>
            )}
            </Popup>
        );
    }
}

export default Login;
