'use strict';
/** @type {import('sequelize-cli').Migration} */

const populatePaymentTypeTable = (queryInterface) => {
  queryInterface.bulkInsert('payment_type', [
    {
      id: 1,
      payment_method: 'Visa',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      payment_method: 'Master Card',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 3,
      payment_method: 'PayPal',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 4,
      payment_method: 'American Express',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 5,
      payment_method: 'Discover',
      created_at: new Date(),
      updated_at: new Date()
    },
  ]);
};

module.exports = {
  up: (queryInterface, Sequelize) => (
    Promise.resolve()
      .then(() => populatePaymentTypeTable(queryInterface))
  )
};
