const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Serve static files (like the HTML, CSS, and JavaScript files)
app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Route for handling registration form submissions
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    console.log(`Registration Details - Name: ${name}, Email: ${email}, Password: ${password}`);
    res.send('Registration details received. Check your console.');
});

// Route for handling login form submissions
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(`Login Details - Email: ${email}, Password: ${password}`);
    res.send('Login details received. Check your console.');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
