---
title: ln
date: 2025-01-27
author: ChatGPT
---

Creates links between files, allowing the user to create references to files either as hard links or symbolic (soft) links. Hard links point directly to the file data, while symbolic links are pointers to the file name.

| Command                 | Description                                                         |
|-------------------------|---------------------------------------------------------------------|
| `ln <source> <link>`    | Creates a hard link named `<link>` pointing to `<source>`.          |
| `ln -s <source> <link>` | Creates a symbolic link named `<link>` pointing to `<source>`.      |
| `ln -f <source> <link>` | Forces the creation of the link, overwriting any existing `<link>`. |

The `ln` command is commonly used to create references for files, which can be helpful for backup, organization, or simplifying access to files from multiple locations.
