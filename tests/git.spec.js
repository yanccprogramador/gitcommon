const expect = require('chai').expect;
const sinon= require('sinon');
const sinonChai= require('sinon-chai');
const chai=require('chai');
const exec = require('child_process').exec;
const gitUtils = './src/main.js';

const git= require('../src/git');
chai.use(sinonChai);

describe('Git functions', () => {
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
})
