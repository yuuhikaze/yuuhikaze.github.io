---
title: rpm
date: 2025-01-22
author:
  - ChatGPT
---

| **Action**                                | **Command (rpm)**                                    | **Description**                                                          |
|-------------------------------------------|------------------------------------------------------|--------------------------------------------------------------------------|
| **Install a Package**                     | `sudo rpm -ivh <package_file.rpm>`                   | Installs a package from a local `.rpm` file.                             |
| **Upgrade a Package**                     | `sudo rpm -Uvh <package_file.rpm>`                   | Installs or upgrades a package from a local `.rpm` file.                 |
| **Remove (Uninstall) a Package**          | `sudo rpm -e <package_name>`                         | Uninstalls the specified package by name.                                |
| **Query Installed Packages**              | `rpm -q <package_name>`                              | Checks if a specific package is installed.                               |
| **List All Installed Packages**           | `rpm -qa`                                            | Lists all installed RPM packages on the system.                          |
| **Query Package Information**             | `rpm -qi <package_name>`                             | Displays detailed information about a specific installed package.        |
| **Query Files Installed by a Package**    | `rpm -ql <package_name>`                             | Lists all files installed by a specific package.                         |
| **Query the Package of a File**           | `rpm -qf <file_path>`                                | Shows which package a specific file belongs to.                          |
| **Verify Installed Package Files**        | `rpm -V <package_name>`                              | Verifies the integrity of the files installed by a specific package.     |
| **List Package Files with Digest Info**   | `rpm -q --changelog <package_name>`                  | Displays the changelog of a specific installed package.                  |
| **Show Package Dependencies**             | `rpm -qR <package_name>`                             | Displays the dependencies required by a package.                         |
| **Check for Package Conflicts**           | `rpm -q --conflicts <package_name>`                  | Shows any conflicting packages for a specific package.                   |
| **Query the Package Version**             | `rpm -q --queryformat '%{VERSION}\n' <package_name>` | Displays just the version of the installed package.                      |
| **Rebuild RPM Database**                  | `sudo rpm --rebuilddb`                               | Rebuilds the RPM package database (useful if it's corrupted or missing). |
| **Check if Package is Installed by Name** | `rpm -q --whatprovides <file_name>`                  | Checks which package provides a specific file.                           |
