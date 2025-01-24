---
title: chmod, chown
date: 2025-01-24
author:
  - ChatGPT
---

In Unix-like systems, files and directories have permissions that define who can read, write, or execute them. These permissions are represented using a **3-digit octal** system, where each digit corresponds to different user categories: **owner**, **group**, and **others**.

Each permission type is represented by a number:

| Permission  | Decimal | Binary |
|-------------|---------|--------|
| Read (r)    | 4       | 100    |
| Write (w)   | 2       | 010    |
| Execute (x) | 1       | 001    |

The values for each user category are added together to form a 3-digit octal number. Each of the three digits represents the permissions for a specific category:

1.  **Owner's permissions** (first digit)
2.  **Group's permissions** (second digit)
3.  **Others' permissions** (third digit)

For example:

-   `chmod 755 filename`
    -   **Owner (7)** = Read (4) + Write (2) + Execute (1) = `rwx`
    -   **Group (5)** = Read (4) + Execute (1) = `r-x`
    -   **Others (5)** = Read (4) + Execute (1) = `r-x`

### `chmod`

The `chmod` (change mode) command is used to modify the permissions of a file or directory. Permissions are expressed in either **symbolic** or **numeric** form, and the command allows you to set or change who can read, write, or execute a file.

#### Specifying the User (Owner, Group, Others)

In addition to numeric notation, `chmod` allows you to specify which user (owner, group, or others) you want to modify permissions for using symbolic notation.

-   **`u`** = user (owner)
-   **`g`** = group
-   **`o`** = others
-   **`a`** = all (owner, group, others)

To modify specific user permissions, you can use the following symbolic operators:

-   **`+`** = add permission
-   **`-`** = remove permission
-   **`=`** = set exact permission

#### Examples of Symbolic Usage

| Command                  | Description                                                     |
|--------------------------|-----------------------------------------------------------------|
| `chmod +x filename`      | Add execute permission for everyone                             |
| `chmod u+x filename`     | Add execute permission for the **user** (owner)                 |
| `chmod g-w filename`     | Remove write permission for the **group**                       |
| `chmod o=r filename`     | Set **others** to read-only permission                          |
| `chmod u+x,g-w filename` | Add execute for the **user** and remove write for the **group** |
| `chmod a+r filename`     | Add read permission for **everyone** (user, group, others)      |

### `chown`

The `chown` command is used to change the **owner** and/or **group** of a file or directory. It doesn’t directly change the permissions but modifies who owns the file and which group it belongs to.

| Command                          | Description                                               |
|----------------------------------|-----------------------------------------------------------|
| `chown user filename`            | Change the owner of the file to the specified user        |
| `chown user:group filename`      | Change both the owner and group of the file               |
| `chown :group filename`          | Change the group of the file, keeping the owner unchanged |
| `chown -R user:group directory/` | Recursively change ownership of all files in a directory  |
