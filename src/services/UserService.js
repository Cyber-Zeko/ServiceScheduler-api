class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    create = async (user) => {
        try {
            user.isActive = true
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
    
    update = async (user) => {
        try {
            return this.userRepository.delete(user)
        } catch (error) {
            return error.message
        }
    }
}

module.exports = UserService;