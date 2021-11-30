// Header

import React, { Component, Fragment } from 'react';
import Link from 'next/link'

import './header.scss';
import CMS from '../../lib/api/cms'
import Configuration from '../../lib/api/configuration'


class Header extends Component  {

    constructor(props) {
        super(props);

        this.state = {
            api_token : '',
        };
    }

    getCookie = (cookieName) => {
        var match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
        if (match) return match[2];
    }

    componentDidMount = () => {
        this.setState({
            api_token : this.getCookie('api_token')
        })

        Configuration.setHeader('Authorization', `Bearer ${this.getCookie('api_token')}`);

        CMS.getUserDetail().then(response => {
            console.log(response)
        });
    }

    render () { 
        console.log(this.props)
        return (
        <header >
            <div className="header-top">
                 <div className="container">
                    <div className="row">
                        <div className="header-brand col-md-2 col-sm-6 mt-2">
                             <Link href={`/`} >
                                <a ><img src="/assets/images/logofundi.png" /></a>
                            </Link>
                        </div>
                        <div className="col-md-4 hidden-in-mobile" style={{visibility: 'hidden'}}>
                            <input type='text' placeholder="Tìm kiếm khuyến mãi ..."  className='text-left search-input' />
                            <img className="search-icon" src={"/assets/images/iconsearch.png"} />
                        </div>
                        <div className="col-md-4 text-right mt-4 hidden-in-mobile" style={{cursor:'pointer'}} onClick={() => {
                                alert("Chương trình chỉ diễn ra trên app")

                        }}>
                            <img className="mr-1" src="/assets/images/dola.png" style={{filter: 'invert(100%)'}}/>Mời thêm bạn,nhận 30k !
                        </div>

                        { !this.state.api_token && <div className="col-md-2 text-right btn-registration" style={{cursor:"pointer"}} onClick={(e) => {
                                e.preventDefault();
                                this.props.showLoginPage()
                            }}>
                            <a className="mr-1" style={{ color:'white' , borderStyle : 'solid',borderWidth: '1px',borderRadius:'5px',borderColor:'white',padding: '7px 9px' }} src="/assets/images/dola.png" >Đăng Nhập / Đăng Ký</a>
                        </div>}
                        {
                            this.state.api_token && <div className="col-md-2 btn-account">
                            <a href="/customer/account" ><img src="/assets/images/step-0.png" width="30px" height="30px" style={{marginLeft:"25px",filter:"invert(1)"}} />
                                <span style={{color:"white",marginLeft:"10px"}}>Tài khoản</span>
                            </a>
                            </div>
                        }
                    </div>
                 </div>
            </div>

             <div className="header-middle">
                 <div className="container">
                    <div className="row" style={{paddingTop:'15px'}}>
                        <div className="col-md-3 row step">
                            <img src="/assets/images/step-0.png"  width="30px" height="30px"/>
                            <p className="ml-3" style={{fontSize:'12px',width:'120px'}}>Đăng nhập vào tài khoản Fundi của bạn</p>
                            <img src="/assets/images/left-arrow.png" height="12px" width="10px" className="text-right mt-2 ml-4 hidden-in-mobile"/>
                        </div>
                        <div className="col-md-3 row step" >
                                <img src="/assets/images/step-1.png"  width="30px" height="30px"/>
                                <p className="ml-3" style={{fontSize:'12px',width:'120px'}}>Chọn thương hiệu bạn muốn hoàn tiền</p>
                                <img src="/assets/images/left-arrow.png" height="12px" width="10px" className="text-right mt-2 ml-4 hidden-in-mobile"/>
                            </div>
                        <div className="col-md-3 row step">
                                <img src="/assets/images/step-2.png" width="30px" height="30px"/>
                                <p className="ml-3" style={{fontSize:'12px',width:'120px'}}>Fundi dẫn đến trang đối tác & mua sắm như bình thường</p>
                                <img src="/assets/images/left-arrow.png" height="12px" width="10px" className="text-right mt-2 ml-4 hidden-in-mobile"/>
                            </div>
                        <div className="col-md-3 row step">
                                <img src="/assets/images/step-3.png" width="30px" height="30px"/>
                                <p className="ml-3" style={{fontSize:'12px',width:'120px'}}>Hoàn tiền ở trạng thái "Tổng số tiền tích lũy"</p>
                                <img src="/assets/images/left-arrow.png" height="12px" width="10px" className="text-right mt-2 ml-4 hidden-in-mobile"/>
                            </div>
                        <div className="col-md-3 row step">
                            <img src="/assets/images/step-4.png"  width="30px" height="30px"/>
                            <p className="ml-3" style={{fontSize:'12px',width:'120px'}}>Kiếm tra thông tin tài khoản trước khi rút về</p>
                            <img src="/assets/images/left-arrow.png" height="12px" width="10px" className="text-right mt-2 ml-4 hidden-in-mobile"/>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="header-bottom">
            </div>
        </header>
        );
    }
}


export default Header;
