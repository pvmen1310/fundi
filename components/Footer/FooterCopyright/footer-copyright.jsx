// Footer Copyright

import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import './footer-copyright.scss';

const Copyright = () => (
    <small>
        {/*&copy;{`${new Date().getFullYear()} ${window.location.hostname.replace('www.', '')}`}*/}
        &copy;保留版权 2019-LaBa360 (拉霸360)
    </small>
);
const FooterCopyright = () => (
    <div className="row">
        {/* <div className="footer-disclaimer">
            <FormattedHTMLMessage id="footer.content.disclaimer" />
        </div> */}
        <div className="footer-copyright">
            {/*<FormattedHTMLMessage id="footer.content.copyright" />*/}
            <Copyright />
        </div>
    </div>
);

export default FooterCopyright;
