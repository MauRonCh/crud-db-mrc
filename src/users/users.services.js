//? Files
const userControllers = require('./users.controllers');

const getAllUsers = (req, res) => {
    const data = userControllers.getAllUsers();
    res.status(200).json(data);
}
const getUserById = (req, res) => {
    const id = req.params.id;
    const data = userControllers.findUserById(id);
    if (data) { 
        res.status(200).json(data);
    } else {
        res.status(404).json( {message: 'Invalid ID'} );
    }
}
const postNewUser = (req, res) => {
    const obj = req.body;
    const data = userControllers.createNewUser(obj)
    
    if (data != null) {
        res.status(201).json(data);
    } else {
        res.status(400).json({
            message: 'Invalid data!',
            fields: {
                    first_name: 'string',
                    last_name: 'string',
                    email: 'string',
                    password: 'string',
                    birthday: 'YYYY/MM/DD'
                }
        })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    postNewUser
}