
var util   = require('util');
var yeoman = require('yeoman');
var path=require('path')

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
	this.log.writeln('Creating model for '+this.name)
	this.template('model.js', path.join('model', this.name+'.js' ),{name:this.name} )	
};
