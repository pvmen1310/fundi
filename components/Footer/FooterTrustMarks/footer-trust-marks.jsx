// Footer Trust Marks

import React from 'react';
import { FormattedMessage } from 'react-intl';

import QR from 'Assets/icons/icon-qr-lb.svg';

import BTI from 'Assets/icons/icon-bti.svg';
import SABA from 'Assets/icons/icon-saba.svg';

import AG from 'Assets/icons/icon-ag.svg';
import EA from 'Assets/icons/icon-ea.svg';
import EZ from 'Assets/icons/icon-ez.svg';
import N2 from 'Assets/icons/icon-n2.svg';
import EBET from 'Assets/icons/icon-ebet.svg';

import HN from 'Assets/icons/icon-hn.svg';
import PNG from 'Assets/icons/icon-png.svg';
import PS from 'Assets/icons/icon-ps.svg';
import ISB from 'Assets/icons/icon-isb.svg';
import PT from 'Assets/icons/icon-pt.svg';
import MG from 'Assets/icons/icon-mg.svg';
import VT from 'Assets/icons/icon-vt.svg';

import WB from 'Assets/icons/icon-wb-footer.svg';
import PLUS from 'Assets/icons/icon-plus.svg';
import GC from 'Assets/icons/icon-gc.svg';
import DC from 'Assets/icons/icon-dc.svg';

import './footer-trust-marks.scss';

const FooterTrustMarks = props => (
    <div className="row justify-content-center align-items-center">
        <div className="footer-providers">
            <WB />
            <PLUS />
            <GC />
            <DC />
            <BTI />
            <SABA />
            <AG />
            <EA />
            <img src="/assets/images/tc-gaming/TC-Gaming-Logo-White.png" alt=""/>
            <N2 />
            <EBET />
            <MG />
            <VT />
            <HN />
            <PNG />
            <PS />
            <ISB />
            <PT />
            <img src="/assets/images/lottery/gpi-logo-white.png" alt=""/>
        </div>
    </div>
);

export default FooterTrustMarks;
