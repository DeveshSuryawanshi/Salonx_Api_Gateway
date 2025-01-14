## Application Structure
```
api-gateway/
│
│── public
│   │── css
│   │   └── style.css
│   │── js
│   │   └── script.js
│   │── images
│   │   └── logo.png
│   └── index.html
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

## Gateway Structure
```
api-gateway /                        # Manages routing to all services (with load balancing)
|
├── auth-service/                    # Handles user authentication and JWT-based login
│  
├── user-service/                    # Manages user profiles, roles, and preferences
│   
├── appointment-service/             # Handles booking, rescheduling, and cancellations
│   
├── salon-management-service/        # Manages salon services, employees, inventory, and promotions
│   
├── payment-service/                 # Manages payments and billing
│   
├── notification-service/            # Sends email/SMS/Push notifications
│   
├── review-feedback-service/         # Manages customer reviews and ratings
│   
└── analytics-service/               # Tracks and analyzes usage data
```