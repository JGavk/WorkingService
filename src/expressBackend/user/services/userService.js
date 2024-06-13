const UserPersistence = require('../persistences/user.persistence');
const { User } = require('../models/user.model');

const userPersistence = new UserPersistence({ User });

const UserService = {
    createUser: async (data) => {
        try {
            const user = await userPersistence.create(data);
            return user;
        } catch (err) {
            throw new Error('Error creating user: ' + err.message);
        }
    }
};

module.exports = UserService;