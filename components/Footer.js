import React from 'react';
import Link from 'next/link';

import { constants } from '../config/constants';


import './Footer.less';

export default function Footer({lang}) {
    const [year] = React.useState(new Date().getFullYear());
    const [companyName] = React.useState(constants.COMPANY_NAME);

    return (
        <div className="footer-container">
            <div className="footer-container--inner">
                <ul>
                    <li className="footer-container--inner-item"><img src="/m.svg" alt=""/></li>
                    <li className="footer-container--inner-item">© {year} {companyName}</li>
                    <li className="footer-container--inner-item"><Link href="/" as="/"><a>🎉 Happy Birthday Mike 🎉</a></Link></li>
                </ul>
            </div>
        </div>
    )
}
