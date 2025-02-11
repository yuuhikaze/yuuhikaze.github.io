---
title: TLDR
date: 2025-02-07
author: Steven Merino
---

### Software Management

```bash
rpm -qa # list all installed packages
dnf update # update all installed packages
dnf search <package_name> # search for package
dnf install <package_name> # install package
dnf list installed # list all installed packages
dnf info installed # list all installed packages along descriptive info
dnf info <package_name> # show descriptive info of package
dnf remove <package_name> # uninstall package
```

### Access Control

```bash
sudo useradd <username> # creates a user
sudo userdel -r <username> # deletes a user (-r deletes the user's home directory)
sudo usermod -aG wheel <username> # enables user to escale to root
sudo passwd <username> # changes user password
sudo su - # change to root user
su <username> # change to user with <username>
```

### Services

```bash
sudo systemctl start <service> # starts a service
sudo systemctl stop <service> # stops a service
sudo systemctl restart <service> # restarts a service
sudo systemctl enable <service> # enables a service to start on boot
sudo systemctl disable <service> # disables a service to start on boot
sudo systemctl list-units --type=service # list all services with their status
```

### Process Control

```bash
ps -axf # show process tree
pidof <p_name> # get process ID given a process name
kill -<int> <pid> # kill process with signal <int>
pkill <p_name> # kill processes associated with <p_name>
```

### Network

```bash
ip a # show internet info
ss -tulnp # display listening TCP and UDP sockets with numeric addresses, ports and associated PID's.
```

### File System

```bash
ls -ltha # list all files (hidden too) under CWD with long listing format, sorted by newest modified, with human readable sizes
cd - # cd to previous directory
cd # cd to home
rsync -avz <source> <target> # copy files from source to target
rsync -avz <source> <user>@<ip>:<target> # copy files from source to target directory of another machine over ssh
tar --use-compress-program=<compress_program> -cf <compressed_archive_name> <source> # archive and compress source into file <compressed_archive_name>
pwd # prints current working directory
```
