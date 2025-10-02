const express = require('express')
const app = express()

const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const inventoryMovementRoutes = require('./routes/inventoryMovement');
const saleRoutes = require('./routes/sale');
const saleItemRoutes = require('./routes/saleItem');
const paymentRoutes = require('./routes/payment');

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/inventoryMovements', inventoryMovementRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/saleItems', saleItemRoutes);
app.use('/api/payments', paymentRoutes);

module.exports = app