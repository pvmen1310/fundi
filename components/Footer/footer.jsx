// Footer

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import './footer.scss';

const Footer = props => (
    <Fragment>
        <footer className="footer">
                  <div className="footer-top">
                      <div className="container">
                            <h1 className="bold mt-3">ĐĂNG KÝ NHẬN MÃ GIẢM GIÁ</h1>
                            <h2 className="bold"><i>từ hàng trăm website online</i></h2>
                            <div className="row">
                                <input type='text'  placeholder="Nhập Email ..." value={props.subscribedEmail} className='text-left mt-2 ml-2 col-lg-3 control' onChange={(event) => props.onChangeSubscribeEmail(event)}/>
                                <button className="btn btn-primary col-lg-1 mt-2 control bold button" onClick={(event) => props.onSubscribeEmail(event)}>ĐĂNG KÝ</button>
                            </div>
                            <div className="mt-2 footer-top-description">* Thông tin được bảo mật hoàn toàn </div>
                       </div>
                   </div>

                 <div className="footer-mid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                 <img src="/assets/images/fundiwhite.png" />
                                 <img className="bold mb-1" src="/assets/images/redline.png"  style={{width:"95%"}} />
                                 {/* <h3 style={{marginTop: "2.45rem"}}><Link to={{pathname : `https://blog.fundi.vn/gioi-thieu-fundi-vn/`}} target="_blank" rel="nofollow">Về Fundi</Link></h3> */}
                                 <h3 style={{marginTop: "2.45rem"}}><Link href={`/gioi-thieu-fundi-vn/`} ><a target="_blank">Về Fundi</a></Link></h3>
                                 {/* <h3 className="mt-3"><Link to={{pathname : `https://blog.fundi.vn/chinh-sach-bao-mat/`}} target="_blank" rel="nofollow">Bảo mật và quyền riêng tư</Link></h3> */}
                                 <h3 className="mt-3"><Link href={`/chinh-sach-bao-mat/`} ><a target="_blank">Bảo mật và quyền riêng tư</a></Link></h3>
                                 <h3 className="mt-3"><Link href={`/`}>Điều khoản sử dụng</Link></h3>
                                 <h3 className="mt-3"><Link href={`/`}>Liên hệ fundivn.info@gmail.com</Link></h3>
                                 <h3 >CTY TNHH CÔNG NGHỆ FUNDI</h3>
                                 <h4 style={{ fontSize:"0.8rem" }}>Giấy CNĐKDN: 0315999811 </h4>
                                 <h4 style={{ fontSize:"0.8rem" }}>Ngày cấp: 07/11/2019 lần đầu</h4>
                                 <h4 style={{ fontSize:"0.8rem" }}>Cơ quan cấp: Phòng Đăng ký kinh doanh – Sở kế hoạch và Đầu tư TP.HCM</h4>
                                 <h4 style={{ fontSize:"0.8rem" }}>ĐCĐKKD: Tầng 3, Phòng 301, Toà nhà WMC số 102A-B-C Cống Quỳnh, Phường Phạm Ngũ Lão, Quận 1, Tp HCM, Việtnam</h4>
                            </div>
                            <div className="col-lg-4">
                                <h2 className="bold mt-4"><i>HOT TAG</i></h2>
                                <img className="bold mb-5" src="/assets/images/redline.png" style={{width:"95%"}} />
                                <div className="ml-1">
                                    <div className="row">
                                        <Link  href={`/tim-kiem?q=Nokia`}><a className="tag mr-1 mt-1" >Nokia</a></Link>
                                        <Link  href={`/tim-kiem?q=Samsung`}><a className="tag mr-1 mt-1" >Samsung</a></Link>
                                        <Link  href={`/tim-kiem?q=Sony`}><a className="tag mr-1 mt-1" >Sony</a></Link>
                                        <Link  href={`/tim-kiem?q=Blackberry`}><a className="tag mr-1 mt-1" >Blackberry</a></Link>
                                        <Link  href={`/tim-kiem?q=Asus`}><a className="tag mr-1 mt-1">Asus</a></Link>
                                        <Link  href={`/tim-kiem?q=HTC`}><a className="tag mr-1 mt-1" >HTC</a></Link>
                                        <Link  href={`/tim-kiem?q=Oppo`}><a className="tag mr-1 mt-1" >Oppo</a></Link>
                                        <Link  href={`/tim-kiem?q=Lenovo`}><a className="tag mr-1 mt-1">Lenovo</a></Link>
                                        <Link  href={`/tim-kiem?q=Alcatel`}><a className="tag mr-1 mt-1">Alcatel</a></Link>
                                        <Link  href={`/tim-kiem?q=iPhone+4s`}><a className="tag mr-1 mt-1" >iPhone 4s</a></Link>
                                        <Link  href={`/tim-kiem?q=iPhone+5s`}><a className="tag mr-1 mt-1" >iPhone 5s</a></Link>
                                        <Link  href={`/tim-kiem?q=iPhone+6`}><a className="tag mr-1 mt-1" > iPhone 6 </a></Link>
                                        <Link  href={`/tim-kiem?q=Apple+iPhone%206s`}><a className="tag mr-1 mt-1" >Apple iPhone 6s</a></Link>
                                        <Link  href={`/tim-kiem?q=iPad`}><a className="tag mr-1 mt-1">iPad</a></Link>
                                        <Link  href={`/tim-kiem?q=Samsung+Tablet`}><a className="tag mr-1 mt-1">Samsung Tablet</a></Link>
                                        <Link  href={`/tim-kiem?q=Acer+Tablet`}><a className="tag mr-1 mt-1" >Acer Tablet</a></Link>
                                        <Link  href={`/tim-kiem?q=Lenovo+Tablet`}><a className="tag mr-1 mt-1">Lenovo Tablet</a></Link>
                                        <Link  href={`/tim-kiem?q=Tivi+Sony`}><a className="tag mr-1 mt-1">Tivi Sony</a></Link>
                                        <Link  href={`/tim-kiem?q=Tivi+LG`}><a className="tag mr-1 mt-1">Tivi LG</a></Link>
                                        <Link  href={`/tim-kiem?q=Tivi+Toshiba`}><a className="tag mr-1 mt-1">Tivi Toshiba</a></Link>
                                        <Link  href={`/tim-kiem?q=Tivi+Samsung`}><a className="tag mr-1 mt-1">Tivi Samsung</a></Link>
                                        <Link  href={`/tim-kiem?q=Tivi+Sharp`}><a className="tag mr-1 mt-1">Tivi Sharp</a></Link>
                                        <Link  href={`/tim-kiem?q=Tivi+Panasonic`}><a className="tag mr-1 mt-1">Tivi Panasonic</a></Link>
                                        <Link  href={`/tim-kiem?q=Tivi+LCD`}><a className="tag mr-1 mt-1">Tivi LCD</a></Link>
                                        <Link  href={`/tim-kiem?q=Tivi+Samsung%20LCD`}><a className="tag mr-1 mt-1">Tivi Samsung LCD</a></Link>
                                        <Link  href={`/tim-kiem?q=Tivi+LG%20LCD`}><a className="tag mr-1 mt-1" >Tivi LG LCD</a></Link>
                                        <Link  href={`/tim-kiem?q=Tivi+Sharp%20LCD`}><a className="tag mr-1 mt-1">Tivi Sharp LCD</a></Link>
                                        <Link  href={`/tim-kiem?q=Tivi+LED`}><a className="tag mr-1 mt-1">Tivi LED</a></Link>
                                        <Link  href={`/tim-kiem?q=Tivi+Sony%20LED`}><a className="tag mr-1 mt-1">Tivi Sony LED</a></Link>
                                        <Link  href={`/tim-kiem?q=Tivi+Samsung%20LED`}><a className="tag mr-1 mt-1">Tivi Samsung LED</a></Link>
                                        <Link  href={`/tim-kiem?q=Máy+giặt%20Sanyo`}><a className="tag mr-1 mt-1">Máy giặt Sanyo</a></Link>
                                        <Link  href={`/tim-kiem?q=Máy+giặt%20Toshiba`}><a className="tag mr-1 mt-1">Máy giặt Toshiba</a></Link>
                                        <Link  href={`/tim-kiem?q=Máy+giặt%20Hitachi`}><a className="tag mr-1 mt-1">Máy giặt Hitachi</a></Link>
                                        <Link  href={`/tim-kiem?q=Máy+giặt%20Samsung`}><a className="tag mr-1 mt-1">Máy giặt Samsung</a></Link>
                                        <Link  href={`/tim-kiem?q=Máy+giặt%20LG`}><a className="tag mr-1 mt-1">Máy giặt LG</a></Link>
                                        <Link href="/tim-kiem?q=Mã%2Bgiảm%20giá%20Lazada"><a className="tag mr-1 mt-1">Mã giảm giá Lazada</a></Link>
                                        <Link href="/"><a className="tag mr-1 mt-1">Mã giảm giá Tiki</a></Link>
                                        <Link href="/"><a className="tag mr-1 mt-1">Mã giảm giá Shopee</a></Link>
                                        <Link href="/"><a className="tag mr-1 mt-1">Tiki sách</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                 <h2 className="bold mt-4"><i>BÁO CHÍ</i></h2>
                                 <img className="bold mb-5" src="/assets/images/redline.png" style={{width:"95%"}} />
                                  <h3 ><Link href={`https://vnexpress.net/kinh-doanh/fundi-khac-phuc-5-tinh-huong-khi-su-dung-ma-giam-gia-nhu-the-nao-3936405.html`}
                                     ><a target="_blank" rel="nofollow" >Fundi trên Vnexpress</a></Link></h3>
                                  <h3 className="mt-3"><Link href={`https://news.zing.vn/san-ma-giam-gia-online-tren-website-fundivn-post804104.html`}
                                    ><a target="_blank" rel="nofollow">Fundi trên Zings</a></Link></h3>
                                  <h3 className="mt-3"><Link href={`http://cafef.vn/co-fundi-ma-khuyen-mai-mua-gi-cung-re-20190517111652671.chn`}
                                    ><a target="_blank" rel="nofollow">Fundi trên CafeF</a></Link></h3>
                                  <h3 className="mt-3"><Link href={ `https://www.facebook.com/groups/ChiaseVoucherMagiamgiaOnline/`}
                                    ><a target="_blank" rel="nofollow">Group chia sẻ vouchers hơn 8000 thành viên</a></Link></h3>
                                  <div className="row">
                                     <h3 className="mt-2" style={{ marginLeft: "10px" }} ><Link href="/"><a>Kết nối với chúng tôi: </a></Link></h3>
                                     <Link href={ `https://www.facebook.com/fundigroup/`}  ><a target="_blank" rel="nofollow"><img className="mt-1 ml-2" src="/assets/images/fblogo.png" width="30" height="30" /></a></Link>
                                     <Link href={ `https://www.linkedin.com/company/fundivn/`}><a target="_blank" rel="nofollow"><img className="mt-1 ml-2" src="/assets/images/linkedinlogo.png" width="30" height="30" /></a></Link>
                                  </div>
                                  <h3 className="mt-3" ><span className="app-highlight">Tải app Fundi Cashback</span></h3>
                                  <div className="row">
                                        <Link href={ `https://play.google.com/store/apps/details?id=com.fundiapp.vn`}  ><a target="_blank" rel="nofollow"><img className="mt-1 ml-2 app-icon" src="/assets/images/android-app.png" /></a></Link>
                                        <Link href={ `https://apps.apple.com/us/app/fundi-cashback-deals/id1495012624?ls=1`}><a target="_blank" rel="nofollow"><img className="mt-1 ml-2 app-icon" src="/assets/images/ios-app.png" /></a></Link>
                                  </div>
                            </div>
                        </div>
                    </div>
                 </div>

                <div className="footer-bottom">
                    <div className="container">
                         <h3>Website không bán hàng. Chỉ tổng hợp các khuyến mãi, voucher, mã giảm giá và review</h3>
                    </div>

                </div>

        </footer>
    </Fragment>
);

export default Footer;
