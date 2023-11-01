const bcrypt = require('bcrypt');

class AuthController {
    constructor(userService, jwt) {
        this.userService = userService
        this.jwt = jwt
    }

    login = async (req, res, next) => {
        const { email, password } = req.body
        const user = await this.userService.getByEmail(email)

        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        
        let passwordMatch = await bcrypt.compareSync(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Password incorrect!' });
        }

        const token = this.jwt.sign({
            userId: user.id,
            email: user.email
        },
            process.env.SECRET,
            { expiresIn: '12h' }
        );

        return res.status(200).json({ token })
    }
}

module.exports = AuthController;