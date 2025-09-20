const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routes/events');
const userRoutes = require('./routes/users');
const profileRoutes = require('./routes/profiles');
//const reportRoutes = require('./routes/reports');
const expenseRoutes = require('./routes/expenses');
const testRoutes = require('./routes/test');
const app = express();
const port = process.env.PORT || 3001; // Use Render's port or fallback to 3001

app.use(cors({
  origin: '*',    // Allow all origins
  credentials: false //disables sending cookies with requests
}));

app.use(express.json());

// Add a basic health check endpoint
app.get('/api/', (req, res) => {
  res.json({ 
    message: 'EventWise Backend API is running!', 
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is healthy' });
});

//Connects each route file to a URL path
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/profiles', profileRoutes);
//app.use('/api/reports', reportRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/test', testRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
