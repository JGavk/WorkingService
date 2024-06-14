'use strict';

const { allow } = require('joi');
const { Sequelize } = require('sequelize');

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
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username:{
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    docu_pic:{
      allowNull: true,
      type: Sequelize.STRING 
    },
    perf_pic: {
      allowNull: true,
      type : Sequelize.STRING
    },
    status: {
      type: Sequelize.ENUM('Active', 'Occupied'),
      allowNull: false,
      defaultValue: 'Active'
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
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
      type : Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cell_number: {
      type: Sequelize.STRING,
      allowNull: false
    },
    public_receipt: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type : Sequelize.STRING,
      allowNull : false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
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

const qualificationTable = (queryInterface, Sequelize) => (
  queryInterface.createTable('qualification', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    rate: {
      allowNull: true,
      type: Sequelize.STRING
    },
    description: {
      allowNull: true,
      type: Sequelize.STRING
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
    labour_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false
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

const paymentTypeTable = (queryInterface, Sequelize) =>(
  queryInterface.createTable('payment_type',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    payment_method: {
      allowNull:false,
      type: Sequelize.STRING
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
)

const paymentTable = (queryInterface, Sequelize) => (
  queryInterface.createTable('payment', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    payment_type_id:{
      type: Sequelize.INTEGER,
      allowNull: true,
      onUpdate: 'cascade',
      onDelete: 'cascade',
      references: {
        model: 'payment_type',
        key: 'id'
      }
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      onUpdate: 'cascade',
      onDelete: 'cascade',
      references: {
        model: 'user',
        key: 'id'
      }
    },
    labour_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      onUpdate: 'cascade',
      onDelete: 'cascade',
      references: {
        model: 'labour',
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

const ruptureTable = (queryInterface, Sequelize) => (
  queryInterface.createTable('worker_by_labour', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
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
    labour_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'cascade',
      onDelete: 'cascade',
      references: {
        model: 'labour',
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
      .then(() => labourTable(queryInterface, Sequelize))
      .then(() => paymentTypeTable(queryInterface, Sequelize))
      .then(() => paymentTable(queryInterface, Sequelize))
      .then(() => billTable(queryInterface, Sequelize))
      .then(() => qualificationTable(queryInterface, Sequelize))
      .then(() => ruptureTable(queryInterface, Sequelize))
  ),
  down: queryInterface => (
    Promise.resolve()
      .then(() => queryInterface.dropTable('user'))
      .then(() => queryInterface.dropTable('worker'))
      .then(() => queryInterface.dropTable('labour'))
      .then(() => queryInterface.dropTable('payment_table'))
      .then(() => queryInterface.dropTable('payment'))
      .then(() => queryInterface.dropTable('bill'))
      .then(() => queryInterface.dropTable('qualification'))
      .then(() => queryInterface.dropTable('worker_by_labour'))
  )
};
