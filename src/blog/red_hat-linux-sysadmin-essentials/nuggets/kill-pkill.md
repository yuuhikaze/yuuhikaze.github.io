---
title: kill, pkill
date: 2025-01-27
author: ChatGPT
---

### `kill`

Sends a signal to a process, instructing it to terminate. By default, it sends the TERM signal (signal 15), which asks the process to gracefully shut down. The user can also specify different signals if needed.

| Command                | Description                                                                       |
|------------------------|-----------------------------------------------------------------------------------|
| `kill <PID>`           | Terminates the process with the given Process ID (PID).                           |
| `kill -9 <PID>`        | Forcefully terminates the process, even if it doesn't respond to the TERM signal. |
| `kill -15 <PID>`       | Sends the TERM signal explicitly (same as default).                               |
| `kill -l`              | Lists all available signal names.                                                 |
| `kill -<signal> <PID>` | Terminates the process with a specified signal (e.g., `kill -HUP <PID>`).         |

### `pkill`

Sends a signal to processes based on their name or other attributes.

| Command                  | Description                                                                |
|--------------------------|----------------------------------------------------------------------------|
| `pkill <name>`           | Kills processes by name (e.g., `pkill firefox`).                           |
| `pkill -9 <name>`        | Forcefully terminates processes by name.                                   |
| `pkill -f <pattern>`     | Kills processes whose command line contains a given pattern.               |
| `pkill -u <user>`        | Terminates all processes belonging to a specific user.                     |
| `pkill -l`               | Lists available signals.                                                   |
| `pkill -<signal> <name>` | Terminates processes with a specified signal (e.g., `pkill -HUP firefox`). |
