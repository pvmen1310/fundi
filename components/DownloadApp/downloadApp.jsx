// Channels

import React from 'react';
import PropTypes from 'prop-types';
import './downloadApp.scss';

const DownloadApp = props => {
    return (
        <section className="download-app" style={{marginBottom:"70px"}}>
            <div className="container">
                <div className="row" style={{marginTop:"70px"}}>
                    <div className="col-md-6">
                        <img id="download-image" style={{width:"297px !important",height:"500px !important",marginLeft:"120px"}} src="/assets/images/download-app.png" />
                    </div>
                    <div className="col-md-6" style={{color:'black'}}>
                        <h1 style={{fontSize:"20px",fontWeight:"bold",color:"#d20707 !important",marginTop:"70px"}}>Fundi Cashback & Deals</h1>
                        <p>* Tập hợp các deals, ưu đãi khuyến mãi hấp dẫn nhất khi shopping từ các thương hiệu nhà bán lẻ trên cả nước.</p>
                        <p>* Hoàn tiền lên đến 500.000 khi mua sắm.</p>
                        <p>* Chia sẻ hàng nghìn voucher khủng từ 100 thương hiệu lớn.</p>
                        <p>* Thông báo ưu đãi đúng lúc,đúng chỗ,đúng đối tượng để nội dung phù hợp nhất </p>
                        <p>* Tích điểm đổi thưởng hoặc các coupon voucher hot nhất thị trường  </p>

                        <div className="row mt-1">
                            <div className="col-md-6 download-button text-right">
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.fundiapp.vn"><img  src="/assets/images/ggplay.png" /></a>
                            </div>
                             <div id="download-button-2" className="col-md-6 download-button text-left">
                                <a target="_blank" href="https://apps.apple.com/vn/app/fundi-cashback-deals/id1495012624?ls=1"><img src="/assets/images/appstore.png" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
