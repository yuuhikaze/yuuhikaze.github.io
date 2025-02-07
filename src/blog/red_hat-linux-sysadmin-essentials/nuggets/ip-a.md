---
title: ip addr show
date: 2025-01-27
author: ChatGPT
---

The output of the `ip addr show` command displays detailed information about the network interfaces on a Linux system. Here's a breakdown of the key components in the output:

**Example Output**

```bash
$ ip addr show
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    inet 192.168.1.10/24 brd 192.168.1.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::250:56ff:fe88:ea0d/64 scope link
       valid_lft forever preferred_lft forever
```

**Fields Interpretation**

| Field                               | Description                                                                                       |
|-------------------------------------|---------------------------------------------------------------------------------------------------|
| `2:`                                | The interface index (in this case, the second network interface).                                 |
| `eth0:`                             | The name of the network interface (could be `eth0`, `wlan0`, `lo`, etc.).                         |
| `<BROADCAST,MULTICAST,UP,LOWER_UP>` | Flags describing the interface status.                                                            |
| `mtu 1500`                          | The Maximum Transmission Unit (MTU), which is the largest packet size the interface can send.     |
| `qdisc fq_codel`                    | The queuing discipline in use (i.e., how packets are scheduled for transmission).                 |
| `state UP`                          | The interface's current state, which is `UP` (active) in this case.                               |
| `group default`                     | The group this interface belongs to.                                                              |
| `qlen 1000`                         | The length of the output packet queue.                                                            |
| `inet 192.168.1.10/24`              | The IPv4 address assigned to the interface (`192.168.1.10` with a subnet mask `/24`).             |
| `brd 192.168.1.255`                 | The broadcast address for the subnet.                                                             |
| `scope global`                      | The scope of the address (`global` means it's publicly routable).                                 |
| `inet6 fe80::250:56ff:fe88:ea0d/64` | The IPv6 address assigned to the interface (`fe80::250:56ff:fe88:ea0d` with a subnet mask `/64`). |
| `scope link`                        | The scope of the IPv6 address (`link` means it's valid only on the local network).                |
| `valid_lft forever`                 | The lease time for the address (in this case, it’s "forever" for both IPv4 and IPv6).             |
| `preferred_lft forever`             | The preferred lifetime of the address (again, "forever" in this case).                            |
