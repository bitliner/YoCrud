
var util   = require('util')
, yeoman = require('yeoman')
, path=require('path')

module.exports = Generator;

function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  // this is the default. Uncomment and change the path if you want
  // to change the source root directory for this generator.
  //
  // this.sourceRoot(path.join(__dirname, 'templates'));

}

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.createSomething = function() {
	this.log.writeln('Creating angular scaffolding for '+this.name)
	
    this.template('app.js', path.join('public', 'app.js' ),{name:this.name} )
    this.template('controller.js', path.join('public/controllers', this.name + '.js' ),{name:this.name} )
    this.template('view-list.js', path.join('public/views', this.name + '-list.html' ),{name:this.name} )
    this.template('view-details.js', path.join('public/views', this.name + '-details.html' ),{name:this.name} )
};
