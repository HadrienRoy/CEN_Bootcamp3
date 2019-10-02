/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema for the data in the listings.json file that will define how data is saved in your database */
var listingSchema = new Schema({
  code: {type: String, required: true},
  name:	{type: String, required: true},
  coordinates:  {
	latitude:  Number,
	longitude: Number
  },
  address: String,
  created_at: Date,
  updated_at: Date
});


/* Create a 'pre' function that adds the updated_at (and created_at if not already there) property  */
listingSchema.pre('save', function(next) {
  var currentDate = new Date();  // get current date
  this.updated_at = currentDate; // change updated_at field to current date

  if (!this.created_at)
	this.created_at = currentDate;

  next();

});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
