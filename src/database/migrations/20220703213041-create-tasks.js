module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description_task: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      created_task: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status_task: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('tasks');
  }
};
