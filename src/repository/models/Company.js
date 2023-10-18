const mongoose = require('mongoose')

const CompanyModel = new mongoose.Schema(
    {
        name: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },
        cid: {
            type: mongoose.Schema.Types.String, 
            required: true
        },
        email: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        verified: {
            type: mongoose.Schema.Types.Boolean,
            default: false
        },
    },
    { strict: false, timestamps: true }
)

module.exports = mongoose.model('Company', CompanyModel)
