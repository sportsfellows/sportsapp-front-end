'use strict';

//some change to test deployment
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.static(`${__dirname}/build`));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});