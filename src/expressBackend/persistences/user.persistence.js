class UserPersistence{

    constructor({User, Payment}){
        this.User = User;
        
    }

    create(data){
        return this.User.create(data);
    }
    findOne(cond, config) {
        return this.User.findOne({
          raw: true,
          nest: true,
          ...cond,
          ...config,
          include: [
            {
              model: this.Payment,
              required: true,
              where: { active: true }
            }
          ]
        });
    }
}

module.exports = UserPersistence;