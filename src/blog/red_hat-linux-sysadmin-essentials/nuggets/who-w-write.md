---
title: who, w, write
date: 2025-01-24
author: ChatGPT
---

### `who`

Shows who is logged into the system. It provides information about the current users, including their login name, terminal, login time, and from where they are logged in.

| Command  | Description                                                |
|----------|------------------------------------------------------------|
| `who`    | Displays a list of users currently logged into the system. |
| `who -u` | Displays the process ID (PID) of the user's login session. |
| `who -b` | Shows the system's last boot time.                         |
| `who -r` | Displays the current runlevel of the system.               |

### `w`

Displays detailed information about the users currently logged in and their activity. It shows the login name, the terminal they are using, their login time, idle time, and what they are doing.

| Command | Description                                                                 |
|---------|-----------------------------------------------------------------------------|
| `w`     | Displays a list of logged-in users and their activity.                      |
| `w -h`  | Suppresses the header row of the output.                                    |
| `w -u`  | Displays only users who have been idle for more than a specific time.       |
| `w -f`  | Shows only the users that are currently executing commands in the terminal. |

### `write`

Sends a message to another user’s terminal. It allows the user to communicate with others who are logged in, directly through their terminal.

| Command                  | Description                                                  |
|--------------------------|--------------------------------------------------------------|
| `write <username>`       | Starts a message session with the specified user.            |
| `write <username> <tty>` | Sends a message to a specific user on a particular terminal. |
| `Ctrl+D`                 | Ends the message session.                                    |

### Related

-   Kick off a user from `ssh` and laugh at their impending disconnection: <https://unix.stackexchange.com/a/622>

    1.  See who's logged into your machine.

        ```bash
        $ who -u
        mmrozek     pts/0        2025-01-27 08:50   .          2081 (192.168.122.1)
        ```

    1.  Laugh at their impending disconnection (this step is optional, but encouraged).

        ```bash
        $ echo "HAHAHAHAHAHAHAHA" | write mmrozek pts/0
        ```

    1.  Kill the corresponding process:

        ```bash
        $ kill -1 2081 # Send HUP signal to terminate connection gracefully. In case user is still connected, force the disconnection with `kill -9 2081`
        ```
