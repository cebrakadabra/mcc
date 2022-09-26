import React from 'react';
import axios from 'axios';
import Router from 'next/router'

import Footer from '../components/Footer';

require('./access.less');

export default function Index() {

    const [value, setValue] = React.useState(null);
    const verifyAccess = async () => {
        try {
            const host = location.host;
            const protocol = location.protocol;
            console.log('value: ', value);
            const { data: { verified } } = await axios.get(`${protocol}//${host}/api/v1/verify?code=${value}`);
            if (verified) {
                await Router.push('/');
            }
        } catch(e) {
            console.log('e: ', e);
        }
    }

    return (
        <div className="access-container">
            <div className="access-container--inner">
                <input className="access-input" type="password" placeholder={'MMDD'} onChange={(e) => setValue(e.target.value)} />
                <button className="btn-input" onClick={() => verifyAccess()}>Submit</button>
            </div>
            <br/>
            <br/>
            <br/>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            happy: 'birthday'
        }
    }
}
