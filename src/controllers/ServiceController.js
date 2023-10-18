class ServiceController {
    constructor(serviceService) {
        this.serviceService = serviceService;
    }

    create = async (req, res, next) => {
        try {
            await this.serviceService.create(req.body);
            return res.status(200).json({ message: 'Company Service added' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    update = async (req, res, next) => {
        try {
            await this.serviceService.update(req.body);
            return res.status(200).json({ message: 'Company Service updated' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    delete = async (req, res, next) => {
        try {
            await this.serviceService.delete(req.body);
            return res.status(200).json({ message: 'Company Service deleted' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = ServiceController;