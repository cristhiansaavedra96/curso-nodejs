import usersServices from "../services/users.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await usersServices.getUsers();
        res.send(users);
    } catch (error) {
        res.status(500).send('error');
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const user = await usersServices.getUserById(id);
        res.send(user);
    } catch (error) {
        res.status(500).send('error');
    }
}

const createUser = async (req, res) => {
    try {
        let user = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            telefono: req.body.telefono,
            nombre: req.body.nombre
        }
        await usersServices.createUser(user);

        res.send('user creado')
    } catch (error) {
        res.status(500).send('error');
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await usersServices.deleteUser(id);

        res.send('user eliminado')
    } catch (error) {
        res.status(500).send('error');
    }
}

const usersController = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
}

export default usersController;