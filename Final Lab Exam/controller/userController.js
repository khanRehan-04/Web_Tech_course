const User = require('../models/userModel');

const getAlluser = async (req, res) => {
    try {
        const userFiles = await user.find();
        res.json(userFiles);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user.' });
    }
};

const getuserById = async (req, res) => {
    const { id } = req.params;

    try {
        const userFile = await user.findById(id);
        if (!userFile) return res.status(404).json({ message: 'user not found.' });
        res.json(userFile);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user file.' });
    }
};

const createuser = async (req, res) => {
    const { email, firstName, lastName, department } = req.body;

    if (!email || !firstName || !lastName || !department) return res.status(400).json({ message: 'All fields are required.' });

    try {
        const newuserFile = await user.create({ email, firstName, lastName, department });
        res.status(201).json(newuserFile);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user file.' });
    }
};

const updateuser = async (req, res) => {
    const { id } = req.params;
    const { email, firstName, lastName, department } = req.body;

    if (!email || !firstName || !lastName || !department) return res.status(400).json({ message: 'All fields are required.' });

    try {
        const updateduserFile = await user.findByIdAndUpdate(id, { email, firstName, lastName, department }, { new: true });

        if (!updateduserFile) return res.status(404).json({ message: 'user file not found.' });

        res.json(updateduserFile);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user file.' });
    }
};

const deleteuser = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteduserFile = await user.findByIdAndDelete(id);

        if (!deleteduserFile) return res.status(404).json({ message: 'user file not found.' });

        res.json({ message: 'user file deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete user file.' });
    }
};

module.exports = {
    getAlluser,
    getuserById,
    createuser,
    updateuser,
    deleteuser,
};
