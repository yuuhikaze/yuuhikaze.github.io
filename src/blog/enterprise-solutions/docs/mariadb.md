---
title: MariaDB/MySQL
date: 2025-04-21
author: Steven Merino
---

### Reset root password

> This guide is intended for users who have forgotten the root password and do not have UNIX authentication enabled.

1.  Start MariaDB in safe mode.

    ```bash
    sudo systemctl stop mariadb
    sudo mariadbd-safe --skip-grant-tables & # Using mysql? Try: mysqld_safe
    sudo mariadb -u root mysql
    ```

1.  Reset password and enable UNIX socket authentication.

    ```sql
    FLUSH PRIVILEGES;
    ALTER USER 'root'@'localhost' IDENTIFIED BY '<password>'; -- Reset root password
    UPDATE mysql.global_priv SET priv=json_set( -- Enable UNIX socket authentication
        priv,
        '$.password_last_changed', UNIX_TIMESTAMP(),
        '$.plugin', 'mysql_native_password',
        '$.auth_or', json_array(json_object(), json_object('plugin', 'unix_socket'))
    ) WHERE User='root' AND Host='localhost';
    FLUSH PRIVILEGES;
    quit;
    ```

1.  Stop the MariaDB instance running in safe mode and start the service as regular.

    ```bash
    sudo mariadb-admin -u root shutdown # Using mysql? Try: mysqladmin
    sudo systemctl mariadb start
    ```

Now you should be able to log in without a problem!
