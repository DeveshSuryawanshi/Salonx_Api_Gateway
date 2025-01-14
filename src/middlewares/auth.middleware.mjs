import jwt from "jsonwebtoken";

import Logger from '../config/logger.mjs';
import config from "../config/config.mjs";

const Auth = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        Logger.warn('Unauthorized access: No token provided');
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, config.jwt.secret, (err, decoded) => {
        if (err) {
            // Handle specific JWT error types
            if (err.name === 'TokenExpiredError') {
                Logger.warn('Token expired');
                return res.status(403).json({ error: 'Token expired', expiredAt: err.expiredAt });
            }
            if (err.name === 'JsonWebTokenError') {
                Logger.warn('Invalid token');
                return res.status(403).json({ error: 'Invalid token' });
            }
            if (err.name === 'NotBeforeError') {
                Logger.warn('Token not active yet');
                return res.status(403).json({ error: 'Token not active yet', date: err.date });
            }
            // Catch-all for other JWT verification errors
            Logger.warn('JWT verification error');
            return res.status(403).json({ error: 'Forbidden' });
        }

        // If the token is valid, add the decoded user to the request object
        req.user = decoded;
        next();
    });
};

export default Auth;
