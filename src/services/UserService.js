const bcrypt = require('bcrypt');
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    create = async (user) => {
        try {
            const salt = bcrypt.genSaltSync(10);
            user.password = bcrypt.hashSync(user.password, salt);

            return this.userRepository.create(user)
        } catch (error) {
            return error.message
        }
    }

    update = async (user) => {
        try {
            return this.userRepository.update(user)
        } catch (error) {
            return error.message
        }
    }

    updatePassword = async (user) => {
        try {
            return this.userRepository.updatePassword(user)
        } catch (error) {
            return error.message
        }
    }

    update = async (user) => {
        try {
            return this.userRepository.delete(user)
        } catch (error) {
            return error.message
        }
    }

    getByEmail = async (email) => {
        try {
            return this.userRepository.getByEmail(email)
        } catch (error) {
            return error.message
        }
    }
}

module.exports = UserService;