const { ObjectId } = require("mongodb");

class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }

    #mapUser(oldUser, newUser) {
        oldUser.name = newUser.name
        oldUser.email = newUser.email
        oldUser.email = newUser.email
        oldUser.active = newUser.active
        oldUser.verified = newUser.verified
        oldUser.banned = newUser.banned
        oldUser.type = newUser.type
        oldUser.active = newUser.active
        oldUser.deleted = newUser.deleted

        return oldUser
    }

    create = async (user) => {
        return this.userModel.create(user)
    }

    update = async (user) => {
        let selectedUser = await this.userModel.findOne({ _id: new ObjectId(user.id) })
        selectedUser = this.#mapUser(selectedUser, user)

        await selectedUser.save()
    }

    updatePassword = async (user) => {
        let selectedUser = await this.userModel.findOne({ _id: new ObjectId(user.id) })
        selectedUser.password = password

        await selectedUser.save(user.ppassword)
    }

    delete = async (user) => {
        let selectedUser = await this.userModel.findOne({ _id: new ObjectId(user.id) })
        selectedUser.deleted = user.deleted

        await selectedUser.save()
    }

    getByEmail = async (email) => {
        return this.userModel.findOne({ email })
    }
}


module.exports = UserRepository;
