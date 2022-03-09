const getEntries = async (req, res) => {
    res.status(200).json({ message: 'Hello World!' })
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