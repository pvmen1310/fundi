// Imports
import React, { Fragment, Component } from 'react';
import { instanceOf } from 'prop-types';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';
import {Helmet} from 'react-helmet';
import MediaQuery from 'react-responsive';
import Loadable from 'react-loadable';
import validator from 'validator';
import { injectIntl } from 'react-intl';
import { withCookies, Cookies } from 'react-cookie';

// Components
import Preloader from 'Components/Preloader/';
import ScrollToTop from 'Components/Utilities/ScrollToTop/';

// API
import Configuration from 'API/configuration';
import Boss from 'API/boss';
import General from 'API/general';
import APIConfig from 'APIConfig';
import Refactor from "../../api/refactor";

// Dynamic Components
const Header = Loadable({
    loading: Preloader,
    loader: () => import('Components/Header/')
});

const Footer = Loadable({
    loading: Preloader,
    loader: () => import('Components/Footer/')
});

const Sidebar = Loadable({
    loading: Preloader,
    loader: () => import('Components/Sidebar/')
});

const Iovation = Loadable({
    loading: Preloader,
    loader: () => import('Components/Iovation')
});

// const FrankLampard = Loadable({
//     loading: Preloader,
//     loader: () => import('Containers/Pages/FrankLampard')
// });

const Home = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Home/')
});

const Search = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Search/')
});

const LiveCasino = Loadable({
    loading: Preloader,
    loader: () => import('Containers/LiveCasino/')
});

const Slots = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Slots/')
});

const Promotions = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Promotions/')
});

const SpecialPromos = Loadable({
    loading: Preloader,
    loader: () => import('Containers/SpecialPromos/')
});

const Registration = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Registration/')
});

const Login = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Login/')
});

const Welcome = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Welcome/')
});

const PlayerCenter = Loadable({
    loading: Preloader,
    loader: () => import('Containers/PlayerCenter/')
});

const Downloads = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Downloads/')
});

const DefaultPage = Loadable({
    loading: Preloader,
    loader: () => import('Containers/DefaultPage/')
});

const Sitemap = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Sitemap/')
});

const Launcher = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Launcher')
});

const Launching = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Launching')
});

const NotificationMessage = Loadable({
    loading: Preloader,
    loader: () => import('Components/Notifications/NotificationMessage/')
});

const LivechatMessage = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Livechat/LivechatMessage/')
});

const Saba = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Saba/')
});

const Sportbook = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Sportbook/')
});

const ForgotPassword = Loadable({
    loading: Preloader,
    loader: () => import('Containers/ForgotPassword/')
});
const PlayerLandingPage = Loadable({
    loading: Preloader,
    loader: () => import('Containers/PlayerLandingPage/')
});
const StatusPage = Loadable({
    loading: Preloader,
    loader: () => import('Components/StatusPage/')
});

const MetaTag = Loadable({
    loading: Preloader,
    loader: () => import('Components/Meta/')
});

const WorldCup = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Pages/WorldCup/')
});

const SlotPrizePool = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Pages/SlotPrizePool/')
});

const AccountRecovery = Loadable({
    loading: Preloader,
    loader: () => import('Containers/AccountRecovery')
});

const Lottery = Loadable({
    loading: Preloader,
    loader: () => import('Containers/Lottery')
});

