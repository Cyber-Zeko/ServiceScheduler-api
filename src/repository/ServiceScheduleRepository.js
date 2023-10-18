const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

class ServiceScheduleRepository {
    constructor(serviceScheduleModel) {
        this.serviceScheduleModel = serviceScheduleModel;
    }

    create = async (service) => await this.serviceScheduleModel.create(service)

    update = async (service) => await this.serviceScheduleModel.updateOne(service)

    confirm = async (serviceIds) => {
        if (serviceIds.length > 0) {
            serviceIds.forEach(async (sid) => {
                try {
                    return this.serviceScheduleModel.updateOne({ _id: ObjectId(sid) }, { $set: { confirmed: true } })
                } catch (err) {
                    console.log(err)
                }
            })
        } else {
            throw new Error("Service ids must be an array")
        }
    }

    cancel = async (serviceIds) => {
        if (serviceIds.length > 0) {
            serviceIds.forEach(async (sid) => {
                try {
                    return this.serviceScheduleModel.updateOne({ _id: ObjectId(sid) }, { $set: { canceled: true } })
                } catch (err) {
                    console.log(err)
                }
            })
        } else {
            throw new Error("Service ids must be an array")
        }
    }

    finish = async (serviceIds) => {
        if (serviceIds.length > 0) {
            serviceIds.forEach(async (sid) => {
                try {
                    return this.serviceScheduleModel.updateOne({ _id: ObjectId(sid) }, { $set: { finished: true } })
                } catch (err) {
                    console.log(err)
                }
            })
        } else {
            throw new Error("Service ids must be an array")
        }
    }
}


module.exports = ServiceScheduleRepository;
