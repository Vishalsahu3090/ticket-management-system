const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ticketRoutes = require('./routes/ticketRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/tickets', ticketRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
