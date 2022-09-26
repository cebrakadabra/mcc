import React from 'react';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();
import nookies from 'nookies'

import Header from '../components/Header';
import Footer from '../components/Footer';

require('./index.less');

export default function Index() {
    const [cType, setCType] = React.useState('toppings');


    return (
        <div>
            <Header />
            <br/>
            <br/>
            <br/>
            <img src="/bg-top.png" alt="" style={{width: '100%'}}/>
            <h1 className="h1-top">Stop Scrolling. <br/>Start doing.</h1>
            <p className="teaser-text">2 of the locals favorite Pizza and Bread Bakers. Leaders and icons are here to teach you what they know.</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="featured">
                <img src="/gf-flour.png" alt=""/>
                <div>
                    <p><span>-</span> <br/>teaches Different Types of Pizza Flour</p>
                    <button><img src="/play.svg" alt=""/> Watch Trailer</button>
                </div>
            </div>
            <h1 className="sub-heading">New classes added every month.</h1>
            <br/>
            <h3 className="col-heading"><span>Pizza</span></h3>
            <ul className="featured-collections">
                <li className={cType === 'dough' ? "active" : ""}><p onClick={() => setCType('dough')}><span>Dough</span></p></li>
                <li className={cType === 'toppings' ? "active" : ""}><p onClick={() => setCType('toppings')}><span>Toppings</span></p></li>
                <li className={cType === 'cooking' ? "active" : ""}><p onClick={() => setCType('cooking')}><span>Cooking</span></p></li>
            </ul>
            <div className="collections">
                {cType === 'dough' ? (
                    <div className="collection">
                        <div className="collection--item">
                            <img src="/gf-flour.png" alt=""/>
                            <p><span>-</span> <br/>teaches Different types of flour</p>
                        </div>
                        <div className="collection--item">
                            <img src="/cf-stretching.png" alt=""/>
                            <p><span>-</span> <br/>teaches Dough stretching</p>
                        </div>
                    </div>
                ) : null}
                {cType === 'toppings' ? (
                    <div className="collection">
                        <div className="collection--item">
                            <img src="/gf-tomatoes.png" alt=""/>
                            <p><span>-</span> <br/>teaches Homemade red sauce</p>
                        </div>
                        <div className="collection--item">
                            <img src="/cf-cuttings.png" alt=""/>
                            <p><span>-</span> <br/>teaches Special Pizza Toppings</p>
                        </div>
                    </div>
                ) : null}
                {cType === 'cooking' ? (
                    <div className="collection">
                        <div className="collection--item">
                            <img src="/gf-temperature.png" alt=""/>
                            <p><span>-</span> <br/>teaches temperature and spice</p>
                        </div>
                        <div className="collection--item">
                            <img src="/cf-time.png" alt=""/>
                            <p><span>-</span> <br/>teaches the right amount of time</p>
                        </div>
                    </div>
                ) : null}
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <h3 className="h1-top">Start your journey today.</h3>
            <p className="teaser-text" style={{fontSize: "16px", lineHeight: "20px"}}>Choose from 1 plan. <br/><span style={{opacity: 1, color: "#fff"}}>In-person sessions only</span></p>
            <br/>
            <br/>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {

    const { ACCESS_CODE } = serverRuntimeConfig;
    const cookies = nookies.get(context);
    const cookieAccessCodeValue = cookies['MCC_MM_2022-10'];

    if (cookieAccessCodeValue !== ACCESS_CODE) {
        return {
            redirect: {
                permanent: false,
                destination: "/access"
            }
        }
    }

    return {
        props: {
            happy: 'birthday'
        }
    }
}
