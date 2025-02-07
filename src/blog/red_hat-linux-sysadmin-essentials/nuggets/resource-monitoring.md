---
title: Resource monitoring
date: 2025-01-22
author: ChatGPT
---

| **Resource**           | **Command**           | **Description**                                                         |
|------------------------|-----------------------|-------------------------------------------------------------------------|
| **CPU Usage**          | `top`                 | Displays real-time system processes and CPU usage.                      |
|                        | `htop`                | Enhanced version of `top` (may require installation).                   |
|                        | `mpstat`              | CPU usage statistics for each core (from `sysstat`).                    |
|                        | `vmstat`              | Displays virtual memory statistics (includes CPU).                      |
|                        | `iostat -c`           | CPU statistics along with disk I/O.                                     |
| **Memory Usage**       | `free -h`             | Displays RAM and swap usage in a human-readable format.                 |
|                        | `vmstat`              | Displays memory usage and other system stats.                           |
|                        | `ps aux --sort=-%mem` | Lists processes by memory usage.                                        |
| **Disk Usage**         | `df -h`               | Shows disk space usage for all mounted filesystems.                     |
|                        | `du -sh`              | Shows disk usage for a specific directory.                              |
|                        | `iotop`               | Interactive real-time I/O monitor (requires root).                      |
| **Network Usage**      | `iftop`               | Displays real-time bandwidth usage by connections.                      |
|                        | `nload`               | Monitors incoming and outgoing network traffic.                         |
|                        | `netstat -tuln`       | Displays network connections, listening ports, etc.                     |
|                        | `ss -tuln`            | Shows socket statistics (more efficient than `netstat`).                |
| **General Monitoring** | `sar -u 1 5`          | Collects and reports CPU statistics (requires `sysstat`).               |
|                        | `glances`             | Provides an overview of system resources (requires `pip` installation). |
|                        | `dstat`               | General-purpose resource monitor.                                       |
|                        | `watch -n 1`          | Runs a command repeatedly at 1-second intervals.                        |
| **System Performance** | `systemd-analyze`     | Analyzes and reports boot-up performance.                               |
