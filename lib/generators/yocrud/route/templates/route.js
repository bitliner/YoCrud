var ModelDao=require('../dao/'+<%= name %>+'Dao.js')

function <%= name %>Route=function(options){
	options.app.get('/'+<%= name %>,this.get)
	options.app.get('/'+<%= name %>+'/:_id',this.getSingle)
	options.app.put('/'+<%= name %>+'/:_id',this.update)
	options.app.post('/'+<%= name %>,this.save)
	
	
}

<%= name %>Route.prototype.get=function(req,res,next){
	ModelDao.query(req.query,function(err,docs){
		(err)?res.json(500,err):res.json(200,docs)
		})
}

<%= name %>Route.prototype.getSingle=function(req,res,next){
	ModelDao.query({_id:req.params._id},function(err,doc){
		(err)?res.json(500,err):res.json(200,doc)
		})
}

<%= name %>Route.prototype.remove=function(req,res,next){
	ModelDao.remove(req.body,function(err){
		(err)?res.json(500,err):res.json(200,{success:'ok'})
		})
}

<%= name %>Route.prototype.update=function(req,res,next){
	ModelDao.update(req.body._id,req.body,function(err){
		(err)?res.json(500,err):res.json(200,{success:'ok'})
		})
}

<%= name %>Route.prototype.save=function(req,res,next){
	ModelDao.save(req.body,function(err,doc){
		(err)?res.json(500,err):res.json(200,doc)
		})
}