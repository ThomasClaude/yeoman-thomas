const Generator = require('yeoman-generator'),
      clone = require('git-clone'),
      nodegit = require('nodegit'),
      path = require('path'),
      process = require('process');

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
    // this.log(this.directoryName);

    // mkdirp(answers.name, function (err) {
      // if (err) console.error(err)
      // else console.log(answers.name, 'directory has been created')
    // });

  }

  clone() {
    const cloning = new Promise((resolve) => {
      // Cloning my workflow on https://github.com/ThomasClaude/workflow
      const url = "https://github.com/ThomasClaude/workflow.git",
        local = `${this.directoryName}`,
      cloneOpts = {};

      nodegit.Clone(url, local, cloneOpts).then(function (repo) {
        console.log("Cloned " + path.basename(url) + " to " + repo.workdir());

        // console.log(`Starting directory: ${process.cwd()}`);
        // try {
        //   process.chdir(repo.workdir());
        //   cd`${process.cwd()}`
        //   console.log(`New directory: ${process.cwd()}`);
        // } catch (err) {
        //   console.error(`chdir: ${err}`);
        // }
        console.log(`You can now use do $ cd ${local} then $ npm install`);
      }).catch(function (err) {
        console.log(err);
      });
      // resolve();
    });

    // cloning.then(()=>{
    //   console.log(`Starting directory: ${process.cwd()}`);
    //   try {
    //     process.chdir(`./${this.directoryName}`);
    //     console.log(`New directory: ${process.cwd()}`);
    //   } catch (err) {
    //     console.error(`chdir: ${err}`);
    //   }
    // });
  }
}
