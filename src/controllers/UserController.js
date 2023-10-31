class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    create = async (req, res, next) => {
        try {
            await this.userService.create(req.body);
            return res.status(200).json({ message: 'User added' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    update = async (req, res, next) => {
        try {
            await this.userService.update(req.body);
            return res.status(200).json({ message: 'User updated' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    updatePassword = async (req, res, next) => {
        try {
            await this.userService.updatePassword(req.body);
            return res.status(200).json({ message: 'User updated' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    delete = async (req, res, next) => {
        try {
            await this.userService.update(req.body);
            return res.status(200).json({ message: 'User deleted' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = UserController;