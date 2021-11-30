import React, { Component, Fragment } from 'react';
import Head from 'next/head'
import API from '../../lib/api/cms';
import Profile from '../../components/Customer/Profile';
import Configuration from '../../lib/api/configuration'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            orderList : [],        
            page : 0,
            status : "",
            phone_number : "",
            name : "",
            gender : "",
            bank_name : "",
            bank_account : "",
            bank : "",
            bank_id : "",
            bankList : [],
        };
    }

    getCookie = (cookieName) => {
        console.log(cookieName);
        var match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
        if (match) return match[2];
    }

    deleteCookie = (name) => {
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }

    componentDidMount() {
        console.log(this.getCookie('api_token'))
        Configuration.setHeader('Authorization', `Bearer ${this.getCookie('api_token')}`);
        this.getUserDetail();
        this.getOrderList();
        this.getBankList();
    }

    getBankList() {
        API.getBankList().then(response => {
            this.setState({
                bankList : response.data.data,
            })
        }).catch(error => {
               console.log(error)
        });
    }

    getUserDetail() {
        API.getUserDetail().then(response => {
            this.setState({
                user : response.data,
                phone_number : response.data.phone_number,
                name: response.data.name,
                gender : response.data.gender,
                bank_name : response.data.bank_account_name,
                bank_account : response.data.bank_account_number,
                bank_id : response.data.bank && response.data.bank.id,
            })
        }).catch(error => {
            var data = error.response;
            if(data.data.messages) {
               console.log(data.data.messages)
            }
        });
    }

    getOrderList(page = 1) {
         API.getOrderList(page,"").then(response => {
            this.setState({
                orderList : response.data
            })
        }).catch(error => {
            var data = error.response;
            if(data.data.messages) {
               console.log(data.data.messages)
            }
        });
    }

    handlePageChange = (e) => {
        this.setState({
            page : e
        })
        this.getOrderList(e);
    }

    handleFilterChange = (e) => {
        let status = e.target.value;
        this.setState({
            status : status
        })
        API.getOrderList(this.state.page,status).then(response => {
            this.setState({
                orderList : response.data
            })
        }).catch(error => {
            var data = error.response;
            if(data.data.messages) {
               console.log(data.data.messages)
            }
        });
    }

    handleChangePhone = (e) => {
        this.setState({
            phone_number : e.target.value
        })
    }

    handleChangeName = (e) => {
        this.setState({
            name : e.target.value
        })
    }

    handleSubmitUpdateAccount = () => {
        let data = {
            name: this.state.name,
            phone_number: this.state.phone_number,
            gender : this.state.gender ? this.state.gender : "M" 
        }

        API.updateUserDetail(data).then(response => {
            this.setState({
                user : response.data,
                phone_number : response.data.phone_number
            })
        }).catch(error => {
            console.log(error);
            if(data.messages) {
               alert(data.messages)
            }
        });
    }

    handleChangeBankName = (e) => {
        this.setState({
            bank_name : e.target.value
        })
    }

    handleChangeBankAccount = (e) => {
        this.setState({
            bank_account : e.target.value
        })
    }

    handleChangeBank = (e) => {
        this.setState({
            bank_id : e.target.value
        })
    }

    handleSubmitUpdateBankAccount = () => {
        let data = {
            name: this.state.name,
            gender : this.state.gender ? this.state.gender : "M" ,
            bank_account_name: this.state.bank_name,
            bank_account_number: this.state.bank_account,
            bank_account_id : this.state.bank_id,
        }

        API.updateUserDetail(data).then(response => {
            this.setState({
                user : response.data,
                phone_number : response.data.phone_number
            })
        }).catch(error => {
            console.log(error);
            if(data.messages) {
               alert(data.messages)
            }
        });
    }

    logout = (e) => {
        this.deleteCookie('api_token');
        this.deleteCookie('user_id');
        window.location.href = "/";
    }

    render() {
        return (
            <Fragment>
                <Head>
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
                </Head>
                <Profile orderList={this.state.orderList} user={this.state.user} logout={this.logout} 
                handleFilterChange={this.handleFilterChange}
                handlePageChange={this.handlePageChange}
                handleChangePhone={this.handleChangePhone}
                handleSubmitUpdateAccount={this.handleSubmitUpdateAccount}
                handleChangeName={this.handleChangeName}
                handleSubmitUpdateBankAccount={this.handleSubmitUpdateBankAccount}
                handleChangeBankName={this.handleChangeBankName}
                handleChangeBankAccount={this.handleChangeBankAccount}
                handleChangeBank={this.handleChangeBank}
                
                {...this.state}
                />
            </Fragment>
        );
    }
}

export default Home
