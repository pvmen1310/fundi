import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'
import Link from 'next/link';
import classNames from 'classnames'
//import NavLink from 'react-router-dom/NavLink';
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';


import './header-mobile-nav.scss';

export const NavLink = (props) => {

    let className = classNames({
      "nav-link": true,
      "is-active": false
    })
    return <Link href={props.to}><a onClick={ props.onClick} className={className}>{props.label}</a></Link>
  
  }

class HeaderMobileNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenu: false
        };
    }

    menuToggle = () => {
        console.log(12313);
        !this.state.mobileMenu
            ? this.setState({ mobileMenu: true })
            : this.setState({ mobileMenu: false });
    };

    render() {
        return (
            <Fragment>
                {this.state.mobileMenu && (
                    <Head>
                        <style>
                            {`body {
                                position: fixed;
                                width: 100%;
                            }`}
                        </style>
                    </Head>
                )}
                <a onClick={this.menuToggle} className="header-mobile-nav-toggle">
                    <img src="/assets/images/icon0.png" width="20" height="20" />
                    <h3>MỞ RỘNG</h3>
                </a>

                {this.state.mobileMenu && (
                    <a className="header-mobile-nav-hidden" onClick={this.menuToggle} />
                )}
                <nav className={`header-mobile-nav ${this.state.mobileMenu ? 'active' : ''}`}>
                    <div className="row ml-4" >
                        <h1 style={{color :"red"}} onClick={this.menuToggle}>X</h1> <h4 className="ml-2 mt-2" style={{color :"black" , fontSize: "0.7rem"}}>DANH MỤC SẢN PHẨM</h4>
                    </div>

                    <ul className="header-mobile-nav-menu">
                        {this.props.categories.map((item, key) => <li>
                            <NavLink label={item.title} to={`/category/`+item.slug} onClick={ this.menuToggle}>
                            </NavLink>
                        </li>)}
                    </ul>
                </nav>
            </Fragment>
        );
    }
}

export default HeaderMobileNav;
