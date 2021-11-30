// Preloader

import React, { Fragment } from 'react';

const Preloader = props => {
    if (props.error) {
        return (
            <Fragment>
                <div className="d-block mx-auto text-center">
                    <div>

                    </div>
                    <a onClick={() => window.location.reload()} className="btn btn-default">

                    </a>
                </div>
            </Fragment>
        );
    } else {
        return null;
    }
};

export default Preloader;
