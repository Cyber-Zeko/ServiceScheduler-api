class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    create = async (req, res, next) => {
        try {
            const existingUser = await this.userService.getByEmail(req.body.email)
            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }
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

    getByEmail = async (req, res, next) => {
        try {
            const user = await this.userService.getByEmail(req.body.email)
            if (!user) {
                return res.status(400).json({ message: "User not found" })
            }

            return res.status(200).json({ user })
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = UserController;