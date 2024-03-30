module.exports = (sequelize, Sequelize) => {
    const Request = sequelize.define("todo_tb", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updated_at: {
        type: Sequelize.DATE,
        field: 'updated_at'
      },
    });
  
    return Request;
  };