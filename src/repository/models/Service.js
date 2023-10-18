const mongoose = require('mongoose')

const ServiceModel = new mongoose.Schema(
    {
        companyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company',
            required: true
        },
        name: {
            type: mongoose.Schema.Types.String,
            required: true
        },
        price: {
            type: mongoose.Schema.Types.Decimal128,
            required: true
        },
        duration: {
            type: mongoose.Schema.Types.Decimal128
        }
    },
    { strict: false, timestamps: true }
)

module.exports = mongoose.model('Service', ServiceModel)
