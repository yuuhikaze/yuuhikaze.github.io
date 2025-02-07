---
title: tmux
date: 2025-01-22
author: ChatGPT
---

`tmux` is a tool that lets you run and manage multiple terminal sessions in a single window, with features like session persistence and split panes.

| **Action**                        | **Key Binding**                               | **Description**                                                        |
|-----------------------------------|-----------------------------------------------|------------------------------------------------------------------------|
| **Prefix (default)**              | `Ctrl + b`                                    | Activate tmux command mode.                                            |
| **Split window horizontally**     | `Ctrl + b`, then `%`                          | Split the window into two panes horizontally.                          |
| **Split window vertically**       | `Ctrl + b`, then `"`                          | Split the window into two panes vertically.                            |
| **Navigate between panes**        | `Ctrl + b`, then arrow key                    | Move between panes using arrow keys (up, down, left, right).           |
| **Resize pane**                   | `Ctrl + b`, then hold `Alt` + arrow key       | Resize the current pane.                                               |
| **Close the current pane**        | `Ctrl + b`, then `x`                          | Close the current pane (you will be prompted to confirm).              |
| **Create a new window**           | `Ctrl + b`, then `c`                          | Create a new tmux window.                                              |
| **Switch between windows**        | `Ctrl + b`, then `n` (next) or `p` (previous) | Switch to the next or previous window.                                 |
| **Select a window by number**     | `Ctrl + b`, then a number (0-9)               | Jump directly to the window by its number.                             |
| **Rename window**                 | `Ctrl + b`, then `,`                          | Rename the current window.                                             |
| **Detach from tmux session**      | `Ctrl + b`, then `d`                          | Detach from the current tmux session and return to the shell.          |
| **List sessions**                 | `Ctrl + b`, then `s`                          | List all tmux sessions.                                                |
| **Attach to an existing session** | `tmux attach-session -t <session_name>`       | Attach to a tmux session by name.                                      |
| **Kill a session**                | `Ctrl + b`, then `:` and type `kill-session`  | Kill the current tmux session.                                         |
| **Lock tmux session**             | `Ctrl + b`, then `l`                          | Lock the tmux session (requires password).                             |
| **Scroll mode (copy mode)**       | `Ctrl + b`, then `[`                          | Enter scroll mode to navigate through the pane history.                |
| **Exit tmux**                     | Type `exit` inside a window or pane           | Exit the tmux session or pane.                                         |
| **Maximize the current pane**     | `Ctrl + b`, then `z`                          | Maximize the current pane (toggles between normal and maximized size). |

Edit `~/.tmux.conf` to set custom keybinds or change configuration options.
