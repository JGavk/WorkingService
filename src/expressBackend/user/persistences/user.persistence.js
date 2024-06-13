class UserPersistence{

    constructor({User, Payment}){
        this._User = User;
    }

    create(data){
      const { sequelize } = this._User;
      console.log("SEQUELIZE   ", sequelize)
      return this._User.create(data);
    }
    
    findOne(cond, config) {
        return this._User.findOne({
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