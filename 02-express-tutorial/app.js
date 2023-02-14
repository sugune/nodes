const express = require('express');
const app = express();
const {people, waifu} = require('./data');
const waifus = require('./routes/waifus');
const auth = require('./routes/auth');
const peoples = require('./routes/people');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/api/waifu', waifus);
app.use('/login', auth);
app.use('/api/people', peoples);

app.listen(5000, () => {
  console.log('server is listening on port 5000...');
});
