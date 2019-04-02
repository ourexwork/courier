const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('dlskdldkls;lkmd');
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
