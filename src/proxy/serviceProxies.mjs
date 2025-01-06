import { createProxyMiddleware } from 'http-proxy-middleware';
import { Logger } from '../config/logger.mjs';

const createProxies = (router, services) => {
    Object.entries(services).forEach(([serviceName, serviceUrl]) => {
        Logger.info(`Setting up proxy for: ${serviceName} -> ${serviceUrl}`);
        router.use(
            `/${serviceName}`,
            createProxyMiddleware({
                target: serviceUrl,
                changeOrigin: true,
                pathRewrite: {
                    [`^/${serviceName}`]: '', // Remove service prefix
                },
                onProxyReq: (proxyReq, req) => {
                    Logger.info(`Proxying request: ${req.method} ${req.url} to ${serviceUrl}`);
                },
                onError: (err, req, res) => {
                    Logger.error(`Proxy error for ${serviceName}: ${err.message}`);
                    res.status(502).json({ error: 'Bad Gateway' });
                },
            })
        );
    });
};

export default createProxies;
// module.exports = { createProxies };
