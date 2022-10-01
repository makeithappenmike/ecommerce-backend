const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `product` model, which we set in `Product.js` as its `id` property
        model: 'product', // matches the model name
        key: 'id', // matches the column we want (the id column)
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `tag` model, which we set in `Tag.js` as its `id` property
        model: 'tag', // matches the model name
        key: 'id', // matches the column we want (the id column)
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
