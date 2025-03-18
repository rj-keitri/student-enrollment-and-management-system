const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('dist/your-angular-app'));

// Catch-all route to serve index.html for any unknown routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/your-angular-app/index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});