/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Post = app.model.define('post', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'user_id',
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
    tableName: 'post',
  });

  Post.associate = function() {
    app.model.Post.belongsTo(app.model.User, { as: 'user', foreignKey: 'user_id' });
  };

  Post.findByIdWithUser = async function(id, userId) {
    return await this.findOne({
      where: { id, user_id: userId },
    });
  };

  return Post;
};
