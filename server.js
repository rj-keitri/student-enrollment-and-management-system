const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, 'dist/student-enrollment-and-management-system/browser')));

// Redirect all requests to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/student-enrollment-and-management-system/browser/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});