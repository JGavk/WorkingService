class UserPersistence{

    constructor({User, PaymentType}){
        this._User = User;
        this._PaymentType = PaymentType
    }

    create(data){
      const { sequelize } = this._User;
      console.log("SEQUELIZE   ", sequelize)
      return this._User.create(data);
    }
    createUserPayment(data){
      return this._PaymentType.create(data);
    }
    findByEmail(email) {
      return this._User.findOne({
          where: { email },
          raw: true,
          nest: true
      });
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