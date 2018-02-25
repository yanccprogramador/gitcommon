#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const git = require('./git');

program
  .version(pkg.version)
  .option('-I, --init <repo>', 'Init a git repo and push it')
  .option('-c, --commit', 'Commit and push the repos update')
  .option('-m, --message <message>', 'Commit message(Default:commit with gitutils)')
  .option('-r, --remote <remote>', 'Repo remote (Default:origin)')
  .option('-o, --options <options>', 'Push options (optional)')
  .option('-b, --branch <branch> ', 'Repo branch (Defaults(:master) ')
  .option('-p, --pull', 'Pull the repos update')
  .description('A simple git cli tool')
  .parse(process.argv);

if (program.init)
  git.initializeRepo(program.init)
if (program.commit)
  git.commitPush(program.message, program.remote, program.branch, program.options)
if (program.pull)
  git.pull(program.remote, program.branch);
