class UserService {
    constructor(UserPersistence) {
        this._UserPersistence = UserPersistence;
    }

    async createUser(payload) {
        console.log("PAYLOAD  ", payload)
        const newUser = this._UserPersistence.create(payload);
        return newUser;
    }
    async signIn(payload){
        console.log("Payload", payload)
        try{
            const { email, password } = payload;
            const user = await this._UserPersistence.findByEmail(email);
            if (!user) {
                throw new Error('Usuario no encontrado');
            }
            if (password !== user.password) {
                throw new Error('Contraseña incorrecta');
            }
            return user;
        }catch(error){
            throw new Error('Error signin'+ error.message);
        }
    }
}

module.exports = UserService; 