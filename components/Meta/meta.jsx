import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

const MetaTag = props => (
    <Helmet>
        <title>{props.title}</title>
        <meta content={props.description} name="description" />
        <meta content={props.keywords} name="keywords" />
    </Helmet>

);

MetaTag.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string
};

export default MetaTag;
