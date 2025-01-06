import express from 'express';
import createProxies from '../proxy/serviceProxies.mjs';
import validateJWT from '../utils/jwtValidation.mjs';
import config from "../config/config.mjs";

const router = express.Router();

// Services configuration
const services = {
    auth: config.services.auth,
    user: config.services.user,
    appointment: config.services.appointment,
    salon: config.services.salon,
    payment: config.services.payment,
    notification: config.services.notification,
    review: config.services.review,
    analytics: config.services.analytics,
};

// Validate JWT for all routes
router.use(validateJWT);

// Create proxies for all services
createProxies(router, services);

export default router;
