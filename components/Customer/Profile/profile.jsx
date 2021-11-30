// Channels

import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Pagination from "react-js-pagination";
import './profile.scss';
import ReactPaginate from 'react-paginate';

const Profile = props => {
    console.log(props.bank_id)
    return (
        <section className="profile">
            <div className="container">
            <Tabs>
            <TabList>
                <Tab onClick={() => {}} > <p>Thông tin tài khoản </p></Tab>
                <Tab onClick={() => {}}>Lịch sử đặt hàng</Tab>
                <Tab onClick={() => {}}>Tài khoản hoàn tiền</Tab>
                <Tab onClick={(e) => {
                    e.preventDefault();
                    props.logout()
                    }}>Đăng xuất</Tab>
            </TabList>           
            <TabPanel>
                <div className="row" style={{marginTop:'30px'}}>
                    <label className="col-md-2 mt-1" >Họ tên </label> <input  value={props.name} onChange={(e) => props.handleChangeName(e)} className="form-control col-md-8" type="text" />
                </div>
                <div className="row" style={{marginTop:'10px',marginBottom:"10px"}}>
                    <label className="col-md-2 mt-1" >Email</label> <input  disabled="true"  value={props.user && props.user.email}  className="form-control col-md-8" type="text" />
                </div>
                <div className="row" style={{marginTop:'10px',marginBottom:"10px"}}>
                    <label className="col-md-2 mt-1" >Số điện thoại</label> <input type="number" value={props.phone_number}  onChange={(e) => props.handleChangePhone(e)} className="form-control col-md-8" />
                </div>
                <div className="row col-md-6 text-right" style={{marginTop:'10px',marginBottom:"10px"}}>
                    <button onClick={ (e) => props.handleSubmitUpdateAccount(e)}  style={{backgroundColor:"red"}} >Cập nhật</button>
                </div>
                
           </TabPanel>
           <TabPanel>
            <div className="col-lg-3">
                    <select className="form-control" style={{marginBottom:"30px",marginLeft:"-10px"}} onChange={(e) => props.handleFilterChange(e)}>
                            <option value="" >Tất cả</option>
                            <option value="0">
                                Đang chờ duyệt
                            </option>
                            <option value="1">
                                Đã duyệt 
                            </option>
                            <option value="-1">
                                Bị từ chối
                            </option>
                    </select>
                </div>
               {
                
                <table style={{width:"100%",marginBottom:"30px"}}>
                   <tr>
                        <th>Tên đối tác</th>
                        <th>Giá đơn hàng</th>
                        <th>Tiền hoàn lại</th>
                        <th>Ngày giao dịch</th>
                   </tr>
                   {
                     
                       props.orderList && props.orderList.data && props.orderList.data.map((item,key) =>       
                           (
                            <tr>
                                <td>{item.merchant_name}</td>
                                <td>{item.payout_amount}</td>
                                <td>{item.est_cashback && item.est_cashback}đ</td>
                                <td>{item.conversion_time}</td>
                            </tr>
                           
                           )
                       )
                       
                   }    
               </table>   
               }

                { props.orderList.data && props.orderList.data.length > 0 &&
                    <Pagination
                            activePage={props.orderList && props.orderList.current_page}
                            itemsCountPerPage={props.orderList && props.orderList.per_page}
                            totalItemsCount={props.orderList && props.orderList.total}
                            onChange={props.handlePageChange}
                        />
                }
            
           </TabPanel>
           <TabPanel>
           <div className="row" style={{marginTop:'30px'}}>
                    <label className="col-md-2 mt-1" >Tên tài khoản </label> <input  style={{marginLeft: "3px"}} onChange={(e) => props.handleChangeBankName(e)} value={props.bank_name} className="form-control col-md-8" type="text" />
                </div>
                <div className="row" style={{marginTop:'10px',marginBottom:"10px"}}>
                    <label className="col-md-2 mt-1" >Tài khoản ngân hàng </label> <input style={{marginLeft: "3px"}} onChange={(e) => props.handleChangeBankAccount(e)} value={props.bank_account}  className="form-control col-md-8" type="text" />
                </div>
                <div className="row" style={{marginTop:'10px',marginBottom:"10px"}}>
                <label className="col-md-2 mt-1" >Tên ngân hàng </label>
                    <select className="form-control col-md-8 ml-1" value={props.bank_id} onChange={(e) => props.handleChangeBank(e)}>
                            <option value="" hidden></option>
                            {
                                props.bankList && props.bankList.map((item,key) =>       
                                    (
                                        <option value={item.id} >{item.bank_name}</option>
                                
                                    )
                                )

                            }
                    </select>
                </div>
                <div className="row col-md-6 text-right" style={{marginTop:'10px',marginBottom:"10px"}}>
                    <button onClick={ (e) => props.handleSubmitUpdateBankAccount(e)}  style={{backgroundColor:"red"}} >Cập nhật</button>
                </div>
           </TabPanel>
            </Tabs>
            </div>
        </section>
    );
};

export default Profile;
