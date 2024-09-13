const express = require('express');
const cookieParser = require('cookie-parser');
const uuid = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));


const users = {};
const storedWords = {};


function generateLoginForm() {
    return `
    <link rel="stylesheet" type="text/css" href="/styles.css">
    <h1>Login Form</h1>
    <form action="/login" method="post">
      <input type="text" name="username" placeholder="Enter your username" required>
      <button type="submit">Login</button>
    </form>
  `;
}


function generateDataPage(username, storedWord) {
    return `
    <link rel="stylesheet" type="text/css" href="/styles.css">
    <h1>Data Page</h1>
    <p>Welcome, ${username}!</p>
    <p>Stored Word: ${storedWord}</p>
    <form action="/change-word" method="post">
      <input type="text" name="word" placeholder="Enter new stored word" required>
      <button type="submit">Change Word</button>
    </form>
    <form action="/logout" method="post">
      <button class="logout-button" type="submit">Logout</button>
    </form>
  `;
}


app.get('/', (req, res) => {

    const isLoggedIn = req.cookies.sid !== undefined;

    if (isLoggedIn) {
        const sessionId = req.cookies.sid;
        const username = users[sessionId];
        const storedWord = storedWords[username] || '';
        const dataPageHTML = generateDataPage(username, storedWord);
        res.send(dataPageHTML);
    } else {

        const loginFormHTML = generateLoginForm();
        res.send(loginFormHTML);
    }
});


app.post('/login', (req, res) => {
    const { username } = req.body;


    if (!username || !/^[a-zA-Z0-9]+$/.test(username) || username.toLowerCase() === 'dog') {
        if (!username) {
            res.status(400).send('Username cannot be empty. Please enter a username.');
        } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
            res.status(400).send(`
          <h1>Error: Invalid Username</h1>
          <p>The username you entered is invalid. Please enter a valid username.</p>
          <a href="/">Back to Login Form</a>
        `);
        } else {
            res.status(403).send(`
          <h1>Error: Invalid Username</h1>
          <p>The username you entered is not allowed. Please enter a different username.</p>
          <a href="/">Back to Login Form</a>
        `);
        }
        return;
    }

    const sessionId = uuid.v4();
    res.cookie('sid', sessionId);
    users[sessionId] = username;
    res.redirect('/');
});



app.post('/logout', (req, res) => {

    res.clearCookie('sid');
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.post('/change-word', (req, res) => {

    const sessionId = req.cookies.sid;
    const username = users[sessionId];

    if (!username) {

        res.redirect('/');
        return;
    }

    const newWord = req.body.word;

    storedWords[username] = newWord;

    res.redirect('/');
});
