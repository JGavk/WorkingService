/* Añadimos seguridad y entramos a modo estricto de JavaScript */
'use strict' ;
const { validate } = require("json-schema");
 /** @type {import('sequelize-cli').Migration} */
/* Juan- Definimos la creacion de tablas PostgreSQL mediante un protocolo 
   Sequalize de Node.Js                                                   */
const workerTable = (queryInterface, Sequelize) => (
    queryInterface.createTable('worker',{
        wid: {
            allowNull : false,
            autoIncrement : true,
            primaryKey : true,
            type : Sequelize.INTEGER
        },
        docuPic:{
            allowNull : true,
            type : Sequelize.BLOB 
        },
        perfPicture: {
            allowNull : true,
            type : Sequelize.BLOB
        },
        status : {
            type : Sequelize.ENUM('Active', 'Occupied'),
            allowNull : false,
            defaultValue : 'Active'
        },
        rating : {
            type : Sequelize.INTEGER,
            allowNull : true,
            validate : {
                min:0,
                max:5
            }
        }
    })
);

const labourTable = (queryInterface, Sequelize) => (
    queryInterface.createTable('labour', {
        lid : {
            allowNull : false,
            autoIncrement : true,
            primaryKey : true,
            type : Sequelize.INTEGER
        },
        labourName : {
            type : Sequelize.STRING,
            allowNull : false
        },
        price : {
            type : Sequelize.FLOAT,
            allowNull: false
        }
    })
);