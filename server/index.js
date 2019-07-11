const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;

require('./startup/database')(app);
require('./startup/routes')(app);

console.log(app.get('env'));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
