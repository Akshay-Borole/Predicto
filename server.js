const mongoose = require('mongoose');
const express = require('express');
const register = require('./routes/registers');
const login = require('./routes/login_routes');
const app = express();

const CONNECTION_URL = 'mongodb://localhost/predicto';
const PORT = process.env.PORT || 4000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}...and connected to MongoDB`)))
  .catch(err => console.error('Could not connect to MongoBD'));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use('/api/register', register);
app.use('/api/login', login);
