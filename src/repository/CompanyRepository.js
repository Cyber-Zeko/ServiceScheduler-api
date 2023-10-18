const { ObjectId } = require("mongodb");

class CompanyRepository {
  constructor(companyModel) {
    this.companyModel = companyModel;
  }

  #mapService(oldCompany, newCompany) {
    oldCompany.email = newCompany.email
    oldCompany.name = newCompany.name
    oldCompany.cid = newCompany.cid
    oldCompany.verified = newCompany.verified
    return oldCompany
  }

  create = async (company) => await this.companyModel.create(company)

  update = async (company) => {
    let selectedCompany = await this.companyModel.findOne({ _id: new ObjectId(company.id) })
    selectedCompany = this.#mapService(selectedCompany, company)
    await selectedCompany.save()
  }

  getAll = async () => await this.companyModel.find({})
}


module.exports = CompanyRepository;
