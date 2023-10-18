const mongoose = require('mongoose')

const UserModel = new mongoose.Schema(
    {
        name: {
            type: mongoose.Schema.Types.Mixed,
        },
        email: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        active: {
            type: mongoose.Schema.Types.Boolean, 
            required: true,
        },
        verified: {
            type: mongoose.Schema.Types.Boolean, 
            required: true,
        },
        banned: {
            type: mongoose.Schema.Types.Boolean, 
            required: true,
        },
        type: {
            type: mongoose.Schema.Types.String,
            required: true
        },
        deleted: {
            type: mongoose.Schema.Types.Boolean,
            required: true,
            default: false
        }
    },
    { strict: false, timestamps: true }
)

module.exports = mongoose.model('User', UserModel)
