---
title: systemctl
date: 2025-01-22
author:
  - ChatGPT
---

| **Command**                           | **Description**                                                                  | **Example**                          |
|---------------------------------------|----------------------------------------------------------------------------------|--------------------------------------|
| `systemctl start <service>`           | Start a service.                                                                | `systemctl start apache2`            |
| `systemctl stop <service>`            | Stop a running service.                                                         | `systemctl stop apache2`             |
| `systemctl restart <service>`         | Restart a service (stop and then start).                                         | `systemctl restart apache2`          |
| `systemctl reload <service>`          | Reload a service's configuration without stopping it.                            | `systemctl reload apache2`           |
| `systemctl status <service>`          | Show the status of a service, including its current state and logs.              | `systemctl status apache2`           |
| `systemctl enable <service>`          | Enable a service to start automatically on boot.                                | `systemctl enable apache2`           |
| `systemctl disable <service>`         | Disable a service from starting on boot.                                         | `systemctl disable apache2`          |
| `systemctl is-enabled <service>`      | Check if a service is enabled to start on boot.                                  | `systemctl is-enabled apache2`       |
| `systemctl list-units`                | List all active units (services, targets, etc.).                                 | `systemctl list-units`               |
| `systemctl list-units --type=service` | List all active services.                                                        | `systemctl list-units --type=service`|
| `systemctl show <service>`            | Show detailed information about a service, including settings and status.        | `systemctl show apache2`             |
| `systemctl mask <service>`            | Mask a service to prevent it from being started manually or automatically.       | `systemctl mask apache2`             |
| `systemctl unmask <service>`          | Unmask a service, allowing it to be started again.                               | `systemctl unmask apache2`           |
| `systemctl daemon-reload`             | Reload systemd manager configuration, useful after modifying service unit files.| `systemctl daemon-reload`            |
| `systemctl reboot`                    | Reboot the system.                                                              | `systemctl reboot`                   |
| `systemctl poweroff`                  | Power off the system (shutdown).                                                 | `systemctl poweroff`                 |
| `systemctl halt`                      | Halt the system (shutdown without powering off).                                | `systemctl halt`                     |
