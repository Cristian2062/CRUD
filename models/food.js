const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },

    calories: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error("Las calorias negativas no existen");
        }
    },
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;