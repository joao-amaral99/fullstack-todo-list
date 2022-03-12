const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./database/connection');

const routes = require('./routes');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});