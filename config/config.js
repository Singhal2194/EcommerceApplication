/*globals module */
/*
    Module to define all the Configurations required
*/
let Config = function () {
	return {
		dbPath : "mongodb://localhost:27017/ElectronicStore", 
	};
};

module.exports = new Config();