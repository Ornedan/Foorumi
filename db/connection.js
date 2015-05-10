var Sequelize = require('sequelize');

/*
var sequelize = new Sequelize('foorumi', '', '', {
  dialect: 'sqlite',
  storage: 'db/database.sqlite'
});
*/

var sequelize = new Sequelize('postgres://xwqkgndfrksljn:cVteesk6GSSxdHgyaBp39KXgZA@ec2-23-21-96-129.compute-1.amazonaws.com:5432/deetq662m406se', {
  dialect: 'postgres',
  protocol: 'postgres'
});


module.exports = {
  DataTypes: Sequelize,
  sequelize: sequelize
};
