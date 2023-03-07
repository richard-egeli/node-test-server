import express from 'express';

const app = express();
const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
  console.log('GET request received');
  res.download('./release/app_update.bin');
});

app.post('/', (req, res) => {
  console.log('POST request received');
  res.download('./release/app_update.bin');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
