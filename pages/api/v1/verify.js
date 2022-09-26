// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nookies from 'nookies';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

export default (req, res) => {
    if (req.method === 'GET') {
        const { ACCESS_CODE } = serverRuntimeConfig;
        const { code } = req?.query;
        if (code === ACCESS_CODE) {
            nookies.set({req, res}, 'MCC_MM_2022-10', code, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });
            res.statusCode = 200
            res.json({
                verified: true,
                message: "Access Granted"
            })
        } else {
            res.statusCode = 401
            res.json({
                verified: false,
                message: "Access Denied"
            })
        }
    } else {
        res.statusCode = 403;
        res.json({
            status: 403,
            message: "Forbidden"
        })
    }
}
