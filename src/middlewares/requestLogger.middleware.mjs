import Logger from "../config/logger.mjs";

// Middleware for logging HTTP requests
const requestLogger= (req, res, next) => {
    const { method, url } = req;
    const startTime = new Date();
  
    res.on('finish', () => {
      const { statusCode } = res;
      const responseTime = new Date() - startTime;
      Logger.info(`[${method}] ${url} ${statusCode} - ${responseTime}ms`);
    });
  
    next();
};

export default requestLogger;