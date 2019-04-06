const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;

require('./startup/database')();
require('./startup/routes')(app);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
