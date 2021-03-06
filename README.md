# Git Common CLI

> A CLI to simplify your git push init(with push) and pull.

### Installing

```
$ npm install -g gitcommon
```

### How to use

```sh
Usage: gitcommon [options]

  A simple git cli tool


  Options:

    -V, --version            output the version number
    -I, --init <repo>        Init a git repo and push it
    -c, --commit             Commit and push the repos update
    -m, --message <message>  Commit message(Default:commit with gitutils)
    -r, --remote <remote>    Repo remote (Default:origin)
    -o, --options <options>  Push options (optional)
    -b, --branch <branch>    Repo branch (Defaults(:master)
    -p, --pull               Pull the repos update
    -h, --help               output usage information

```
##Useful informations
```
  When you use commit, in git command line you use git add . git commit -m <message> and git push

  When you use pull , in git command line you use only git pull

  When you use init, in git command line you use git init git add . git commit -m "initial commit" git add remote origin <repo> and git push
  ```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
