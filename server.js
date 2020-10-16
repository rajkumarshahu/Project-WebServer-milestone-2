const express = require('express');
const dotenv = require('dotenv');

// Route files
const patients = require('./routes/patients');

// Load env variables
dotenv.config({ path: './config/config.env' });

const app = express();

// Mount routers
app.use('/patients', patients);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
);