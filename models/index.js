const User = require("./User");
const Blog = require("./Blog");

User.hasMany(Blog);
Blog.belongsTo(User,{
    onDelete:"CASCADE"
})


module.exports = {
    User,
    Blog
}