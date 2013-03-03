
var util   = require('util');
var yeoman = require('yeoman');
var path=require('path');

module.exports = Generator;

function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  // this is the default. Uncomment and change the path if you want
  // to change the source root directory for this generator.
  //
  // this.sourceRoot(path.join(__dirname, 'templates'));
    this.hookFor('fastcrud',{as:'dao'})
    this.hookFor('fastcrud',{as:'model'})
    this.hookFor('fastcrud',{as:'route'})
    this.hookFor('fastcrud',{as:'angular'})


}

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.createSomething = function() {
	this.log.writeln('in fastcrud create something')
};
