const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

class ServiceRepository {
    constructor(serviceModel) {
        this.serviceModel = serviceModel;
    }

    create = async (service) => await this.serviceModel.create(service)

    update = async (service) => await this.serviceModel.updateOne(service)

    delete = async (serviceIds) => {
        if (serviceIds.length > 0) {
            serviceIds.forEach(async (sid) => {
                try {
                    return this.serviceModel.deleteOne({ _id: ObjectId(sid) })
                } catch (err) {
                    console.log(err)
                }
            })
        } else { 
            throw new Error("Service ids must be an array") 
        }
    }
}


module.exports = ServiceRepository;
