
var Model=require('../model/'+<%= name %>+'js')


function <%= name%>Dao(){}

<%= name%>Dao.prototype.save(obj, cb){
	var model=new Model(obj)
	model.save(cb)
}

<%= name%>Dao.prototype.query(query, cb){
	Model.find(query,cb)
}

<%= name%>Dao.prototype.get(query, cb){
	Model.findOne(query,cb)
}

<%= name%>Dao.prototype.update(query, update, cb){
	Model.update(query, update,cb)
}

<%= name%>Dao.prototype.remove(query,cb){
	Model.remove(query,cb)
}

module.exports=<%= name%>Dao

