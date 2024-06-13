
class UserService {
    constructor(UserPersistence) {
        this._UserPersistence = UserPersistence;
    }

    async createUser(payload) {
        console.log("PAYLOAD  ", payload)
        const newUser = this._UserPersistence.create(payload);
        return newUser;
    }
}

module.exports = UserService; 