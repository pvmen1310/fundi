import React from 'react';
import PropTypes from 'prop-types';

import LauncherLink from 'Components/Launcher/LauncherLink/';

const LauncherFeatured = props => {
    return (
        <section className="launcher-featured">
            <div className="container">
                <div className="row">
                    {
                        props.launchers ? props.launchers.map((item, key) => (
                        <LauncherLink
                            key={key}
                            name={item.title}
                            image={item.image}
                            description={item.description}
                            link={"/" +  props.locale + "/" + item.url}
                        />
                    )) : null}
                </div>
            </div>
        </section>
    );
};

LauncherFeatured.propTypes = {
    launchers: PropTypes.array.isRequired
};

export default LauncherFeatured;
