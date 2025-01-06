import express from 'express';
import createProxies from '../proxy/serviceProxies.mjs';
import validateJWT from '../utils/jwtValidation.mjs';

const router = express.Router();

// Services configuration
const services = {
    auth: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
    user: process.env.USER_SERVICE_URL || 'http://localhost:3002',
    appointment: process.env.APPOINTMENT_SERVICE_URL || 'http://localhost:3003',
    salon: process.env.SALON_SERVICE_URL || 'http://localhost:3004',
    payment: process.env.PAYMENT_SERVICE_URL || 'http://localhost:3005',
    notification: process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:3006',
    review: process.env.REVIEW_SERVICE_URL || 'http://localhost:3007',
    analytics: process.env.ANALYTICS_SERVICE_URL || 'http://localhost:3008',
};

// Validate JWT for all routes
router.use(validateJWT);

// Create proxies for all services
createProxies(router, services);

export default router;
