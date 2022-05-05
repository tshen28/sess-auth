const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
<<<<<<< HEAD
const bcrypt = require('bcrypt');
=======
const bcrypt = require("bcrypt")
>>>>>>> 0611e61536a7ba4760ef6f41e4e9f5a026bafae1

class User extends Model {}

User.init({
    // add properites here, ex:
    username: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8]
        }
    }
<<<<<<< HEAD
},
{
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 5);
        return newUserData;
      }
    },
    sequelize
=======
},{
    hooks:{
        beforeCreate:async userdata=>{
            userdata.password = await bcrypt.hash(userdata.password,5)
            return userdata
        }
    },
    sequelize,
>>>>>>> 0611e61536a7ba4760ef6f41e4e9f5a026bafae1
});

module.exports=User