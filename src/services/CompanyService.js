const { ObjectId } = require("mongodb");

class ComapnyService {
    constructor(companyRepository) {
        this.companyRepository = companyRepository
    }

    create = async (company) => {
        try {
            return this.companyRepository.create(company)
        } catch (error) {
            return error.message
        }
    }

    update = async (company) => {
        try {
            return this.companyRepository.update(company)
        } catch (error) {
            return error.message
        }
    }

    getAll = async () => {
        try {
            return this.companyRepository.getAll();
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = ComapnyService;