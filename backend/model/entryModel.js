const mongoose = require('mongoose')

const FoodSchema = mongoose.Schema(
    {
        meal: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        food: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Food', FoodSchema)