//@desc        Get all patients
//@route       GET /patients
//@access      Public
exports.getPatients = (req, res, next) => {
    res.status(200).json({ success:true, message: 'Show all patients'});
}

//@desc        Get single patient
//@route       GET /patients/:id
//@access      Public
exports.getPatient = (req, res, next) => {
    res.status(200).json({ success:true, message: `Get a patient ${req.params.id}`});
}

//@desc        Add new patient
//@route       POST /patients
//@access      Private
exports.createpatient = (req, res, next) => {
    res.status(200).json({ success:true, message: 'Add a new patient'});
}

//@desc        Update patient
//@route       PUT /patients/:id
//@access      Private
exports.updatePatient = (req, res, next) => {
    res.status(200).json({ success:true, message: `Update a patient ${req.params.id}`});
}

//@desc        Delete patient
//@route       DELETE /patients/:id
//@access      Private
exports.deletePatient = (req, res, next) => {
    res.status(200).json({ success:true, message: `Delete a patient ${req.params.id}`});
}