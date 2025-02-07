---
title: Users and groups
date: 2025-01-27
author: ChatGPT
from: markdown+pipe_tables
---

### `useradd`

Adds a new user to the system. The user will be assigned default values unless further options are specified.

| Command                         | Description                                         |
|---------------------------------|-----------------------------------------------------|
| `useradd <username>`         | Creates a user and their home directory.            |
| `useradd -s <shell> <username>` | Specifies a shell for the user (e.g., `/bin/bash`). |
| `useradd -g <group> <username>` | Assigns the user to a specific group.               |

To check user configuration, open the `/etc/passwd` file. The file uses a colon `:` as the delimiter between columns. Each line represents a user and contains the following information in tabular format:

| Col | Field Name     | Description                                                                        |
|:---:|----------------|------------------------------------------------------------------------------------|
|  1  | Username       | The login name of the user.                                                        |
|  2  | Password       | Often shown as `x`, indicating the password is stored securely in the shadow file. |
|  3  | UID (User ID)  | A unique numerical identifier assigned to the user.                                |
|  4  | GID (Group ID) | The primary group ID for the user, which links to an entry in `/etc/group`.        |
|  5  | User Info      | Optional field for additional user details, such as full name or description.      |
|  6  | Home Directory | The path to the user’s home directory.                                             |
|  7  | Shell          | The default shell assigned to the user (e.g., `/bin/bash`).                        |

### `userdel`

Removes a user from the system. This can optionally remove the user's home directory and mail spool.

| Command                 | Description                                                       |
|-------------------------|-------------------------------------------------------------------|
| `userdel <username>`    | Removes the user but keeps the home directory and files.          |
| `userdel -r <username>` | Removes the user and deletes their home directory and mail spool. |

### `groupadd`

Adds a new group to the system. It assigns default group values unless further options are specified.

| Command                         | Description                                   |
|---------------------------------|-----------------------------------------------|
| `groupadd <groupname>`          | Creates a new group with the given name.      |
| `groupadd -g <gid> <groupname>` | Specifies a group ID (GID) for the new group. |

To check group configuration, open the `/etc/group` file. The file defines groups on the system. It uses a colon `:` as a delimiter to separate the columns. Each line represents a group and contains the following information:

| Col | Field Name     | Description                                                                            |
|:---:|----------------|----------------------------------------------------------------------------------------|
|  1  | Group Name     | The name of the group.                                                                 |
|  2  | Password       | Usually marked as `x`, indicating the group’s password (if used) is stored separately. |
|  3  | GID (Group ID) | A unique numerical identifier assigned to the group.                                   |
|  4  | User List      | A comma-separated list of usernames who are members of the group.                      |

Now the headers are more descriptive, aligning with the idea of explaining each part in a clear way!

### `groupdel`

Removes a group from the system.

| Command                | Description                                                 |
|------------------------|-------------------------------------------------------------|
| `groupdel <groupname>` | Deletes the group but does not remove users assigned to it. |

### `usermod`

Modifies an existing user's properties such as their group, home directory, and shell.

| Command                             | Description                                                                     |
|-------------------------------------|---------------------------------------------------------------------------------|
| `usermod -aG <group> <username>`    | Adds the user to a supplementary group without removing them from other groups. |
| `usermod -d <new_home> <username>`  | Changes the user’s home directory.                                              |
| `usermod -s <new_shell> <username>` | Changes the user’s login shell.                                                 |

### `passwd`

Changes a user's password or locks/unlocks the account.

| Command                | Description                                  |
|------------------------|----------------------------------------------|
| `passwd <username>`    | Changes the password for the specified user. |
| `passwd -l <username>` | Locks the user's account.                    |
| `passwd -u <username>` | Unlocks a locked user account.               |

### `su`

Switches the user to another account, usually the root user. It is often used to gain administrative privileges.

| Command         | Description                                            |
|-----------------|--------------------------------------------------------|
| `su <username>` | Switches to the specified user’s account.              |
| `su -`          | Switches to the root user and loads their environment. |

### `groups`

Displays the groups that the current user or a specified user belongs to.

| Command             | Description                              |
|---------------------|------------------------------------------|
| `groups`            | Shows the groups for the current user.   |
| `groups <username>` | Shows the groups for the specified user. |
