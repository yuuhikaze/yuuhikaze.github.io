---
title: Endpoint Central
date: 2025-01-23
author: Steven Merino
---

### Uninstall UEMSAgent without token

Endpoint Central offers a feature called [Agent Protection Settings](https://www.manageengine.com/products/desktop-central/help/configuring_desktop_central/configuring_agent_tray_icon_settings.html#aps) that, when enabled, prevents end-users from uninstalling the agent without first providing a Time-based One-Time Password (TOTP) issued by the Endpoint Central administrator. So, what if there is a problem with the TOTP generation? None, you can still uninstall the agent following these steps:

1.  Edit a copy of the uninstaller script `/usr/local/manageengine/uems_agent/RemoveUEMSAgent.sh`. Comment out the following line.

    ```bash
    $agent_install_directory/bin/dcregister -u $1 $2 || script_exit $?
    ```

2.  Run the modified script as root.

    That deletes almost all of the relevant files, what only remains are the services.

3.  Delete the mentioned services.

    ```bash
    sudo rm -f /etc/systemd/system/dcservice.service
    sudo rm -f /etc/init.d/dcservice
    ```

That's all! You can now register a new UEMSAgent.

> If you register the new UEMSAgent and later find that the uninstaller script fails, simply repeat the steps mentioned in this section, and the problem will be resolved for future uninstallations.
