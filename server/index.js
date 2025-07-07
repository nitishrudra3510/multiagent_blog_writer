const express = require('express');
const cors = require('cors');
const blogRouter = require('./routes/blog');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', blogRouter);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));