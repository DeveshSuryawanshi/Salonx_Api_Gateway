import dotenv from "dotenv";
import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { Logger } from "./src/config/logger.mjs";
import router from "./src/routes/index.mjs";
dotenv.config;

// Initialize Express app
const app = express();

// Security Middleware
app.use(helmet());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    message: 'Too many requests, please try again later.',
});

app.use(limiter);

// Gateway Routes
app.use('/', router);

// Fallback for unmatched routes
app.use((req, res) => {
    Logger.warn(`404 Not Found: ${req.method} ${req.url}`);
    res.status(404).json({ error: 'Route not found' });
});

// Error Handling
app.use((err, req, res, next) => {
    Logger.error(`Error: ${err.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
});

export default app;
