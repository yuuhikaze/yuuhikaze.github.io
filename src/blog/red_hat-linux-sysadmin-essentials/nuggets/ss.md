### `ss` (Socket Stat)

Program for inspecting network connections and socket statistics.

| **Command**                         | **Description**                                                                         | **Example**                           |
|-------------------------------------|-----------------------------------------------------------------------------------------|---------------------------------------|
| `ss`                                | Show summary of socket statistics and connections.                                       | `ss`                                  |
| `ss -t`                             | Display TCP sockets.                                                                    | `ss -t`                               |
| `ss -u`                             | Display UDP sockets.                                                                    | `ss -u`                               |
| `ss -l`                             | Display listening sockets (services waiting for incoming connections).                   | `ss -l`                               |
| `ss -a`                             | Display all sockets (both listening and non-listening).                                  | `ss -a`                               |
| `ss -n`                             | Show numerical addresses and ports instead of resolving hostnames and service names.    | `ss -n`                               |
| `ss -p`                             | Show the process using the socket.                                                      | `ss -p`                               |
| `ss -s`                             | Display socket statistics summary.                                                      | `ss -s`                               |
| `ss -r`                             | Display resolved hostnames and services for the connections.                            | `ss -r`                               |
| `ss -tuln`                          | Display listening TCP and UDP sockets with numeric addresses and ports.                 | `ss -tuln`                            |
| `ss -o state established`           | Show sockets in the "ESTABLISHED" state.                                                 | `ss -o state established`            |
| `ss -4`                             | Show only IPv4 sockets.                                                                 | `ss -4`                               |
| `ss -6`                             | Show only IPv6 sockets.                                                                 | `ss -6`                               |
| `ss -H`                             | Hide column headers in the output.                                                      | `ss -H`                               |
| `ss -i`                             | Show internal socket information (e.g., timers, retransmissions).                       | `ss -i`                               |
