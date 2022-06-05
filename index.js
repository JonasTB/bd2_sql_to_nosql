const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.all('*', require('./src/routes/index'));

app.get('/', ((req, res) => {
    return res.status(200).json({ OK: "Application is running successfully"});
}))

app.listen(3000, () => { console.log(`Server is running on http://localhost:${3000}`)});