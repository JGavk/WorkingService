'use strict';

/** @type {import('sequelize-cli').Migration} */
/* Juan- Definimos la creacion de tablas PostgreSQL mediante un protocolo 
   Sequalize de Node.Js  */

const workerTable = (queryInterface, Sequelize) => (
  queryInterface.createTable('worker',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    docuPic:{
      allowNull: true,
      type: Sequelize.STRING 
    },
    perfPicture: {
      allowNull: true,
      type : Sequelize.STRING
    },
    status: {
      type: Sequelize.ENUM('Active', 'Occupied'),
      allowNull: false,
      defaultValue: 'Active'
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
);

const userTable = (queryInterface, Sequelize) =>(
  queryInterface.createTable('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type : Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cellNumer: {
      type: Sequelize.STRING,
      allowNull: false
    },
    publicReceipt: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type : Sequelize.STRING,
      allowNull : false
    },
    paymentMethod: {
      type : Sequelize.STRING,
      allowNull : false
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
);

const paymentTable = (queryInterface, Sequelize) => (
  queryInterface.createTable('payment', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    qualification: {
      type: Sequelize.INTEGER,
      allowNull : true
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'cascade',
      onDelete: 'cascade',
      references: {
        model: 'user',
        key: 'id'
      }
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
);

const labourTable = (queryInterface, Sequelize) => (
  queryInterface.createTable('labour', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    labourName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    worker_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'cascade',
      onDelete: 'cascade',
      references: {
        model: 'worker',
        key: 'id'
      }
    },
    payment_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'cascade',
      onDelete: 'cascade',
      references: {
        model: 'payment',
        key: 'id'
      }
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
);

const billTable = (queryInterface, Sequelize) => (
  queryInterface.createTable('bill', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    payment_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'cascade',
      onDelete: 'cascade',
      references: {
        model: 'payment',
        key: 'id'
      }
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
);



module.exports = {
  up: (queryInterface, Sequelize) => (
    Promise.resolve()
      .then(() => workerTable(queryInterface, Sequelize))
      .then(() => userTable(queryInterface, Sequelize))
      .then(() => paymentTable(queryInterface, Sequelize))
      .then(() => labourTable(queryInterface, Sequelize))
      .then(() => billTable(queryInterface, Sequelize))
  ),
  down: queryInterface => (
    Promise.resolve()
      .then(() => queryInterface.dropTable('user'))
      .then(() => queryInterface.dropTable('worker'))
      .then(() => queryInterface.dropTable('payment'))
      .then(() => queryInterface.dropTable('labour'))
      .then(() => queryInterface.dropTable('bill'))
  )
};
