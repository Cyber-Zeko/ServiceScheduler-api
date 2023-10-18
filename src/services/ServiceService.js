class ServiceService {
    constructor(serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    create = async (service) => {
        try {
            return this.serviceRepository.create(service)
        } catch (error) {
            return error.message
        }
    }

    update = async (service) => {
        try {
            return this.serviceRepository.update(service);
        } catch (error) {
            return error.message
        }
    }

    delete = async (data) => {
        try {
            return this.serviceRepository.delete(data.serviceIds);
        } catch (error) {
            return error.message
        }
    }
}

module.exports = ServiceService;