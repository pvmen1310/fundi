import React, { Fragment } from 'react';
import Link from 'next/link';

//import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './header-account-mobile.scss';

const HeaderAccountMobile = props => (
    <div className="header-account-mobile d-flex">
        <div className="d-flex align-items-center">
            {(props.isLoggedIn)
                ? (
                    <Fragment>
                        <Link to={`/${props.locale}/player-center/transfer/`}>
                            <span className="wallet-currency" style={{ color: '#fff' }}>{props.currencySymbol}</span>
                            <span className="wallet-balance">
                                {Number(props.totalBalance).toFixed(2)}
                            </span>
                        </Link>
                        <Link to={`/${props.locale}/player-center/deposit/`} className="btn btn-primary mx-2">
                            <FormattedMessage id="button.deposit" />
                        </Link>
                        <a href="#" onClick={() => { props.showLivechatOptionals(true); }} className="p-3">

                        </a>
                        <Link to={`/${props.locale}/player-center/account/profile/`} className="p-3">

                        </Link>
                    </Fragment>
                )
                : (
                    <Fragment>
                        <Link to={`/${props.locale}/registration/`} className="btn btn-primary mr-2">
                            <FormattedMessage id="button.joinnow" />
                        </Link>
                        <Link to={`/${props.locale}/login/`} className="btn btn-secondary mr-2">
                            <FormattedMessage id="button.login" />
                        </Link>
                    </Fragment>
                )
            }
        </div>
    </div>
);

export default HeaderAccountMobile;
