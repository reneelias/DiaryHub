const express = require('express');
const app = express();

app.use(express.json());
app.set('json spaces', 2);

app.get('/daily', (req, res) => {
  res.send('hello world');
})

app.listen(5000, () => console.log(`Listening on port 5000!`));