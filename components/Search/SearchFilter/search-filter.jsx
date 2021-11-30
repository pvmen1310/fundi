// Slots Filter

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import './search-filter.scss';

const CategoryFilter = props => {
    return <section className="search-filter">
        <div className="container">
            <div className="row">
                {props.isSearchPage &&
                <h2 className="col-lg-6 mt-2" style={{fontSize:"1rem" }}>Kết quả tìm kiếm cho "{props.searchName}": {props.total} kết quả </h2> }
                {!props.isSearchPage && <h2 className="col-lg-6 mt-2" style={{fontSize:"1rem" }}> Kết quả thuộc "{props.catName}": {props.total} kết quả </h2> }
                <div className="col-lg-3">
                      <select className="form-control" onChange={(e) => props.onChangePriceRange(e)}>
                             <option value="" hidden >Khoảng Giá</option>
                             <option value="1">
                                 Dưới 500k
                              </option>
                              <option value="2">
                                 500k  -  1 Triệu
                               </option>
                               <option value="3">
                                 1 Triệu  -  5 Triệu
                               </option>
                               <option value="4">
                                 5 Triệu  -  10 Triệu
                               </option>
                               <option value="5">
                                 trên 10 triệu
                               </option>
                        </select>
                </div>

                <div className="col-lg-3">
                     <select  onChange={(e) => props.onChangeSearchOrder(e)} className="form-control">
                        <option value="" hidden >Sắp xếp theo</option>
                        <option value="1">
                           Giá tăng dần
                        </option>
                        <option value="2">
                           Giá giảm dần
                        </option>
                        <option value="3">
                           Giá giảm nhiều nhất
                        </option>
                    </select>
                </div>

            </div>
         </div>
    </section>
};

export default injectIntl(CategoryFilter);
