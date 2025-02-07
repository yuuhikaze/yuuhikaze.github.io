---
title: rsync
date: 2025-02-07
author: ChatGPT
---

Synchronizes/copies files and directories between two locations.

| Command          | Description                                                                              |
|------------------|------------------------------------------------------------------------------------------|
| `rsync`          | Performs file synchronization between two locations.                                     |
| `rsync -a`       | Copies files recursively, preserving symbolic links, file permissions, and timestamps.   |
| `rsync -v`       | Increases verbosity, showing detailed information during the transfer.                   |
| `rsync -z`       | Compresses file data during transfer to save bandwidth.                                  |
| `rsync -r`       | Recursively copies directories and their contents.                                       |
| `rsync -u`       | Skips files that are newer on the destination than the source.                           |
| `rsync -h`       | Outputs numbers in a human-readable format (e.g., 1K, 2M).                               |
| `rsync -n`       | Runs in "dry-run" mode, showing what would be done without actually making changes.      |
| `rsync -e`       | Specifies the remote shell program to use for communication.                             |
| `rsync --delete` | Deletes files in the destination directory that no longer exist in the source directory. |
