const express = require('express');
const dotenv = require('dotenv');

// Load env variables
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/patients', (req, res) =>{
    res.status(200).json({ success:true, message: 'Show all patients'});
});

app.get('/patients/:id', (req, res) =>{
    res.status(200).json({ success:true, message: `Get a patient ${req.params.id}`});
});

app.post('/patients', (req, res) =>{
    res.status(200).json({ success:true, message: 'Add a new patient'});
});

app.put('/patients/:id', (req, res) =>{
    res.status(200).json({ success:true, message: `Get a patient ${req.params.id}`});
});

app.delete('/patients/:id', (req, res) =>{
    res.status(200).json({ success:true, message: `Delete a patient ${req.params.id}`});
});


const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
);