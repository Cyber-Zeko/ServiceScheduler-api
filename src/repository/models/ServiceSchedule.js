const mongoose = require('mongoose')

const ServiceScheduleModel = new mongoose.Schema(
    {
        companyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company',
            required: true
        },
        serviceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service',
            required: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        startDate: {
            type: mongoose.Schema.Types.Date,
            required: true
        },
        confirmed: {
            type: mongoose.Schema.Types.Boolean,
            default: false
        },
        canceled: {
            type: mongoose.Schema.Types.Boolean,
            default: false
        },
        finished: { 
            type: mongoose.Schema.Types.Boolean, 
            required: false, 
            default: false 
        }
    },
    { strict: false, timestamps: true }
)

module.exports = mongoose.model('ServiceSchedule', ServiceScheduleModel)
