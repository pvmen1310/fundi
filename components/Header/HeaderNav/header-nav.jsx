// Header Navigation

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
// import NavLink from 'react-router-dom/NavLink';
import classNames from 'classnames'
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './header-nav.scss';

export const NavLink = (props) => {

    let className = classNames({
      "nav-link": true,
      "is-active": false
    })
    return <Link href={props.to}><a onClick={ props.onClick} className={className}>{props.label}</a></Link>
  
  }

const HeaderNav = props => {
    return (
        <nav className="header-nav">
            {props.categoryIndex == 0 && <ul className="header-nav-menu">
                {props.categories.map((item, key) => key < 5  ? (<li>
                    <NavLink to={`/category/`+item.slug} label={item.title}>
                   </NavLink>
                    </li>
                   ) : '')}
                    <li style={{borderRight:"none"}}>
                        <img src="/assets/images/icon0.png" width="15" height="15" />
                        <NavLink  to={``}  label={'Mở rộng'} exact  onClick={ () => { props.expandCategory(); } }>
                           
                        </NavLink>
                    </li>
              </ul>}

            {props.categoryIndex >= 1 &&
                 <ul className="header-nav-menu">
                     {props.categories.map((item, key) => key < 5?(<li>
                            <NavLink to={`/category/`+item.slug} label={item.title}>
                            </NavLink>
                            </li>
                           ) : '')}
                      {props.categories.map((item, key) => key == 5 ?(<li style={{borderRight:"none"}}>
                            <NavLink to={`/category/`+item.slug} label={item.title}>
                            </NavLink>
                           </li>
                          ) : '')}
                 </ul>
             }

             {props.categoryIndex == 1 &&
                <ul className="header-nav-menu">
                     {props.categories.map((item, key) => key >= 6 && key <= 10 ?(<li>
                            <NavLink to={`/category/`+item.slug} label={item.title}>
                            </NavLink>
                            </li>
                           ) : '')}
                      <li style={{borderRight:"none"}}>
                            <img src="/assets/images/icon0.png" width="15" height="15" />
                            <NavLink to={``} label={'Mở rộng'} exact onClick= { () => { props.expandCategory(); } } >
                                
                            </NavLink>
                      </li>
                </ul>
            }

             {props.categoryIndex >= 2 &&
                    <ul className="header-nav-menu">
                         {props.categories.map((item, key) => key >= 6 && key <= 10 ?(<li>
                                <NavLink to={`/category/`+item.slug} label={item.title}>
                                </NavLink>
                                </li>
                               ) : '')}

                         {props.categories.map((item, key) => key == 11 ?(<li style={{borderRight:"none"}}>
                         <NavLink to={`/category/`+item.slug} label={item.title}>
                        </NavLink>
                              </li>
                         ) : '')}
                    </ul>
             }

              {props.categoryIndex == 2 &&
                 <ul className="header-nav-menu">
                      {props.categories.map((item, key) => key >= 12 && key <= 16 ?(<li>
                            <NavLink to={`/category/`+item.slug} label={item.title}>
                            </NavLink>
                             </li>
                            ) : '')}
                       <li style={{borderRight:"none"}}>
                             <img src="/assets/images/icon0.png" width="15" height="15" />
                             <NavLink  to={`/`} label={'Mở rộng'} exact onClick= { () => { props.expandCategory(); } } >
                                 
                             </NavLink>
                       </li>
                 </ul>
             }

              {props.categoryIndex == 3 &&
                 <ul className="header-nav-menu">
                      {props.categories.map((item, key) => key >= 12 && key < 17 ?(<li>
                            <NavLink to={`/category/`+item.slug} label={item.title}>
                            </NavLink>
                             </li>
                            ) : '')}

                         {props.categories.map((item, key) => key == 17 ?(<li style={{borderRight:"none"}}>
                            <NavLink to={`/category/`+item.slug} label={item.title}>
                            </NavLink>
                                 </li>
                            ) : '')}
                 </ul>
             }
              {props.categoryIndex == 3 &&
               <ul className="header-nav-menu">
                       {props.categories.map((item, key) => key > 17  ?(<li>
                        <NavLink to={`/category/`+item.slug} label={item.title}>
                        </NavLink>
                          </li>
                         ) : '')}
                        <li style={{borderRight:"none"}}>
                             <img src="/assets/images/icon10.png" width="15" height="15" />
                             <NavLink to={`/`} label={'Thu gọn'} onClick= { () => { props.collapseCategory(); } }>
                                 
                             </NavLink>
                       </li>
                </ul>}
        </nav>
    );
}

export default HeaderNav;