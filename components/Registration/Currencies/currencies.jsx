// Currencies

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage} from 'react-intl';

const Currencies = props => {
    return (
        <select className="form-control" style={{height: 'calc(1.75rem + 2px)'}} onChange={props.handleSelect}>
            {props.currencies.map((item, key) => {
                const name = props.intl.formatMessage({id: 'reg.' + item.currencyCode});
                return   <option selected={item && item.isDefault} key={key} value={item.currencyCode}>{name}</option>
            })}
        </select>
    );
};

Currencies.propTypes = {
    currencies: PropTypes.array.isRequired,
    handleSelect : PropTypes.func.isRequired,
};

export default injectIntl(Currencies);
