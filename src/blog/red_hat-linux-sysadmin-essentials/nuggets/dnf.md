---
title: dnf
date: 2025-01-22
author: ChatGPT
---

| **Action**                        | **Command (dnf)**                               | **Description**                                             |
|-----------------------------------|-------------------------------------------------|-------------------------------------------------------------|
| **Check Package Manager Version** | `dnf --version`                                 | Shows the version of the package manager.                   |
| **Install a Package**             | `sudo dnf install <package_name>`               | Installs the specified package.                             |
| **Remove (Uninstall) a Package**  | `sudo dnf remove <package_name>`                | Removes the specified package.                              |
| **List Installed Packages**       | `dnf list installed`                            | Lists all installed packages.                               |
| **Search for a Package**          | `dnf search <package_name>`                     | Searches for packages matching the name.                    |
| **Show Package Information**      | `dnf info <package_name>`                       | Displays detailed information about a package.              |
| **Show Package Information**      | `dnf info installed`                            | Displays detailed information for all packages.             |
| **Update All Packages**           | `sudo dnf check-update`                         | Updates/synchronizes software repositories.                 |
| **Upgrade All Packages**          | `sudo dnf update`                               | Upgrades all installed packages to the latest versions.     |
| **Upgrade a Specific Package**    | `sudo dnf update <package_name>`                | Upgrades the specified package to the latest version.       |
| **Clean Up Package Cache**        | `sudo dnf clean all`                            | Clears the local cache of downloaded packages and metadata. |
| **List Available Repositories**   | `dnf repolist`                                  | Lists all enabled package repositories.                     |
| **Enable a Repository**           | `sudo dnf config-manager --set-enabled <repo>`  | Enables a specific repository.                              |
| **Disable a Repository**          | `sudo dnf config-manager --set-disabled <repo>` | Disables a specific repository.                             |
| **Show Package History**          | `dnf history`                                   | Displays the transaction history of package operations.     |
| **Show Specific History Info**    | `dnf history info <ID>`                         | Shows detailed information for a specific transaction ID.   |
| **List User-Installed Packages**  | `dnf history userinstalled`                     | Lists packages explicitly installed by the user.            |
| **Show Package Dependencies**     | `yum deplist <package_name>`                    | Lists dependencies for a given package (using yum command). |
