---
title: ls
date: 2025-01-24
author: ChatGPT
---

List files and directories in a specified directory, provides different levels of information depending on the options used.

### Common `ls` Commands

| Command    | Description                                                      |
|------------|------------------------------------------------------------------|
| `ls`       | List files and directories in the current directory              |
| `ls -l`    | List files in long format (detailed information)                 |
| `ls -a`    | List all files, including hidden files (those starting with `.`) |
| `ls -h`    | Show file sizes in human-readable format (e.g., KB, MB)          |
| `ls -R`    | List files recursively, including subdirectories                 |
| `ls -t`    | List files sorted by modification time (newest first)            |
| `ls -S`    | List files sorted by size (largest first)                        |
| `ls -r`    | Reverse the order of the listing                                 |
| `ls -d */` | List only directories (with trailing `/`)                        |
| `ls -1`    | List files in a single column                                    |

### Output of `ls -l`

When using `ls -l`, the output provides detailed information about each file or directory:

| Column | Description                                    |
|--------|------------------------------------------------|
| **1**  | File type and permissions (e.g., `-rwxr-xr-x`) |
| **2**  | Number of hard links to the file or directory  |
| **3**  | Owner of the file or directory                 |
| **4**  | Group associated with the file or directory    |
| **5**  | File size in bytes                             |
| **6**  | Last modification date and time                |
| **7**  | File or directory name                         |

Example of `ls -l` output:

```
-rwxr-xr-x 1 user group 1234 Jan 24 12:34 filename
```

-   **`-rwxr-xr-x`**: File type and permissions (regular file, owner can read/write/execute, group/others can read/execute)
-   **`1`**: Number of hard links to the file
-   **`user`**: Owner of the file
-   **`group`**: Group associated with the file
-   **`1234`**: File size (in bytes)
-   **`Jan 24 12:34`**: Last modification date and time
-   **`filename`**: Name of the file
