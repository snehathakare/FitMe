const Food = require('./../model/entryModel')

const getEntries = async (req, res) => {
    const meal = await Food.find()
    res.status(200).json(meal)
}

const setEntries = (req, res) => {
    res.status(201).json({ message: 'Hello World!' })
}

const updateEntries = (req, res) => {
    res.status(200).json({ message: 'Hello World!' })
}

const deleteEntries = (req, res) => {
    res.status(200).json({ message: 'Hello World!' })
}

module.exports = {
    getEntries,
    setEntries,
    updateEntries,
    deleteEntries
}