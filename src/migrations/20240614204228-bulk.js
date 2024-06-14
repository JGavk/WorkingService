'use strict';
/** @type {import('sequelize-cli').Migration} */

const populateLabourTable = (queryInterface) => {
  queryInterface.bulkInsert('labour', [
    {
      id: 1,
      labour_name: 'Policia',
      price: 66632.2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      labour_name: 'Medico',
      price: 100233.4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 3,
      labour_name: 'Chef',
      price: 23233.4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 4,
      labour_name: 'Apicultor',
      price: 633.4,
      created_at: new Date(),
      updated_at: new Date()
    },
    
    {
      id: 5,
      labour_name: 'Camarero',
      price: 7973.4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 6,
      labour_name: 'Mecanico',
      price: 400.2,
      created_at: new Date(),
      updated_at: new Date()
    },
    
  ]);
};

module.exports = {
  up: (queryInterface, Sequelize) => (
    Promise.resolve()
      .then(() => populateLabourTable(queryInterface))
  )
};
