const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {

  async prompting() {
    const answers = await this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname // Default to current folder name
    }, {
      type: 'confirm',
      name: 'cool',
      message: 'Would you like to enable gulp?'
    }]);

    this.directoryName = answers.name;
    this.log('App name', answers.name);
    this.log(this.directoryName);

    mkdirp(answers.name, function (err) {
      if (err) console.error(err)
      else console.log(answers.name, 'directory has been created')
    });
  }
}