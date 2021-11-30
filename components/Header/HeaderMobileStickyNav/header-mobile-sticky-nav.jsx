import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
//import NavLink from 'react-router-dom/NavLink';
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';



import './header-mobile-sticky-nav.scss';

class HeaderMobileStickyNav extends Component {
    constructor(props) {
        super(props);
        this.header = React.createRef();
        this.state = {
            class : 'mobile-sub-header'
        }
    }

    render() {
        const { gameProvider , locale } = this.props;
        if(!gameProvider)
            return null;
        return <header  className={this.state.class}  ref={this.header}>
            <nav className="header-nav">
                <ul className="header-nav-menu">
                    <li>
                        <Link to={`/${locale}/`}>

                         </Link>
                    </li>
                    {
                        gameProvider.sportsbook.length > 0 &&
                        <li>
                            <NavLink to={`/${locale}/sportsbook/`}>
                               
                            </NavLink>
                        </li>
                    }
                    {
                        gameProvider.liveCasinos.length > 0 &&
                        <li>
                            <NavLink to={`/${locale}/live-casino/`}>
                               
                            </NavLink>
                        </li>
                    }
                    {
                        gameProvider.slots.length > 0 &&
                        <li>
                            <NavLink to={`/${locale}/slots/featured`}>
                                
                            </NavLink>
                        </li>

                    }
                    {
                        gameProvider.lottery.length > 0 &&
                        <li>
                            <NavLink to={`/${locale}/lottery`}>
                               
                            </NavLink>
                        </li>

                    }
                    <li>
                        <NavLink to={`/${locale}/promotions/`}>
                            
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    }

    componentDidMount = ()=>{
        if(!window) return;
        window.addEventListener('scroll', this.handleScroll);
    }


    handleScroll = () => {
        if(window.pageYOffset + 45 > this.header.current.offsetTop) {
            this.setState ({
                class : ' mobile-sub-header sticky'
            })
        } else {
            this.setState ({
                class : 'mobile-sub-header'
            })
        }
    }
}


export default HeaderMobileStickyNav;
