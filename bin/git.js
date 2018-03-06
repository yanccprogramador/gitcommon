'use strict';

var gitsimple = require('simple-git')('.');

function commitPush() {
  var commitmessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "commit with gitutils";
  var remote = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "origin";
  var branch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "master";
  var options = arguments[3];

  return gitsimple.add('.', function () {
    gitsimple.commit(commitmessage, function (err, res) {
      if (err) console.error(err);return;
      if (options) gitsimple.push(remote, branch, options, function () {
        console.log("add commit and push done");
      });else gitsimple.push(remote, branch, function () {
        console.log("add commit and push done");
      });
    });
  });
}

function pull() {
  var remote = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "origin";
  var branch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "master";

  return gitsimple.pull(remote, branch, function (error, success) {
    if (error) console.log(error);return;

    console.log('pull done');
  });
}

function initializeRepo(repo) {
  return gitsimple.init(function () {
    gitsimple.add('.', function () {
      gitsimple.commit('initial commit ', function (err, res) {
        if (err) console.error(err);return;
        gitsimple.addRemote('origin', repo, function () {
          gitsimple.push('origin', 'master', '-u', function (err, res) {
            if (err) console.error(err);return;
            console.log("successful init repository");
          });
        });
      });
    });
  });
}

module.exports = { commitPush: commitPush, pull: pull, initializeRepo: initializeRepo };