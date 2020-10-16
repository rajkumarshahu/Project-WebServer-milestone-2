const express = require('express');
const {
	getPatients,
	getPatient,
	createpatient,
	updatePatient,
	deletePatient,
} = require('../controllers/patients');

const router = express.Router();

router
    .route('/')
    .get(getPatients)
    .post(createpatient)

router
    .route('/:id')
    .get(getPatient)
    .put(updatePatient)
    .delete(deletePatient)

module.exports = router;