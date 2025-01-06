import { Logger } from './logger.mjs';
import jwt from "jsonwebtoken";

const validateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        Logger.warn('Unauthorized access: No token provided');
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        Logger.warn('Invalid token');
        res.status(403).json({ error: 'Forbidden' });
    }
};

export default validateJWT
