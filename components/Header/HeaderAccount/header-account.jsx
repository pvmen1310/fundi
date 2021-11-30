// Header Account

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

//import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './header-account.scss';

const HeaderAccount = props => {

    let captchaEnterElement;
    let captchaEnter = '';

    return (
        <div className="header-account">
            <form
                className="header-account-form"
                action=""
                onSubmit={event => {
                }}
            >
                <img className="mr-3" src="/assets/images/account.png" alt="" width="30" height="30" />
                <Link to={`/${props.locale}/registration/`}>
                    <h2 >Đăng Nhập </h2>
                </Link>
               <img  className="mr-2 ml-2 mb-1" src="/assets/images/devider.png" />
                <Link to={`/${props.locale}/registration/`} >
                    <h2 > Đăng Ký</h2>
                </Link>
            </form>
        </div>
    );
};

HeaderAccount.propTypes = {
    totalBalance: PropTypes.number,
    mainWallet: PropTypes.object,
    subWallet: PropTypes.object,
    userName: PropTypes.string,
    currencySymbol: PropTypes.string,
};

export default HeaderAccount;
