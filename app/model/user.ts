/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at',
    },
  }, {
    tableName: 'user',
  });

  User.associate = function() {
    app.model.User.hasMany(app.model.Post, { as: 'post' });
  };

  return User;
};
