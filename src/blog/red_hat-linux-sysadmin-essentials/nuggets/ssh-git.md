---
title: SSH/Git
date: 2025-05-01
author: Steven Merino
---

# SSH

```bash
ssh -p 40351 <user>@<ip> # connect to server with given user and ip through port 40351
rsync -avz -e 'ssh -p 40351' <src> <user>@<ip>:~/ # send <src> to ~/ on remote server over SSH through port 40351
ssh -vT -i ~/.ssh/<id_key> git@github.com # test authentication to GitHub using a particular identity key
```

# Git

```bash
git init # initialize a local git repository
git add -A # track all changes made
git commit -m 'initial commit' # commit tracked changes
git remote <remote> add <remote-url> # add remote repository. <remote> is commonly set to "origin"
git remote -v # show information about remote repositories configured
git remote set-url <remote> <remote-url> # change the <remote-url> of <remote>
git push <remote> <branch> # push <branch> to <remote>
git pull # bring changes from remote
git reset --hard <commit-checksum> # erase all non commited changes
git clean -f -d # remove non tracked newly created files
git rebase -i <commit-checksum> # start interactive rebasing. CAREFUL only do this if you are experienced
git clone <remote-url> # clone contents of <remote-url> on CWD
git clone -c "core.sshCommand=ssh -i ~/.ssh/<id_key> -F /dev/null" <remote-url> # clone contents of <remote-url> on CWD using a particular identity key (remembers identity key for future operations that require authentication)
git show <commit-checksum>:<file> # show <file> of given commit
git restore <file> # revert changes made to <file>
```

> Identity key = private key

### How to authenticate through SSH?

**Personal access**

Grants read/write access to all repositories.

1.  Generate a public/private key pair.

    ```bash
    ssh-keygen -t ed25519 # Enter passphrase for added security
    ```

1.  On GitHub `Profile → Settings → SSH and GPG keys → New SSH key`. Enter content of public key `~/.ssh/*.pub`.

**Deploy keys**

Grants read/write(opt-in) access to a certain repository.

1.  Generate a public/private key pair.

    ```bash
    ssh-keygen -t ed25519 # Enter passphrase for added security
    ```

1.  On GitHub `Repository → Settings → Deploy Keys → Add deploy key`. Enter content of public key `~/.ssh/*.pub`.
