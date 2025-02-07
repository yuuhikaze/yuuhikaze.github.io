---
title: wget
date: 2025-01-22
author: ChatGPT
---

Downloads files from the web. It supports HTTP, HTTPS, and FTP protocols. It can download single files, entire websites, and directories, and offers features like resuming interrupted downloads, limiting download speeds, and saving files with custom names.

| Command                                      | Description                                                                                           |
|----------------------------------------------|-------------------------------------------------------------------------------------------------------|
| `wget <URL>`                                 | Downloads a file from the specified URL.                                                              |
| `wget -O <filename> <URL>`                   | Downloads the file from the specified URL and saves it with a custom filename.                        |
| `wget -c <URL>`                              | Resumes a previously interrupted download (if the server supports it).                                |
| `wget -r <URL>`                              | Recursively downloads a website, including HTML, images, and other resources.                         |
| `wget -np <URL>`                             | Prevents `wget` from downloading files from parent directories while recursively downloading.         |
| `wget -l <depth> <URL>`                      | Limits the recursion depth (e.g., `-l 2` limits the depth to two levels).                             |
| `wget --limit-rate=<rate> <URL>`             | Limits the download speed to the specified rate (e.g., `--limit-rate=200k` for 200 KB/s).             |
| `wget -N <URL>`                              | Downloads the file only if the remote file is newer than the local copy (based on timestamps).         |
| `wget --mirror <URL>`                        | Mirrors the entire website, downloading all files and maintaining directory structure.               |
| `wget --no-check-certificate <URL>`          | Ignores SSL certificate warnings and proceeds with the download (useful for self-signed certificates).|
| `wget -q <URL>`                              | Runs `wget` in quiet mode, suppressing output (only errors will be displayed).                        |
| `wget -v <URL>`                              | Runs `wget` in verbose mode, providing detailed output about the download process.                    |
| `wget --user=<username> --password=<password> <URL>` | Downloads a file with HTTP authentication using the provided username and password.                   |
