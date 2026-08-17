### IP Address Commands — Quick Notes

**Mac:**

```bash
ipconfig getifaddr en0
```

→ Shows the IP address of the Mac's `en0` interface.

**Windows:**

```cmd
ipconfig
```

→ Shows network information, including the IPv4 address.

**Windows — IP address only:**

```cmd
ipconfig | findstr "IPv4"
```

→ Shows the IPv4 address line only.
