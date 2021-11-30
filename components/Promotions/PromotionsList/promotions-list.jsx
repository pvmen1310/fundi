import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../../Preloader';
import PromotionBanner from '../PromotionBanner';
import './promotions-list.scss';

export default class PromotionsList extends Component {
    static propTypes = {
        promotions: PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            promotions: []
        });
    }

    componentDidMount() {
        this.setState({
            promotions: this.props.promotions
        });
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps.promotions != this.props.promotions) {
            this.setState({
                promotions: nextProps.promotions
            });

            return true;
        }

        return true;
    }

    render() {
        return (
            <Fragment>
                <div className="promotions-list">
                    <div className="container">
                        <div className="row">
                            {this.state.promotions.map((item, key) => (
                                <div className="col-lg-4">
                                     <PromotionBanner
                                        key={key}
                                        name={item.expired_date}
                                        image={item.item_image}
                                        link={'/' + this.props.locale + '/' + item.link}
                                        title={item.expired_date}
                                        description={item.expired_date}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}