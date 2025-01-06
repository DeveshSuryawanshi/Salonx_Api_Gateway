```
api-gateway/
├── src/
│   ├── controllers/
│   │   └── authController.js       # Handle API Gateway level auth
│   ├── routes/
│   │   └── index.js                # Gateway routes
│   ├── utils/
│   │   ├── logger.js               # Logging setup
│   │   └── jwtValidation.js        # JWT validation middleware
│   ├── proxy/
│       └── serviceProxies.js       # Proxy configurations for services
├── package.json
├── server.js                        # Main entry point
└── .env                             # Environment variables
```