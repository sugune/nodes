require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

const productsRouter = require('./routers/products');


// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Store Api</h1><a href="api/v1/products">products api</a>');
});

app.use('/api/v1/products', productsRouter);

const PORT = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();