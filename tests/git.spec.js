const expect = require('chai').expect;

const git= require('../src/git');


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
