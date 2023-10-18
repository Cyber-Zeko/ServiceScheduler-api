class CompanyController {
    constructor(companyService) {
        this.companyService = companyService;
    }

    create = async (req, res, next) => {
        try {
            await this.companyService.create(req.body);
            return res.status(200).json({ message: 'Company added' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    update = async (req, res, next) => {
        try {
            await this.companyService.update(req.body);
            return res.status(200).json({ message: 'Company updated' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    getAll = async (req, res, next) => {
        try {
            const companies = await this.companyService.getAll();
            return res.status(200).json(companies)
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = CompanyController;