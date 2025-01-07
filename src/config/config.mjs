import ENV from "./env.mjs";

const config = {
  app: {
    port: ENV.PORT,
    nodeEnv: ENV.NODE_ENV,
  },
  jwt: {
    secret: ENV.JWT_SECRET,
  },
  session: {
    secret: ENV.SESSION_SECRET,
  },
  log: {
    level: ENV.LOG_LEVEL,
    file: ENV.LOG_FILE,
  },
  cors: {
    origin: ENV.CORS_ORIGIN,
  },
  services: {
    auth: ENV.AUTH_SERVICE_URL,
    user: ENV.USER_SERVICE_URL,
    appointment: ENV.APPOINTMENT_SERVICE_URL,
    salon: ENV.SALON_SERVICE_URL,
    payment: ENV.PAYMENT_SERVICE_URL,
    notification: ENV.NOTIFICATION_SERVICE_URL,
    review: ENV.REVIEW_SERVICE_URL,
    analytics: ENV.ANALYTICS_SERVICE_URL,
  },
  open_route: {
    login: ENV.LOGIN_ROUTE,
    register: ENV.REGISTER_ROUTE
  }
};

export default config;
