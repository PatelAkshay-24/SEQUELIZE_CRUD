module.exports = (sequelize,DataTypes) => {

const Contact = sequelize.define(
  'Contacts',
  {
    // Model attributes are defined here

    peramnent_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_address: {
      type: DataTypes.STRING,
      
    },
  },
  {
    // Other model options go here
    
    sequelize,
    modelName:'Contact'

  }
    
)
return Contact
  }
