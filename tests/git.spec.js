const expect = require('chai').expect;
const sinon= require('sinon');
const sinonChai= require('sinon-chai');
const chai=require('chai');
const exec = require('child_process').exec;
const gitUtils = './src/main.js';

const git= require('../src/git');
chai.use(sinonChai);

describe('Git functions', () => {
  let consoleStub;
  beforeEach(()=>{
    consoleStub= sinon.stub(console,'log');
  });
  afterEach(()=>{
    console.log.restore()
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
         expect(stdout.replace('\n','')).to.contains('pull done');
      });
    });
    it(`should returns add commit and push done when -c args passed`,
    () => {
      exec(`${gitUtils} -c`,(error,stdout,stderr)=>{
         expect(stdout.replace('\n','')).to.be.contains('add commit and push done');
      });
    });
})
