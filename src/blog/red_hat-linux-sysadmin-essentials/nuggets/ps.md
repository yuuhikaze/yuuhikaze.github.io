---
title: ps
date: 2025-01-27
author: ChatGPT
---

Displays information about running processes on a system. It provides details like the process ID (PID), the terminal associated with the process, the CPU and memory usage, and the command that started the process. It is useful for monitoring processes and diagnosing system performance.

| Command           | Description                                                                                                                       |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| ps                | Displays a snapshot of processes running in the current terminal session.                                                         |
| ps aux            | Shows all processes running on the system. The components are:                                                                    |
|                   | - `a`: Eliminates the BSD restriction "only yourself" to include processes from other users.                                      |
|                   | - `u`: Uses a user-oriented format, displaying the process owner, CPU, and memory usage.                                          |
|                   | - `x`: Removes the BSD restriction "must have a tty" to include processes that don't have a controlling terminal.                 |
| ps -f             | Lists processes in full format, showing more detailed info like the parent process ID (PPID).                                     |
| ps -u <username>  | Shows processes running under a specific user, based on the provided username.                                                    |
| ps -p <PID>       | Displays details for a single process identified by its Process ID (PID).                                                         |
| ps -l             | Lists processes in a long format, showing extra details like process priority, flags, and time.                                   |
| ps -c <time>      | Shows processes that were started at a specific time. For example, `ps -c 12:00` lists processes started at 12:00.                |
| ps --sort=<field> | Sorts the output by a specified field (e.g., `ps --sort=pid` sorts by process ID).                                                |
| ps -o <format>    | Allows the user to customize the output format by specifying a format string (e.g., `ps -o pid,comm` shows only PID and command). |
| ps -T             | Shows information about threads instead of processes, useful for multi-threaded programs.                                         |
