import UserModel from '../models/User.js';
const UserController = {
    async register(req, res) {
        try {
            const user = await UserModel.create(req.body);
            res.status(201).send(user)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async login(req, res) {
        try {
            const user = await UserModel.checkCredentials(req.body);
            if (!user) {
                return res.status(400).send({
                    message: 'Wrong Credentials'
                });
            }
            const token = user.generateAuthToken();
            res.send({ user, token });
        } catch (error) {
            res.status(400).send(error)
        }
    }
}

export default UserController;