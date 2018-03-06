const expect = require('chai').expect;
const sinon= require('sinon');
const exec = require('child_process').exec;
const gitUtils = './src/main.js';
const pkg = require('../package.json');


describe('Main cli', () => {
  it('should log A simple git cli tool when --help args passed',
    () => {
      exec(`${gitUtils} --help`,(error,stdout,stderr)=>{
         expect(stdout.includes('A simple git cli tool')).to.be.true;
      });
    });

    it(`should returns ${pkg.version} when --version args passed`,
    () => {
      exec(`${gitUtils} --version`,(error,stdout,stderr)=>{
         expect(stdout.replace('\n','')).to.be.eql(pkg.version);
      });
    });
})
