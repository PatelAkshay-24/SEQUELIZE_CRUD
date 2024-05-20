module.exports = (sequelize,DataTypes)=>{

const User = sequelize.define('User',
  {
    // Model attributes are defined here
    
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,

    },
  },
  {
    // Other model options go here
    
    sequelize, 
    modelName: 'User',  
  },
  
)

return User;
}
