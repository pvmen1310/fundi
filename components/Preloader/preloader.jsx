// Preloader

import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faSync } from '@fortawesome/pro-regular-svg-icons';

const Preloader = props => {
    if (props.error) {
        return (
            <Fragment>
                <div className="d-block mx-auto text-center">
                    <div>
                        <FontAwesomeIcon
                            icon={faExclamationCircle}
                            size="4x"
                            className="fill-error mb-3"
                        />
                    </div>
                    <a onClick={() => window.location.reload()} className="btn btn-default">
                        <FontAwesomeIcon icon={faSync} />
                        <span>&nbsp;</span>
                        <FormattedMessage id="btn.reload" />
                    </a>
                </div>
            </Fragment>
        );
    } else {
        return null;
    }
};

export default Preloader;
