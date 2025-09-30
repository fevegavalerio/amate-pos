const express = require('express')
const app = express()

const categoryRoutes = require('./routes/category');
app.use('/api/categories', categoryRoutes);

module.exports = app