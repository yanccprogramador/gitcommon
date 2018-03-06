const expect = require('chai').expect;
const sinon= require('sinon');
const exec = require('child_process').exec;
const gitUtils = './src/main.js';

const git= require('../src/git');


describe('Git functions', () => {
  let consoleStub;
  beforeEach(()=>{
    consoleStub= sinon.stub(console,'log')
  });
  afterEach(()=>{
    consoleStub.restore()
  });
  it('should exist commitPush function',
    () => {
      expect(git.commitPush).to.exist;
    });

    it('should exist pull function',
    () => {
      expect(git.pull).to.exist;
    });
    it('should exist initializeRepo function',
    () => {
      expect(git.initializeRepo).to.exist;
    });

    it(`should returns pull done when --pull args passed`,
    () => {
      exec(`${gitUtils} --pull`,(error,stdout,stderr)=>{
         expect(stdout.replace('\n','')).to.be.eql('pull done');
      });
    });
    it(`should returns add commit and push done when --c args passed`,
    () => {
      exec(`${gitUtils} -c`,(error,stdout,stderr)=>{
         expect(stdout.replace('\n','')).to.be.eql('add commit and push done');
      });
    });
    it(`should returns pull done when --pull args passed`,
    () => {
      exec(`${gitUtils} --pull`,(error,stdout,stderr)=>{
         expect(stdout.replace('\n','')).to.be.eql('pull done');
      });
    });
})
