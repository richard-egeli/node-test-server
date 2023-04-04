const express = require('express');

const app = express();
const port = process.env.PORT || 4545;

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

app.get('/', (req, res) => {
  res.download('./release/app_update.bin');
});

app.post('/', (req, res) => {
  res.download('./release/app_update.bin');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
