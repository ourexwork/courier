const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000 || process.env.PORT;
const users = require('../server/routes/user')
mongoose
    .connect('mongodb://localhost/courier_app', { useNewUrlParser: true })
    .then(() => {
        console.log('Database connected successfully ');
    })
    .catch(e => {
        // if any error throw the error
        throw new Error(e.message);
    });




// app.get('/', (req, res) => {
//     res.send('dlskdldkls;lkmd');
// });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/users', users);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});