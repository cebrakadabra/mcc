import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import useWindowSize from '../helpers/use-window-size';

import './Header.less';

export default function Header({lang}) {
    const [openMenu, setOpenMenu] = React.useState(Boolean(false));
    const [showLogo, setShowLogo] = React.useState(Boolean(true));
    const mobileMenuWidth = 1000;
    const size = useWindowSize();

    const [currentLang, setCurrentLang] = React.useState('de');
    React.useEffect(() => {
        const { href } = window.location;
        if (href) {
            const splitHref = window.location.href.split('/');
            if (splitHref.length >= 4) {
                setCurrentLang(window.location.href.split('/')[3]);
            } else {
                setCurrentLang('de');
            }
        }
    }, []);

    const languageChanged = (langSelector) => {
        const { origin } = window.location;
        window.location.href = `${origin}/${langSelector.currentTarget.value}`;
    }

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    const onScroll = (e) => {
        const { scrollY } = e.currentTarget;
        if (scrollY > 45) {
            setShowLogo(false);
        } else {
            setShowLogo(true);
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <div className={`header-container ${openMenu ? 'open-menu' : ''}`}>
            <div className="header-container--inner">
                <ul>
                    <li className="header-container--inner-logo">
                        <Link href="/">
                            <a>
                                <img src="/m.svg" alt="" />
                                <img src="/mcc.svg" alt="" style={{marginLeft: "10px", width: "100px"}} />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <img className="mike" src="/mike.jpeg" alt=""/>
        </div>
    )
}
