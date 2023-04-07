require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const errorMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');

const connectDB = require('./db/connect');
const productRouter = require('./routers/products');

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Store Api</h1><a href="api/v1/products">go to api</a>');
})

app.use('/api/v1/products', productRouter);

// middleware routes
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}`);
    });
  } catch(err) {
    console.log(err)
  }
}

start();