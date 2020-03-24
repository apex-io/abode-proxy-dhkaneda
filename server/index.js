const express = require('express');

const app = express();
const port = 5001;

app.listen(port, () => {
  console.log(`Proxy is listening on ${port}`);
});

app.use(express.static('./dist'));
