const path = require('path');
const express = require('express');
const router = express.Router();

const app = express();

app.use(express.static('/client/public'));

app.get('*', (req, res, next) => {
  console.log("We are where we think we are :)");
  const newPath = path.join(__dirname, '/client/public/index.html')
  res.sendFile(newPath);
});

app.listen('3001', () => {
  console.log("Currently listening on port 3001");
});

module.exports = router;
