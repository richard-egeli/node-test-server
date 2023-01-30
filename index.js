import express from 'express';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
  res.download('./release/app_update.bin');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
