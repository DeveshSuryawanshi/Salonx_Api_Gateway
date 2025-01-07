import dotenv from "dotenv";
dotenv.config();

const ENV = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: process.env.PORT || 3000, // Fallback to 3000 if not set
    // JWT secret key (required)
    JWT_SECRET: process.env.JWT_SECRET || "default_jwt_secret",
    // Other environment variables
    SESSION_SECRET: process.env.SESSION_SECRET,
    LOG_LEVEL: process.env.LOG_LEVEL || "info",
    LOG_FILE: process.env.LOG_FILE || "app.log",
    CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3000",
    //Service URL
    AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
    USER_SERVICE_URL: process.env.USER_SERVICE_URL || 'http://localhost:3002',
    APPOINTMENT_SERVICE_URL: process.env.APPOINTMENT_SERVICE_URL || 'http://localhost:3003',
    SALON_SERVICE_URL: process.env.SALON_SERVICE_URL || 'http://localhost:3004',
    PAYMENT_SERVICE_URL: process.env.PAYMENT_SERVICE_URL || 'http://localhost:3005',
    NOTIFICATION_SERVICE_URL: process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:3006',
    REVIEW_SERVICE_URL: process.env.REVIEW_SERVICE_URL || 'http://localhost:3007',
    ANALYTICS_SERVICE_URL: process.env.ANALYTICS_SERVICE_URL || 'http://localhost:3008',
    //Auth route
    LOGIN_ROUTE: process.env.LOGIN_ROUTE,
    REGISTER_ROUTE: process.env.REGISTER_ROUTE,
};

export default ENV;