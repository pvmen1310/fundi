// Preloader

import React, { Fragment } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSpinnerThird, faExclamationCircle } from '@fortawesome/pro-regular-svg-icons';

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
                </div>
            </Fragment>
        );
    } else if (props.pastDelay) {
        return (
            <Fragment>
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: '100vh' }}
                >
                    <FontAwesomeIcon
                        icon={faSpinnerThird}
                        size="4x"
                        spin
                        className="fill-primary"
                        style={{ animationDuration: '0.5s' }}
                    />
                </div>
            </Fragment>
        );
    } else {
        return null;
    }
};

export default Preloader;
