//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

//I had to indicate the database in the string

module.exports = {
  db: {
     uri: 'mongodb+srv://dran:Padme0107@cen3031-course-ta7bw.mongodb.net/Bootcamp3?retryWrites=true&w=majority', //place the URI of your mongo database here.
  }, 
  openCage: {
    key: 'c36eefeab20942a3ab5f97f3dc680623' //place your openCage public key here 
  },
  port: 8080
};