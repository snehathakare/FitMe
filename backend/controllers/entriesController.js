const Food = require('./../model/entryModel')

const getEntries = async (req, res) => {
    const meal = await Food.find()
    res.status(200).json(meal)
}

const setEntries = async (req, res) => {
    const { meal, food } = req.body;
    const newMeal = await Food.create({
        meal, food
    })
    res.status(200).json(newMeal)
}

const updateEntries = async (req, res) => {
    const meal = await Food.findById(req.params.id)
    const updatedMeal = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedMeal)
}

const deleteEntries = async (req, res) => {
    const meal = await Food.findById(req.params.id)
    await meal.remove()
    res.status(200).json({ id: req.params.id })
}

module.exports = {
    getEntries,
    setEntries,
    updateEntries,
    deleteEntries
}