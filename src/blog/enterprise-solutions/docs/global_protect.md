---
title: Palo Alto GlobalProtect VPN
date: 2025-05-04
author: Steven Merino
---

### "Run on Linux"

> Went through all the following trouble without checking if GlobalProtect for Linux exists (it does). Anyways, great experience, learnt a lot about tunnels and proxies.

**Make VPN network available through proxy**

On Linux

1.  Get Windows 10 LTSC ISO: <https://massgrave.dev/windows_ltsc_links#ltsc-2021-mirror-links>
<!-- 1.  Create a bridge device. -->
1.  Configure a virtual machine with said image.

    |        |                                         |
    |--------|-----------------------------------------|
    | Disk   | 35 GiB                                  |
    | Memory | 3072 MiB                                |
    | CPUs   | 2                                       |
    | OS     | Windows 10 Enterprise N LTSC Evaluation |

    > N versions exist to comply with EU regulations requiring Microsoft to offer Windows without bundled media software.

On Windows 10 LTSC

1.  Enable and start SSH.

    ```powershell
    Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0 # "install" SSH
    Set-Service -Name sshd -StartupType Automatic # start SSH service on boot
    Start-Service sshd # start SSH service now
    Get-Service sshd # check SSH status
    ```

1.  Install GlobalProtect and connect to it.

Back on Linux

1.  Create a SOCKS5 proxy over an SSH tunnel.

    ```bash
    ssh -D 1080 <user>@<win10-vm-ip>
    ```

    > `1080`: Local port on which the SOCKS5 proxy listens, can be any unused port (typically anything above 1024).

**Establish an SSH connection to a remote machine through the proxy**

On Linux

1.  Install Proxychains. Once done that, edit the configuration `/etc/proxychains.conf`:

    ```bash
    [ProxyList]
    # ...
    socks5  127.0.0.1 1080
    ```

1.  Establish the SSH connection.

    ```bash
    proxychains ssh <user>@<remote-machine-ip>
    ```

**Forward traffic from the proxy to your machine**

> Useful, for example, to connect to a service hosted on your machine through a domain only resolvable through the VPN network.

On Windows

1.  Edit SSH config `C:\ProgramData\ssh\sshd_config`:

    ```bash
    GatewayPorts yes # Controls whether remote forwarded ports bind to non-local interfaces, i.e. 0.0.0.0
    AllowTcpForwarding yes # Controls whether SSH port forwarding is permitted (usually enabled by default)
    ```

1.  Restart SSH.

    ```powershell
    Restart-Service sshd
    ```

On Linux

```bash
ssh -R <target-port>:localhost:<local-port> <user>@<win10-vm-ip> # binds <target-port> on Windows 10 LTSC VM and forwards traffic from it to <local-port> on localhost.
```
