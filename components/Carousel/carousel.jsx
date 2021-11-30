// Carousel

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import './carousel.scss';
import GoogleAds from '../GoogleAds';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            carousel_sliders : []
        };
    }

    render() {
        const config = {
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        let carouselNav = '';
        if(this.props.mobileCheck()) {
              carouselNav = !this.props.full && (
                    <nav className="carousel-nav">
                        <ul className="carousel-nav-menu">
                          {this.props.carousel && this.props.carousel.map((item, key) => item.slider_type != "carousel"  ? (
                              <a href={item.slider_items[0].link_to_url} rel="nofollow" className="item ml-1 mr-1" target={item.slider_items[0].link_target} key={key}>
                                  <img src={item.slider_items[0].image_src}  />
                              </a>
                          ) : "")}
                        </ul>
                    </nav>
                 );
        } else {
            carouselNav = !this.props.full && (
                    <nav className="carousel-nav">
                        <ul className="carousel-nav-menu">
                          {this.props.carousel && this.props.carousel.map((item, key) => item.slider_type != "carousel"  ? (
                              <a href={item.slider_items[0].link_to_url} rel="nofollow"className="item mt-2 mb-2" target={item.slider_items[0].link_target} key={key}>
                                  <img src={item.slider_items[0].image_src}  />
                              </a>
                          ) : "")}
                        </ul>
                    </nav>
                 );
        }


        return (
            <section className="carousel">
                <div className="container">
                    <div className="row">
                        <div className={this.props.full ? 'carousel-box-full' : 'carousel-box'}>
                            <Slider ref={slider => (this.slider = slider)} {...config}>
                            {this.props.carousel && this.props.carousel.map((item, key) => item.slider_type != "carousel"  ? (
                              <a href={item.slider_items[0].link_to_url+this.props.userId} rel="nofollow"className="item mt-2 mb-2" target={item.slider_items[0].link_target} key={key}>
                                  <img src={item.slider_items[0].image_src}  />
                              </a>
                          ) : "")}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    getNewTabUrl = (gameData) =>{
        if(gameData) {
            let url ='';
            if(gameData.launch_by_player_url) {
                url = 'http://'+ gameData.launch_by_player_url;
            } else {
                url = `${gameData.scheme}://${window.location.host}/${this.props.locale}/slots/launcher/${gameData.query}`;
            }
            url = url.replace(/([^:]\/)\/+/g, "$1");
            window.open(url, '', 'width=1250, height=750, left=0,top=0,menu=no, directories=no, titlebar=no, location=no, toolbar=no,scrollbars=yes,resizable=yes')
        }
    };
}


Carousel.propTypes = {
    carousel: PropTypes.array,
    full: PropTypes.bool,
    type : PropTypes.string
};
