import React from 'react';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './index.less';

export default function Index() {
    const [cType, setCType] = React.useState('dough');

    return (
        <div>
            <Header />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 className="h1-top">Stop Scrolling. <br/>Start doing.</h1>
            <p className="teaser-text">2 of the locals favorite Pizza and Bread Bakers. Leaders and icons are here to teach you what they know.</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="featured">
                <img src="/gf1.png" alt=""/>
                <p><span>-</span> <br/>teaches Different Types of Pizza Flour</p>
                <button><img src="/play.svg" alt=""/> Watch Trailer</button>
            </div>
            <br/>
            <br/>
            <br/>
            <h1 className="sub-heading">New classes added every month.</h1>
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
                            <img src="/cf1.png" alt=""/>
                            <p><span>-</span> <br/>teaches Different Types of Dough</p>
                        </div>
                        <div className="collection--item">
                            <img src="/gf1.png" alt=""/>
                            <p><span>-</span> <br/>teaches Let it Rest</p>
                        </div>
                    </div>
                ) : null}
                {cType === 'toppings' ? (
                    <div className="collection">
                        <div className="collection--item">
                            <img src="/cf1.png" alt=""/>
                            <p><span>-</span> <br/>teaches Different Types of Dough</p>
                        </div>
                        <div className="collection--item">
                            <img src="/gf1.png" alt=""/>
                            <p><span>-</span> <br/>teaches Let it Rest</p>
                        </div>
                    </div>
                ) : null}
                {cType === 'cooking' ? (
                    <div className="collection">
                        <div className="collection--item">
                            <img src="/cf1.png" alt=""/>
                            <p><span>-</span> <br/>teaches Different Types of Dough</p>
                        </div>
                        <div className="collection--item">
                            <img src="/gf1.png" alt=""/>
                            <p><span>-</span> <br/>teaches Let it Rest</p>
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
