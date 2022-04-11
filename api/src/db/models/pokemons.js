'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pokemons extends Model {
    static associate(models) {
      Pokemons.belongsToMany(models.Types, { through: 'Pokemons_Types' })
    }
  }
  Pokemons.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'This pokemon its already exist'
      },
      validate: {
        notNull: {
          msg: 'Cannont be null'
        },
        notEmpty: {
          msg: 'Cannont be empty',
        },
      },
    },
    hp: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: 'Must be a integer',
        },
        notNull: {
          msg: 'Cannont be null'
        },
        notEmpty: {
          msg: 'Field is required'
        },
        min: {
          args: [10]
        },
      },
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: 'Must be a integer',
        },
        notNull: {
          msg: 'Cannont be null'
        },
        notEmpty: {
          msg: 'Field is required'
        },
        min: {
          args: [0],
          msg: 'The min value is 0'
        }
      },
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: 'Must be a integer',
        },
        notNull: {
          msg: 'Cannont be null'
        },
        notEmpty: {
          msg: 'Field is required'
        },
        min: {
          args: [0],
          msg: 'The min value is 0'
        }
      },
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: 'Must be a integer',
        },
        notNull: {
          msg: 'Cannont be null'
        },
        notEmpty: {
          msg: 'Field is required'
        },
        min: {
          args: [0],
          msg: 'The min value is 0'
        }
      },
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: 'Must be a integer',
        },
        notNull: {
          msg: 'Cannont be null'
        },
        notEmpty: {
          msg: 'Field is required'
        },
        min: {
          args: [0],
          msg: 'The min value is 0'
        }
      },
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: 'Must be a integer',
        },
        notNull: {
          msg: 'Cannont be null'
        },
        notEmpty: {
          msg: 'Field is required'
        },
        min: {
          args: [0],
          msg: 'The min value is 0'
        }
      },
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          msg: 'Must be a valid url'
        },
        notNull: {
          msg: 'Cannont be null'
        },
        notEmpty: {
          msg: 'Field is required'
        },
      },
      allowNull: false,
    },
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Pokemons',
    timestamps: false,
  })
  return Pokemons
}