import React, { Component, Fragment } from 'react';
import Head from 'next/head'
import CMS from '../../lib/api/cms';
import Carousel from '../../components/Carousel/carousel';
import Channels from '../../components/Channels/channels';
import DownloadApp from '../../components/DownloadApp/downloadApp';
import {isMobile} from 'react-device-detect';
import Configuration from '../../lib/api/configuration';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carousel: [],
            carousel_sliders:[],
            promotions: [],
            launchers: [],
            products: [],
            sellers:[],
            posts:[],
            news: [],
            sliders:[],
            coupons:[],
            ms:0,
            secs: 3600,
            timer:0,
            isShowCountDown: false,
            isShowTicker : false,
            page : 1,
            userId: '',
            apiToken: '',
        };
    }

    getCookie = (cookieName) => {
        console.log(cookieName);
        var match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
        if (match) return match[2];
    }

    componentDidMount() {
        this.setState({
            apiToken : this.getCookie('api_token'),
            userId : this.getCookie('user_id'),
        },() => console.log(this.state))
        this.getBanners();
        this.getSellers();
    }

    componentWillMount() {
        this.interval = setInterval( () => {
            this.setState({ms: 1});
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getBanners() {
        CMS.getBanner().then(response => {
            let sliders = response.data && response.data.data;
            sliders && sliders.map((item, key) => item.slider_type == "carousel" ?
                this.setState ({
                    carousel_sliders : item.slider_items
                }) : "")

            this.setState({
                sliders: response.data && response.data.data
            });
        });
    }

    getSellers() {
        CMS.getSellers().then(response => {
            this.setState({
                sellers: response && response.data
            });
        });
    }

    showMore = (event) => {
        let page = this.state.page;
        this.setState({
            page : page + 1,
        });

          let queryCondition = {
              page : page + 1,
          }
          CMS.getCoupons(queryCondition).then(response => {
            this.setState({
                coupons: this.state.coupons.concat(response.data.data)
            });
          });
    }

    mobileCheck() {
        return isMobile
    }

    render() {
        return (
            <Fragment>
                <Head>
                    <style>
                        {`body {
                            background: url(${this.state.backgroundImage}) top center no-repeat fixed;
                            background-size: cover;
                        }
                        @media (max-width: 575.98px) {
                            #root > main {
                                padding-left: 0rem;
                            }
                        }`}
                    </style>
                </Head>
                <Carousel {...this.props} mobileCheck={this.mobileCheck} userId={this.state.userId} carousel={[...this.state.sliders]} carousel_sliders={this.state.carousel_sliders} />
                <Channels {...this.props} sellers={this.state.sellers}  apiToken={this.state.apiToken} userId={this.state.userId} />
                <DownloadApp />
            </Fragment>
        );
    }
}

export default Home
