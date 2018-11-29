const Generator = require('yeoman-generator'),
      mkdirp = require('mkdirp'),
      clone = require('git-clone'),
      nodegit = require('nodegit'),
      path = require('path');

module.exports = class extends Generator {
  initializing() {
    // this.composeWith(require.resolve('../gulp'));
    // this.composeWith(require.resolve('../newp'));
    this.composeWith(require.resolve('../workflow'));
    // this.composeWith(require.resolve('../changedirectory'));
  }
};