class ServiceSchedulerService {
    constructor(serviceScheduleRepository) {
        this.serviceScheduleRepository = serviceScheduleRepository;
    }

    create = async (service) => {
        try {
            service.confirmed = false
            service.canceled = false
            service.finished = false
            return this.serviceScheduleRepository.create(service)
        } catch (error) {
            return error.message
        }
    }

    update = async (service) => {
        try {
            return this.serviceScheduleRepository.update(service);
        } catch (error) {
            return error.message
        }
    }

    confirm = async (data) => {
        try {
            return this.serviceScheduleRepository.confirm(data.serviceIds);
        } catch (error) {
            return error.message
        }
    }

    cancel = async (data) => {
        try {
            return this.serviceScheduleRepository.cancel(data.serviceIds);
        } catch (error) {
            return error.message
        }
    }

    finish = async (data) => {
        try {
            return this.serviceScheduleRepository.finish(data.serviceIds);
        } catch (error) {
            return error.message
        }
    }
}

module.exports = ServiceSchedulerService;