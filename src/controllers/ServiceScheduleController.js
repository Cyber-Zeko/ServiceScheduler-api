class ServiceScheduleController {
    constructor(serviceSchedulerService) {
        this.serviceSchedulerService = serviceSchedulerService;
    }

    create = async (req, res, next) => {
        try {
            await this.serviceSchedulerService.create(req.body);
            return res.status(200).json({ message: 'Service booked' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    update = async (req, res, next) => {
        try {
            await this.serviceSchedulerService.update(req.body);
            return res.status(200).json({ message: 'Service updated' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    confirm = async (req, res, next) => {
        try {
            await this.serviceSchedulerService.confirm(req.body);
            return res.status(200).json({ message: 'Service confirmed' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    cancel = async (req, res, next) => {
        try {
            await this.serviceSchedulerService.cancel(req.body);
            return res.status(200).json({ message: 'Service canceled' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    finish = async (req, res, next) => {
        try {
            await this.serviceSchedulerService.finish(req.body);
            return res.status(200).json({ message: 'Service finished' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = ServiceScheduleController;