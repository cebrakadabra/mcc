import React from 'react';
import Router from 'next/router'
import Head from "next/head";
import NProgress from 'nprogress';
import '../styles/main.less';

// module.hot.dispose event not being called on local dev causes css loss from time to time
// https://github.com/sheerun/extracted-loader/issues/11
if (module.hot) {
    module.hot.addStatusHandler(status => {
        if (typeof window !== "undefined" && status === "ready") {
            window.__webpack_reload_css__ = true;
        }
    });
}

Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start();
});
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({Component, pageProps}) {

    return (
        <>
            <Head>
                <title>Happy Birthday Mike!</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0" width="device-width"/>
                <link rel="icon" type="image/png" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
