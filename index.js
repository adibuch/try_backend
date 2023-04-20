const express = require('express');
const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // perform authentication logic here
  // e.g. check if username and password match a database record
  
  if (username === 'example' && password === 'password') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Incorrect username or password' });
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
