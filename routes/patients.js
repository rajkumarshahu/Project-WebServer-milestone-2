const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.status(200).json({ success:true, message: 'Show all patients'});
});

router.get('/:id', (req, res) =>{
    res.status(200).json({ success:true, message: `Get a patient ${req.params.id}`});
});

router.post('/', (req, res) =>{
    res.status(200).json({ success:true, message: 'Add a new patient'});
});

router.put('/:id', (req, res) =>{
    res.status(200).json({ success:true, message: `Get a patient ${req.params.id}`});
});

router.delete('/:id', (req, res) =>{
    res.status(200).json({ success:true, message: `Delete a patient ${req.params.id}`});
});

module.exports = router;