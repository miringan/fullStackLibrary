const User = require('./User');
const Book = require('./Book');

User.hasMany(Book, {
    foreignKey: 'user_name',
});

Book.belongsTo(User, {
    foreignKey: 'user_name',
});

module.exports = { User, Book };