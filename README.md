# YoCrud
It is a yeoman generator to generate automatically code about dao, routes, angular resources, angular controllers, mongoose models.

## Installation

First install yeoman

`npm install -g yeoman`

Then create a Gruntfile.js needed by yeoman to find yocrud

`touch Gruntfile.js` 

Finally install yocrud

`npm install yocrud`

## Usage

You can choose to invoke a single generator among 4 generators: dao, route, angular, model or to invoke them all in series.

If you want to invoke all generatos run

`yeoman init yocrud <name>`

where `<name>` is the name of your app.

For example, if you mant an app to handle books, run `yeoman init yocrud Book`. 

Otherwise you can invoke a single generator:

`yeoman init yocrud:<name of generator> <name>`

where `<name of a generator>` can be dao, angular, route or model.

Below you can find documentation about the single generators.

### Model generator

This generator creates a file that contains model declarations for mongoose. Tipically, if you run `yeoman init yocrud:model Book`, it generates the file model/Book.js and its content will be:

```
var mongoose = require('mongoose')
,       Schema = mongoose.Schema
,       DB=require('./DB.js')

function BookSchema=new Schema({},{ strict:false  })

mongoose.model( 'Book' , BookSchema )

function Book(){
        return DB.model( 'Book' )
}
```  

### Dao generator
It generates code to query and save a model to MongoDb via mongoose. 

If you run `yeoman init yocrud:dao Book` it will generate the file dao/BookDao.js and its content will be

```

var Model=require('../model/'+Book+'js')


function BookDao(){}

BookDao.prototype.save(obj, cb){
	var model=new Model(obj)
	model.save(cb)
}

BookDao.prototype.query(query, cb){
	Model.find(query,cb)
}

BookDao.prototype.get(query, cb){
	Model.findOne(query,cb)
}

BookDao.prototype.update(query, update, cb){
	Model.update(query, update,cb)
}

BookDao.prototype.remove(query,cb){
	Model.remove(query,cb)
}

module.exports=BookDao
```

### Route generator
It generates code that consists in http handlers (according to REST style).
 
If you run `yeoman init yocrud:route Book` it will generates route/BookRoute.js whose content is:

```
var ModelDao=require('../dao/'+Book+'Dao.js')

function BookRoute=function(options){
	options.app.get('/'+Book,this.get)
	options.app.get('/'+Book+'/:_id',this.getSingle)
	options.app.put('/'+Book+'/:_id',this.update)
	options.app.post('/'+Book,this.save)	
}

BookRoute.prototype.get=function(req,res,next){
	ModelDao.query(req.query,function(err,docs){
		(err)?res.json(500,err):res.json(200,docs)
		})
}

BookRoute.prototype.getSingle=function(req,res,next){
	ModelDao.query({_id:req.params._id},function(err,doc){
		(err)?res.json(500,err):res.json(200,doc)
	})
}

BookRoute.prototype.remove=function(req,res,next){
	ModelDao.remove(req.body,function(err){
		(err)?res.json(500,err):res.json(200,{success:'ok'})
		})
}

BookRoute.prototype.update=function(req,res,next){
	ModelDao.update(req.body._id,req.body,function(err){
		(err)?res.json(500,err):res.json(200,{success:'ok'})
	})
}

BookRoute.prototype.save=function(req,res,next){
	ModelDao.save(req.body,function(err,doc){
		(err)?res.json(500,err):res.json(200,doc)
	})
}

```

## TODO

* example app
* better integration with angular
* USAGE files
* generation of a index.html page 
* better integration with bootstrap
* better README.md
* testing
