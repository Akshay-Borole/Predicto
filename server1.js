const mongoose = require('mongoose');
const express = require('express');
const register = require('./routes/registers');
const login = require('./routes/login_routes');
const bankDetails = require('./routes/bank');
const buystrategy = require('./routes/strategy_routes');
//const stripe = require("./routes/strip");
//const { default: Stripe } = require('stripe');
const app = express();
//var Publishable_Key = 'pk_test_51JU5E3SAqtn7HGXKM67RrhMIDDnV6SkZJuKGkVVbSlLry4afnuJlh4I8OlnfGExwnvOk1JsSXL1JSsykYW8i62Wp00FAZQnpty';
//var Secret_Key = 'sk_test_51JU5E3SAqtn7HGXKw0l0qLg8iIFIs0EzgNBL0z7gDAa7zBxTXiO3IB8X1SSxLpSJbgCzrO5nKlcTLMJSYFwUY02200WVL9INn5';
//const stripe = require('stripe')(Secret_Key)

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

app.use('/api/bankDetails', bankDetails);
app.use('/api/buystrategy', buystrategy);
