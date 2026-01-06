const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = "PawsPalConnect";
const ENVIRONMENT = process.env.APP_ENV || 'Demo';

// Serve a beautiful animal dashboard
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>${APP_NAME}</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f2f5; margin: 0; padding: 20px; text-align: center; }
            .header { background: #ff914d; color: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; }
            .container { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
            .card { background: white; border-radius: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); width: 250px; padding: 15px; transition: 0.3s; }
            .card:hover { transform: translateY(-10px); }
            .card img { width: 100%; border-radius: 10px; height: 200px; object-fit: cover; }
            .status-tag { display: inline-block; padding: 5px 10px; background: #4CAF50; color: white; border-radius: 20px; font-size: 12px; margin-top: 10px; }
            .footer { margin-top: 30px; color: #666; font-size: 14px; }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>🐾 ${APP_NAME}</h1>
            <p>Connecting pets with their forever homes</p>
            <small>Environment: <b>${ENVIRONMENT}</b></small>
        </div>

        <div class="container">
            <div class="card">
                <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=300" alt="Dog">
                <h3>Buddy</h3>
                <p>Golden Retriever</p>
                <div class="status-tag">Ready for Adoption</div>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300" alt="Cat">
                <h3>Luna</h3>
                <p>Siamese Cat</p>
                <div class="status-tag">Ready for Adoption</div>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=300" alt="Dog">
                <h3>Charlie</h3>
                <p>Beagle</p>
                <div class="status-tag">Ready for Adoption</div>
            </div>
        </div>

        <div class="footer">
            <p>System Status: 🟢 Healthy | Pod Version: 1.0.0</p>
        </div>
    </body>
    </html>
    `);
});

// Health check endpoint for Kubernetes
app.get('/health', (req, res) => res.status(200).send('OK'));

app.listen(PORT, () => {
    console.log(`${APP_NAME} UI running at http://localhost:${PORT}`);
});

module.exports = app;