var mongoose = require('mongoose')
,	Schema = mongoose.Schema
,	DB=require('./DB.js')


function <%= name %>Schema=new Schema({},{ strict:false  })

mongoose.model( '<%= name %>' , <%= name %>Schema )

function <%= name %>(){
	return DB.model( '<%= name %>' )
}
module.exports=<%= name %>
