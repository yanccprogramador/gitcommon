'use strict';

var gitsimple = require('simple-git')('.');

function commitPush() {
  var commitmessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "commit with gitutils";
  var remote = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "origin";
  var branch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "master";
  var options = arguments[3];

  return gitsimple.add('.', function () {
    gitsimple.commit(commitmessage, function () {
      if (options) gitsimple.push(remote, branch, options, function () {
        return "add commit and push done";
      });else gitsimple.push(remote, branch, function () {
        return "add commit and push done";
      });
    });
  });
}

function pull() {
  var remote = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "origin";
  var branch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "master";

  return gitsimple.pull(remote, branch, function (error, success) {
    if (error) console.log(error);

    console.log('pull done');
  });
}

function initializeRepo(repo) {
  return gitsimple.init(function () {
    gitsimple.add('.', function () {
      gitsimple.commit('initial commit ', function () {
        gitsimple.addRemote('origin', repo, function () {
          gitsimple.push('origin', 'master', '-u', function () {
            return "successful init repository";
          });
        });
      });
    });
  });
}

module.exports = { commitPush: commitPush, pull: pull, initializeRepo: initializeRepo };