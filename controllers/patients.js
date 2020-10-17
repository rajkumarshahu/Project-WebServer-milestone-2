const Patient = require('../models/Patient');

//@desc        Get all patients
//@route       GET /patients
//@access      Public
exports.getPatients = async (req, res, next) => {
    try {
        const patients = await Patient.find();
        res.status(200).json({ success:true, patientCount: patients.length, data: patients });
    } catch (err) {
        res.status(400).json({ success: false });
    }

}

//@desc        Get single patient
//@route       GET /patients/:id
//@access      Public
exports.getPatient = async (req, res, next) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient){
            return res.status(400).json({success: false});
        }
        res.status(200).json({ success:true, data: patient});
    } catch (err) {
        res.status(400).json({ success: false });
    }
}

//@desc        Add new patient
//@route       POST /patients
//@access      Private
exports.createpatient = async (req, res, next) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json({
            success: true,
            data: patient
        });
    } catch (err) {
        res.status(400).json({success: false})
    }

}

//@desc        Update patient
//@route       PUT /patients/:id
//@access      Private
exports.updatePatient = async (req, res, next) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!patient){
            return res.status(400).json({ success: false });
        }
        res.status(200).json({ success:true, data: patient });
    } catch (err) {
        res.status(400).json({ success: false });
    }

}

//@desc        Delete patient
//@route       DELETE /patients/:id
//@access      Private
exports.deletePatient = async (req, res, next) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient){
            return res.status(400).json({ success: false });
        }
        res.status(200).json({ success:true, data: {} });
    } catch (err) {
        res.status(400).json({ success: false });
    }
}