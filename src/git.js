const gitsimple = require('simple-git')('.');


function commitPush(commitmessage = "commit with gitutils", remote = "origin", branch = "master", options) {
  return gitsimple.add('.', () => {
    gitsimple.commit(commitmessage, () => {
      if (options)
          gitsimple.push(remote, branch, options, () => {
            console.log("add commit and push done");
          })
        else
          gitsimple.push(remote, branch, () => {
            console.log("add commit and push done");
          })
    });

  });
}

function pull(remote = "origin", branch = "master") {
  return gitsimple.pull(remote, branch, () => {
    console.log('pull done');
  });
}

function initializeRepo(repo) {
  return gitsimple.init(() => {
    gitsimple.add('.', () => {
      gitsimple.commit('initial commit ', () => {
        gitsimple.addRemote('origin', repo, () => {
          gitsimple.push('origin', 'master', '-u', (err, res) => {
            if (err) console.error(err);return;

            console.log("successful init repository");
          })
        })
      });

    });
  })
}

module.exports = { commitPush: commitPush, pull: pull, initializeRepo: initializeRepo };