const RouteWithSubRoutes = route => {
    console.log(route.path);
    return <Route
        path={route.path}
        render={props => {
            return <route.component {...props} {...route} />;
        }}
    />
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetchingBalance: false,
            notification: {
                show: false,
                status: 'loading', // successs || error || loading
                title: 'Notification',
                message: 'Loading Please Wait',
                buttons: [
                    {
                        cta: 'Close',
                        onclick: () =>
                            this.setState({
                                ...this.state,
                                notification: {
                                    ...this.state.notification,
                                    show: false
                                }
                            })
                    }
                ]
            },
            livechatOptional: {
                show: false,
                status: 'loading', // successs || error || loading
                title: 'Live Chat',
                message: 'Loading Please Wait',
                buttons: [
                    {
                        cta: 'Close',
                        sClassName: 'btn-default',
                        onclick: () =>
                            this.setState({
                                ...this.state,
                                livechatOptional: {
                                    ...this.state.livechatOptional,
                                    show: false
                                }
                            })
                    }
                ]
            },
            shouldUpdateLocale: true,
            localizedLinks : [],
            userName: '',
            passWord: '',
            token: '',
            gameTypes: [],
            turtleLink : '',
            kirinLink : '',
            availableGameProviders: {
                liveCasinos: [],
                slots: [],
                sportsbook: [],
                saba: [],
                lottery: []
            },
            availableGameProviderId: {
                liveCasinos: [],
                slots: [],
                sportsbook: [],
                saba: [],
                lottery: []
            },
            metaTags : null,
            gameProviders: {},
            languages: [],
            isLoggedIn: false,
            cashier: {},
            launchers: [],
            popupStacks : [],
            unreadMessages: 0,
            metaTitle : '',
            pageTitle : '',
            metaDescription : '',
            currentMetaSlug: 'home',
            fgBlockedProvider: [],
            captcha: '',
            displayCaptcha : false,
            isNotificationRunning : false,
            checkingUnreadMessageFromCookie : false,
            searchKeyWord : '',

        };
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.refreshBalance = this.refreshBalance.bind(this);
        this.transfer = this.transfer.bind(this);
        this.showNotification = this.showNotification.bind(this);
        this.showConfirmNotification = this.showConfirmNotification.bind(this);
        this.requireAuthenticate = this.requireAuthenticate.bind(this);
        this.getCashier = this.getCashier.bind(this);
        this.updateCashier = this.updateCashier.bind(this);
        this.updatePlayerDetail = this.updatePlayerDetail.bind(this);
        this.clearUsernameAndPassword = this.clearUsernameAndPassword.bind(this);
        this.addPopupStack = this.addPopupStack.bind(this);
        this.updateCurrentPageMetaTag = this.updateCurrentPageMetaTag.bind(this);
        this.mobileCheck = this.mobileCheck.bind(this);
        this.cookieManagement = this.cookieManagement.bind(this);
        this.applyPromotion = this.applyPromotion.bind(this);
        this.onLocaleChange = this.onLocaleChange.bind(this);
        this.onUpdateTotalUnreadMessage = this.onUpdateTotalUnreadMessage.bind(this);
        this.result = this.result.bind(this);
        this.getParameterByName = this.getParameterByName.bind(this);
        this.showLivechatOptionals = this.showLivechatOptionals.bind(this);
        this.onSearchProduct = this.onSearchProduct.bind(this);
    }

    render() {
       return <ScrollToTop>
                <Fragment>
                    <Helmet>
                        <html lang={this.props.locale}/>
                    </Helmet>
                    <MetaTag
                        title={this.state.metaTitle}
                        description={this.state.metaDescription}
                        keywords={this.state.keywordsString}
                    />
                    <Header
                        languages={this.props.languages}
                        onLocaleChange={this.onLocaleChange}
                        locale={this.props.locale}
                        greeting={this.getGreeting()}
                        onSubmitLogin={this.onSubmitLogin}
                        onKeyPressEnterSearch={this.onKeyPressEnterSearch}
                        onSearchProduct={this.onSearchProduct}
                        onChangeUserName={this.onChangeUserName}
                        onChangePassword={this.onChangePassword}
                        isLoggedIn={this.state.isLoggedIn}
                        totalBalance={this.state.cashier.total_balance}
                        mainWallet={this.state.cashier.main_wallet}
                        subWallet={this.state.cashier.sub_wallet}
                        userName={this.state.userName}
                        unreadMessages={this.state.unreadMessages}
                        currencySymbol={this.state.cashier.currency_symbol}
                        availableGameProviders={this.state.availableGameProviders}
                        availableGameProviderId={this.state.availableGameProviderId}
                        fgBlockedProvider={this.state.fgBlockedProvider}
                        token={this.state.token}
                        turtleLink={this.state.turtleLink}
                        kirinLink={this.state.kirinLink}
                        captcha={this.state.captcha}
                        playerDetail={this.state.playerDetail}
                        result={this.result}
                        showNotification={this.showNotification}
                        showLivechatOptionals = {this.showLivechatOptionals}
                        refreshBalance={this.refreshBalance}
                        isFetchingBalance={this.state.isFetchingBalance}
                        {...this.state}
                    />
                    <main className="main">
                        <Switch>
                            {this.getRouteConfig().map((route, index) => (
                                <RouteWithSubRoutes
                                    key={index}
                                    {...route}
                                    locale={this.props.locale}
                                    transfer={this.transfer}
                                    launchers={this.state.launchers}
                                    availableGameProviders={
                                        this.state.availableGameProviders
                                    }
                                    availableSlotProviderId={
                                        this.state.availableSlotProviderId
                                    }
                                    fgBlockedProvider={
                                        this.state.fgBlockedProvider
                                    }
                                    gameProviders={
                                        this.state.gameProviders
                                    }
                                    gameTypes={this.state.gameTypes}
                                    applyPromotion={this.applyPromotion}
                                    result={this.result}
                                    unreadMessages={this.state.unreadMessages}
                                    cashier={this.state.cashier}
                                    refreshBalance={this.refreshBalance}
                                    greeting={this.getGreeting()}
                                    showNotification={this.showNotification}
                                    showConfirmNotification={this.showConfirmNotification}
                                    showDepositConfirmNotification={this.showDepositConfirmNotification}
                                    onChangeUserName={this.onChangeUserName}
                                    onChangePassword={this.onChangePassword}
                                    onSubmitLogin={this.onSubmitLogin}
                                    requireAuthenticate={this.requireAuthenticate}
                                    mobileCheck={this.mobileCheck}
                                    addPopupStack={this.addPopupStack}
                                    getCashier={this.getCashier}
                                    updateCashier={this.updateCashier}
                                    updatePlayerDetail={this.updatePlayerDetail}
                                    onUpdateTotalUnreadMessage={this.onUpdateTotalUnreadMessage}
                                    playerDetail={this.state.playerDetail}
                                    token={this.state.token}
                                    isFetchingBalance={this.state.isFetchingBalance}
                                    updateCurrentPageMetaTag={this.updateCurrentPageMetaTag}
                                    clearUsernameAndPassword={this.clearUsernameAndPassword}
                                    turtleLink={this.state.turtleLink}
                                    kirinLink={this.state.kirinLink}
                                    metaTags={this.state.metaTags}
                                    captcha={this.state.captcha}
                                    showLivechatOptionals = {this.showLivechatOptionals}
                                    cookieManagement={this.cookieManagement}
                                    onLocaleChange={this.onLocaleChange}
                                    displayCaptcha={this.state.displayCaptcha}
                                    getParameterByName={this.getParameterByName}
                                    languages={this.props.languages}
                                    currencySymbol={this.state.cashier.currency_symbol}
                                />
                            ))}
                        </Switch>
                    </main>
                    <Footer locale={this.props.locale} token={this.state.token}/>
                </Fragment>
            </ScrollToTop>

    }


    getLiveChat(lang) {
        switch (lang) {
            case 'en':
                return 5;
            case 'zh-cn':
                return 2;
            case 'id':
                return 3;
            case 'th':
                return 4;
            case 'my':
            default:
                return 12;
        }
    }
    showLivechatOptionals(status, issueName = ''){

        this.setState({
            livechatOptional:{
                show: status,
                issueName: issueName,
                status: this.localizedText('popup.loading'), // successs || error || loading
                title: this.localizedText('sidebar.livechat'),
                message: 'Loading Please Wait',
                buttons: [
                    {
                        cta: this.localizedText('popup.close'),
                        sClassName: 'btn-default',
                        onclick: () =>
                            this.setState({
                                ...this.state,
                                livechatOptional: {
                                    ...this.state.livechatOptional,
                                    show: false
                                }
                            })
                    }
                ]
            }
        })
    }

    getRouteConfig() {
        let localePath = '';
        return [
            {
                path: localePath + '/seamless/launching/:query',
                component: Launching,
                navigatePath: '/login',
                isProtected: true
            },
            {
                path: localePath + '/lottery/launcher/:query',
                component: Launcher,
                navigatePath: '/login',
                isProtected: true
            },
            {
                path: localePath + '/lottery/',
                component: Lottery
            },
            {
                path: localePath + '/sportsbook/',
                component: Sportbook
            },
            {
                path: localePath + '/saba-sportsbook/',
                component: Saba,
                isMobileProtected: true,
                exact: true
            },
            {
                path: localePath + '/saba-sportsbook/:query',
                component: Saba,
                isMobileProtected: true,
                navigatePath: '/login'
            },
            {
                path: localePath + '/live-casino/launcher/:query',
                component: Launcher,
                navigatePath: '/login',
                isProtected: true
            },
            {
                path: localePath + '/live-casino/',
                component: LiveCasino
            },
            {
                path: localePath + '/slots/launcher/play-now/:query',
                component: Launcher,
                isProtected: true,
                navigatePath: '/login',

            },
            {
                path: localePath + '/slots/launcher/:query',
                component: Launcher,
                navigatePath: '/login',
            },
            {
                path: localePath + '/slots/:slug?',
                component: Slots
            },
            {
                path: localePath + '/promotions/slots-prize-pool/',
                component: SlotPrizePool
            },
            {
                path: localePath + '/promotions/world-cup/',
                component: WorldCup
            },
            {
                path: localePath + '/promotions/',
                component: Promotions
            },
            {
                path: localePath + '/lp/:slug',
                component: SpecialPromos
            },
            {
                path: localePath + '/registration/',
                component: Registration
            },
            {
                path: localePath + '/login/:option?',
                component: Login
            },
            {
                path: localePath + '/welcome/',
                component: Welcome,
                isProtected: true,
                navigatePath: '/login'
            },
            {
                path: localePath + '/player-center/',
                component: PlayerCenter,
                isProtected: true
            },
            {
                path: localePath + '/forgot-password/',
                component: ForgotPassword
            },
            {
                path: localePath + '/user-landing-page',
                component: PlayerLandingPage
            },
            {
                path: localePath + '/downloads/',
                component: Downloads
            },
            {
                path: localePath + '/about/',
                component: DefaultPage
            },
            {
                path: localePath + '/faq/',
                component: DefaultPage
            },
            {
                path: localePath + '/terms-and-conditions/',
                component: DefaultPage
            },
            {
                path: localePath + '/sports-betting-rules/',
                component: DefaultPage
            },
            {
                path: localePath + '/privacy/',
                component: DefaultPage
            },
            {
                path: localePath + '/responsible-gaming/',
                component: DefaultPage
            },
            {
                path: localePath + '/disclaimer/',
                component: DefaultPage
            },
            {
                path: localePath + '/sitemap/',
                component: Sitemap
            },
            {
                path: localePath + '/contact/',
                component: DefaultPage
            },
            {
                path: localePath + '/invalid-token/',
                component: Login
            },
            {
                path: localePath + '/account-recovery/:playerId/:code',
                component: AccountRecovery
            },
            // {
            //     path: localePath + '/frank-lampard/',
            //     component: FrankLampard
            // },
            {
                path: localePath + '/world-cup/',
                component: WorldCup
            },
            {
                path: localePath + '/404/',
                component: StatusPage
            },
            {
                path: localePath + '/',
                component: Home
            },
            {
                path: localePath + '/search/:slug',
                component: Search
            },
            {
                path: localePath + '/:query',
                component: StatusPage
            }
        ];
    }

    mobileCheck() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    UNSAFE_componentWillMount() {
        let token = this.cookieManagement('token','get');
        this.setState({
            token : token
        },()=>{
            this.updateLayoutBaseOnLocale(this.props.getLocaleFromStorage());
        });

        if (token) {
            Configuration.setHeader('Player-token', token);
        }
    }

    showNotification(show, type = 'loading', message = 'Loading',clickCallback,cta_text = 'Close',force = true,htmlMessage) {
        if(message == "Loading") {
            message = this.localizedText('popup.loading');
        }
        if(cta_text == "Close") {
            cta_text = this.localizedText('popup.close');
        }
        if(this.state.notification.show == true && show == true && force == false) {
            this.addPopupStack(show, type, message ,clickCallback);
            return;
        }
        if (show) {
            this.setState({
                notification: {
                    show: true,
                    status: type,
                    message: message,
                    htmlMessage:htmlMessage,
                    buttons: [
                        {
                            cta: cta_text,
                            onclick: () => {
                                this.setState({
                                    ...this.state,
                                    notification: { ...this.state.notification, show: false }
                                })

                                if(clickCallback != undefined)
                                    clickCallback();
                            }

                        }
                    ]
                }
            });
        } else {
            this.setState({
                notification: {
                    show: false
                }
            },()=>{
                let popupStacks = this.state.popupStacks;

                if(popupStacks && popupStacks.length > 0){
                    let nextPopup = popupStacks[0];
                    this.state.popupStacks.shift();
                    this.showNotification(nextPopup.show,nextPopup.type,nextPopup.message,nextPopup.clickCallback,nextPopup.ctaText);
                }
            });
        }
    }

    addPopupStack(show, type = 'loading', message = 'Loading',clickCallback,ctaText = 'Close'){
        let popupStacks = this.state.popupStacks;
        popupStacks.push({
            show : show,
            type : type,
            message : message,
            clickCallback : clickCallback,
            ctaText  : ctaText
        });
        this.setState({
            popupStacks : popupStacks
        })
    }

    showConfirmNotification(show, type = 'success', message = 'Loading',clickCallback) {
        if (show) {
            if(message == "Loading") {
                message = this.localizedText('popup.loading');
            }
            this.setState({
                notification: {
                    show: true,
                    status: type,
                    message: message,
                    buttons: [
                        {
                            cta: this.localizedText('popup.yes'),
                            onclick: () => {
                                this.setState({
                                    ...this.state,
                                    notification: { ...this.state.notification, show: false }
                                })

                                if(clickCallback != undefined)
                                    clickCallback();
                            }

                        },
                        {
                            cta: this.localizedText('popup.no'),
                            onclick: () => {
                                this.setState({
                                    ...this.state,
                                    notification: { ...this.state.notification, show: false }
                                });
                            }

                        }
                    ]
                }
            });
        } else {
            this.setState({
                notification: {
                    show: false
                }
            });
        }
    }

    showDepositConfirmNotification = (show, type = 'confirm', message = 'Loading' ,htmlMessage,btnList) => {

        const { history , locale } = this.props ;
        if (show) {
            if(message == "Loading") {
                message = this.localizedText('popup.loading');
            }
            this.setState({
                notification: {
                    show: true,
                    status: type,
                    message: message,
                    htmlMessage :htmlMessage,
                    buttons: [
                        {
                            cta: btnList[0].cta,
                            onclick: () => {
                                this.setState({
                                    ...this.state,
                                    notification: { ...this.state.notification, show: false }
                                } , () => {
                                    btnList[0].action()
                                })
                            }

                        },
                        {
                            cta: btnList[1].cta,
                            onclick: () => {
                                this.setState({
                                    ...this.state,
                                    notification: { ...this.state.notification, show: false }
                                } , () => {
                                    btnList[1].action()
                                });

                            }

                        }
                    ]
                }
            });
        } else {
            this.setState({
                notification: {
                    show: false
                }
            });
        }
    }

    updateMetaTag(metaTags){
        if(metaTags){
            let defaultMetaTag = metaTags['home'];
            this.setState({
                metaTags : metaTags,
            });
        }
    }

    updateCurrentPageMetaTag(metaTagKey){
        if(this.state.metaTags){
            let currentMetaTag = this.state.metaTags[metaTagKey];
            if(currentMetaTag){
                this.setState({
                    metaTitle : currentMetaTag.meta_title,
                    metaDescription : currentMetaTag.meta_description,
                    keywordsString : currentMetaTag.keywords_string
                });
            }
        }
    }

    updateCashier(newCashier) {
        this.setState({
            cashier: newCashier
        });
    }

    getCashier(showPopup = true) {
        if (this.state.token) {
            if (showPopup) {
                this.showNotification(true);
            }

            Boss.getPlayerCashier()
                .then(response => {
                    if (response.status == 1) {
                        this.setState({
                            isLoggedIn: true,
                        });

                        localStorage.setItem('username', response.data.user_name);
                        this.setState({
                            cashier: response.data,
                            userName: response.data.user_name,
                            playerDetail: response.data.player_detail,
                            fgBlockedProvider : response.data.fg_blocked_provider
                        });
                        this.checkNotificationInterval();

                    } else {
                        this.cookieManagement('token','remove',null,true);
                        this.cookieManagement('pt','remove',null,true,String(window.location.hostname).replace("www.",""));
                        localStorage.removeItem('username');
                    }
                    if (showPopup) {
                        this.showNotification(false);
                    }
                })
                .catch(e => {
                    if (showPopup) {
                        this.showNotification(false);
                    }
                });
        }
    }

    refreshBalance() {
        if(this.state.isFetchingBalance == true) {
            return;
        }

        this.setState({
            isFetchingBalance: true
        },()=>{
            Boss.refreshBalance().then(response => {
                this.setState( {
                    isFetchingBalance: false
                });
                if (response.status == 1) {
                    this.updateCashier(response.data);
                }else{
                    var message = response.errors.message.common;
                    this.showNotification(true, 'error', message);
                }
            });
        });
    }

    updateAvailableGameProviders(cmsConfig, gameList) {
        let liveCasinoProviders = cmsConfig
            ? cmsConfig.game_provider.live_casino
            : this.state.gameProviders.liveCasinos;
        let slotProviders = cmsConfig
            ? cmsConfig.game_provider.slot
            : this.state.gameProviders.slots;
        let sportsbookProviders = cmsConfig
            ? cmsConfig.game_provider.sportsbook
            : this.state.gameProviders.sportsbook;
        let sabaProviders = cmsConfig
            ? cmsConfig.game_provider.saba
            : this.state.gameProviders.saba;
        let lotteryProviders = cmsConfig
            ? cmsConfig.game_provider.lottery
            : this.state.gameProviders.lottery;

        let availableLiveCasinoProviders = [],
            availableSlotProviders = [],
            availableSlotProviderId = [],
            availableSabaProviders = [],
            availableSportsbookProviders = [],
            availableLotteryProviders = [];

        if (gameList.sportsbook) {
            sportsbookProviders.map(item => {
                if (gameList.sportsbook.join().split(',').indexOf(item.system_code.toString()) >= 0) {
                    availableSportsbookProviders.push(item);
                }
            });
        }

        if (gameList.live_casino) {
            liveCasinoProviders.map(item => {
                if (gameList.live_casino.join().split(',').indexOf(item.system_code.toString()) >= 0) {
                    availableLiveCasinoProviders.push(item);
                    if(item.is_open_new_tab && ((this.state.turtleLink.trim().length == 0 || item.system_code == '103') || this.state.turtleLink.endsWith('login') )) {
                        if(this.state.token) {
                            Refactor.launchingGame(item.query).then((response) => {
                                if (response.data.success) {
                                    let url  = "javascript: window.open('"+ response.data.url  +"', '', 'width=1250, height=750, left=0,top=0,menu=no, directories=no, titlebar=no, location=no, toolbar=no,scrollbars=yes,resizable=yes')";
                                    this.setState({turtleLink : url });
                                }
                            });
                        } else {
                            this.state.turtleLink = "/" + this.props.locale + "/login" ;
                        }
                    }

                    if(item.system_code == '53' && (this.state.kirinLink.trim().length == 0 || this.state.kirinLink.endsWith('login'))) {
                        if(this.state.token) {
                            // Boss.getGame(item.query).then((response) => {
                            //     if (response.data.status == 1) {
                            //         let url  = "javascript: window.open('"+ response.data.data.game_url  +"', '', 'width=1250, height=750, left=0,top=0,menu=no, directories=no, titlebar=no, location=no, toolbar=no,scrollbars=yes,resizable=yes')";
                            //         this.setState({kirinLink : url });
                            //     }
                            // });
                            Refactor.launchingGame(item.query).then((response) => {
                                if (response.data.success) {
                                    let url  = "javascript: window.open('"+ response.data.url  +"', '', 'width=1250, height=750, left=0,top=0,menu=no, directories=no, titlebar=no, location=no, toolbar=no,scrollbars=yes,resizable=yes')";
                                    this.setState({kirinLink : url });
                                }
                            });

                            } else {
                            this.state.kirinLink = "/" + this.props.locale + "/login" ;
                        }

                    }
                }
            });
        }

        if (gameList.slot) {
            slotProviders.map(item => {
                if (gameList.slot.join().split(',').indexOf(item.system_code.toString()) >= 0) {
                    availableSlotProviders.push(item);
                    availableSlotProviderId.push(item.game_provider_id);
                }
            });
        }

        if (gameList.saba) {
            sabaProviders.map(item => {
                if (gameList.saba.join().split(',').indexOf(item.system_code.toString()) >= 0) {
                    availableSabaProviders.push(item);
                }
            });
        }

        if(gameList.lottery) {
            lotteryProviders.map(item => {
                if(gameList.lottery.join().split(',').indexOf(item.system_code.toString()) >= 0) {
                    availableLotteryProviders.push(item);
                }
            })
        }

        this.setState({
            gameProviders: {
                liveCasinos: liveCasinoProviders,
                slots: slotProviders,
                sportsbook: sportsbookProviders,
                saba: sabaProviders,
                lottery: lotteryProviders,
            },
            availableGameProviders: {
                liveCasinos: availableLiveCasinoProviders,
                slots: availableSlotProviders,
                sportsbook: availableSportsbookProviders,
                saba: availableSabaProviders,
                lottery: availableLotteryProviders,
            },

            availableGameProviderId: {
                liveCasinos: gameList.live_casino,
                slots: gameList.slot,
                sportsbook: gameList.sportsbook,
                saba: gameList.saba,
                lottery: gameList.lottery
            },

            gameTypes: cmsConfig.game_type,
            launchers: cmsConfig.homepage_launcher
        });
    }

    onLocaleChange(locale){
        this.getLocalizedLinks(locale);
        this.props.getClientTranslation(locale);
        this.updateLayoutBaseOnLocale(locale);
        this.getNotifications();
    }

    updateLayoutBaseOnLocale(locale){

        //Temporary Solution
        this.getCashier();

        General.getGameProvider().then(res => {
            this.updateMetaTag(res.cmsConfig.metaTags);
            this.updateAvailableGameProviders(res.cmsConfig.data, res.gameList.data);
        });
    }


    localizedText(id) {
        return this.props.intl.formatMessage({id: id});
    }

    onSearchProduct(event,searchText){

        if(searchText == '') {
            return true;
        }else {
            console.log(searchText);
        }

    }
    onChangeUserName(event) {
        this.setState({ userName: event.target.value });
    }

    onChangePassword(event) {
        this.setState({ passWord: event.target.value });
    }

    clearUsernameAndPassword(){
        this.setState({
            userName: '',
            passWord : ''
        });
    }

    onUpdateTotalUnreadMessage(total){
        total = parseInt(total);
        if(isNaN(total))
            return;
        const unreadMessageName = `unreadMessages_${this.props.locale}`;
        if(total != this.state.unreadMessages){
            this.setState({
                'unreadMessages' : total
            });
        }
        if(total != this.cookieManagement(unreadMessageName,'get')){
            this.cookieManagement(unreadMessageName,'store',total);
        }

    }

    checkNotificationInterval(){
        if(this.state.isNotificationRunning)
            return;
        this.setState({
            isNotificationRunning : true
        },()=>{
            const intervalCheckNotification = APIConfig.NOTIFICATION_INTERVAL_CHECKING;
            if(APIConfig.NOTIFICATION_CHECKING == true && intervalCheckNotification > 0) {
                this.getNotifications();

                setInterval(()=> {
                    const notificationCookieName = `nextNotificationCheckingTime_${this.props.locale}`;
                    if (isNaN(this.cookieManagement(notificationCookieName, 'get'))) {
                        this.cookieManagement(notificationCookieName, 'store', Date.now());
                    }
                    const currentTime = Date.now();
                    const nextNotificationCheckingTime = this.cookieManagement(notificationCookieName, 'get');

                    if (currentTime >= nextNotificationCheckingTime) {
                        this.cookieManagement(notificationCookieName, 'update', currentTime + intervalCheckNotification - 1000);
                        this.getNotifications();
                        if (APIConfig.NOTIFICATION_DEBUG) {
                            console.log(`ping ${this.props.locale} => ${this.convertMS(currentTime)} and ${this.convertMS(nextNotificationCheckingTime)} - next ${this.convertMS(this.cookieManagement(notificationCookieName, 'get'))}`);
                        }

                    } else {
                        this.checkUnreadMessageFromCookie();
                        if (APIConfig.NOTIFICATION_DEBUG) {
                            console.log(`ping ${this.props.locale} already => ${this.convertMS(currentTime)} and ${this.convertMS(nextNotificationCheckingTime)} - next call ${this.convertMS(this.cookieManagement(notificationCookieName, 'get'))}`)
                        }
                    }

                }, intervalCheckNotification);
            }
        });

    }

    checkUnreadMessageFromCookie(){
        const  unreadMessagesCookeName = `unreadMessages_${this.props.locale}`;
        const unreadMessages = this.cookieManagement(unreadMessagesCookeName,'get');
        this.onUpdateTotalUnreadMessage(unreadMessages);
    }

    getNotifications(){
        Boss.checkNewMessageAvailable().then((response)=>{
            if(response.status == 1) {
                this.onUpdateTotalUnreadMessage(response.data);
                const intervalCheckCookieNotification = APIConfig.COOKIE_NOTIFICATION_INTERVAL_CHECKING;
                if(this.state.checkingUnreadMessageFromCookie){
                    return;
                }
                this.setState({
                    checkingUnreadMessageFromCookie : true
                },()=>{
                    setInterval(()=>{
                        this.checkUnreadMessageFromCookie();
                    },intervalCheckCookieNotification);
                })

            }
        });
    }

     convertMS(ms) {
        var d = new Date(parseInt(ms));
        return   d.toLocaleString()+ " - " + ms ;
     };

    transfer(data) {
        this.showNotification(true, 'loading', this.localizedText('transfer.transfer_processing'));
        const movingGames = [39, 58 ,2, 49];
        if (movingGames.includes(parseInt(data.transferFrom)) || movingGames.includes(parseInt(data.transferTo))) {
            return Refactor.transfer({
                transfer_amount: data.transferAmount,
                transfer_from: data.transferFrom,
                transfer_to: data.transferTo
            }).then(response => {
                if (response.data.status == 1) {
                    this.setState({
                        cashier: response.data.data
                    });
                    this.showNotification(true, 'success', response.data.message);
                    return true;
                } else {
                    this.showNotification(true, 'error', response.data.errors.message.common);
                }
    
                return false;
            });
        } else {
            return Boss.transfer({
                transfer_amount: data.transferAmount,
                transfer_from: data.transferFrom,
                transfer_to: data.transferTo
            }).then(response => {
                if (response.status == 1) {
                    this.setState({
                        cashier: response.data
                    });
                    this.showNotification(true, 'success', response.message);
                    return true;
                } else {
                    this.showNotification(true, 'error', response.errors.message.common);
                }
    
                return false;
            });
        }
    }

    cookieManagement(cookieName,action,value,updateState = false,domain = '') {
        const { cookies } = this.props;
        switch (action) {
            case 'store' :
            case 'update' :
                cookies.set(cookieName, value, {
                    path: '/',
                    domain : domain,
                });
                break;
            case 'get' :
                return cookies.get(cookieName);
            case 'remove':
                 cookies.remove(cookieName,{
                     path: '/',
                     domain : domain
                 });
                break;
            default:
                break;
        }
        updateState && this.state[cookieName] != value && this.setState({
            [cookieName] : value
        });
        return value;
    }


    getLocalizedLinks(locale){
        let currentLocation = window.location.pathname;
        let newLocation = currentLocation.replace(this.props.locale,locale);
        this.props.history.replace(newLocation)
    }

    updatePlayerDetail(playerDetail) {
        this.setState({
            playerDetail : playerDetail
        })
    }

    applyPromotion(promoCode, type) {
        Boss.applyPromotion(promoCode, type).then(response => {
            if (response.status == 1) {
                if (response.data.type == 2) {
                    this.showConfirmNotification(
                        true,
                        'success',
                        this.localizedText('msg.do_you_want_to_go_deposit_page'),
                        () => {
                            window.location.href = "/"+ this.state.locale + "/player-center/deposit/";
                        }
                    );
                } else {
                    this.cookieManagement('promo_code','remove');
                    this.cookieManagement('promo_type','remove');
                    this.cookieManagement('isGo','remove');
                    this.showNotification(
                        true,
                        'success',
                        response.message ? response.message : ' Your bonus has been successfully credited'
                    );
                }
            } else {
                if (response.errors && response.errors.code == 1031) {
                    window.location.href = "/"+ this.props.locale + "/login";
                } else {
                    this.cookieManagement('promo_code','remove');
                    this.cookieManagement('promo_type','remove');
                    this.cookieManagement('isGo','remove');
                    this.showNotification(
                        true,
                        'error',
                        response.errors.message.common
                            ? response.errors.message.common
                            : response.errors.message
                    );
                }
            }
        });
    }

    result(captcha) {
        this.setState({
            captcha: captcha
        })
    }

    addIovationLibrary() {
        var script = document.createElement("script");

        script.src = "https://ci-mpsnare.iovation.com/snare.js";
        script.async = true;
        document.body.appendChild(script);

        var script2 = document.createElement("script");
        script2.src = `https://player.${String(window.location.host).replace(/^www\./,'')}/resources/iovation/static_wdp.js`;
        script2.async = true;
        document.body.appendChild(script2);

        var script3 = document.createElement("script");
        script3.src = `https://player.${String(window.location.host).replace(/^www\./,'')}/iojs/latest/dyn_wdp.js`;
        script3.async = true;
        document.body.appendChild(script3);

        var script4 = document.createElement("script");
        script4.src = `https://s13.cnzz.com/z_stat.php?id=1273978089&web_id=1273978089`;
        script4.async = true;
        document.body.appendChild(script4);

    }

    saveEcCode() {
        let ecCode = this.getParameterByName("ec",window.location.search);

        if(ecCode != undefined)
            this.cookieManagement('ec_code','store',ecCode,true);
    }

    getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    applyPromotionInterval() {
        setInterval(()=> {
            let isGo = this.cookieManagement('isGo','get');
            if (isGo && isGo != undefined) {
                let promo_code = this.cookieManagement('promo_code','get');
                let promo_type = this.cookieManagement('promo_type','get');
                if(promo_code != undefined) {
                    this.applyPromotion(promo_code,promo_type);
                }
            }
        }, 5000);
    }
}
App.propTypes = {
    cookies: instanceOf(Cookies).isRequired
};
export default injectIntl(withCookies(App))