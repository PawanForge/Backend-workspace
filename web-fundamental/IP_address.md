# 🟢 TOPIC 7 — IP ADDRESS

## 🎯 Goal of this topic

After completing this topic, you should understand:

* What is an IP address?
* Why devices need IP addresses
* IPv4
* IPv6
* Public IP
* Private IP
* `127.0.0.1`
* `localhost`
* How your browser finds a server
* How IP addresses connect with domains and DNS

---

# 1️⃣ What is an IP Address?

**IP** stands for **Internet Protocol**.

An **IP address** is a numerical address used to identify a device or network interface on a network.

Think of it like an address.

For example, if you want to send a letter to someone, you need their address.

Similarly, when computers communicate over a network, they need addresses.

```text
Person
   ↓
Home Address

Computer
   ↓
IP Address
```

For example, an IPv4 address may look like:

```text
192.168.1.10
```

Another example:

```text
142.250.183.14
```

The first one is commonly used as a **private/local network address**, while the second is an example of a **publicly routable IPv4 address**.

---

# 2️⃣ Why Do We Need IP Addresses?

Imagine millions of devices connected to the Internet.

Your computer wants to communicate with a server.

The network needs to know:

```text
Who is sending?
       ↓
Who should receive?
```

The IP address helps identify the network destination.

Conceptually:

```text
Your Computer
IP: A
   │
   │ Request
   ▼
Server
IP: B
```

The request needs to reach the correct destination.

---

# 3️⃣ IPv4

The most familiar type of IP address is **IPv4**.

IPv4 uses **32 bits**.

It is usually written as four decimal numbers separated by dots.

Example:

```text
192.168.1.10
```

Each part is called an **octet**.

```text
192 . 168 . 1 . 10
  │     │    │    │
Octet Octet Octet Octet
```

Each octet can have a value from:

```text
0 to 255
```

So this is valid:

```text
192.168.1.10
```

But something like this is not a valid IPv4 address:

```text
300.168.1.10
```

because `300` is greater than `255`.

---

# 4️⃣ IPv6

IPv4 has a limited number of addresses.

As more and more devices connected to the Internet, the world needed a much larger address space.

That's where **IPv6** comes in.

IPv6 uses **128 bits**.

An example looks like:

```text
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

It can also be shortened according to IPv6 rules.

For example:

```text
2001:db8:85a3::8a2e:370:7334
```

The main difference:

```text
IPv4
32 bits
Example:
192.168.1.10

IPv6
128 bits
Example:
2001:db8::1
```

You don't need to memorize IPv6 formatting now.

Just understand:

> **IPv6 provides a much larger address space than IPv4.**

---

# 5️⃣ Public IP Address

A **public IP address** is an IP address used for communication across the public Internet.

For example:

```text
Your Network
     │
     │ Public IP
     ▼
Internet
     │
     ▼
Website Server
```

Your home network typically has a public IP assigned by your Internet Service Provider.

You can think of it as the address through which your network is visible to the wider Internet.

---

# 6️⃣ Private IP Address

A **private IP address** is used within a local network.

For example, your home router might assign addresses such as:

```text
192.168.1.10
192.168.1.11
192.168.1.12
```

Your local network might look like:

```text
             Router
         192.168.1.1
              │
       ┌──────┼──────┐
       │      │      │
       ▼      ▼      ▼
    Laptop  Phone  Desktop
 .10       .11      .12
```

These devices can communicate with each other within the local network.

Common private IPv4 ranges include:

```text
10.0.0.0/8

172.16.0.0/12

192.168.0.0/16
```

You don't need to memorize the exact ranges immediately.

The important idea is:

```text
Private IP
   ↓
Used inside local/private networks

Public IP
   ↓
Used for communication over the public Internet
```

---

# 7️⃣ What is `localhost`?

`localhost` means:

> **This computer itself.**

When you write:

```text
http://localhost:8000
```

you are asking your computer to connect to a service running on your own computer.

Conceptually:

```text
Browser
   │
   │ Request
   ▼
Your Computer
   │
   ▼
Local Server
```

For example, when you run:

```bash
python -m http.server 8000
```

and open:

```text
http://localhost:8000
```

the browser is connecting to the server running on your own machine.

---

# 8️⃣ What is `127.0.0.1`?

`127.0.0.1` is a commonly used IPv4 loopback address.

It refers back to the local machine.

Therefore:

```text
localhost
```

commonly resolves to:

```text
127.0.0.1
```

So these commonly point to your own computer:

```text
http://localhost:8000
```

and:

```text
http://127.0.0.1:8000
```

For a typical local development setup, they reach the same machine.

---

# 9️⃣ What is Loopback?

A **loopback address** allows a computer to communicate with itself through the networking stack.

The common IPv4 loopback range is:

```text
127.0.0.0/8
```

The most commonly used address is:

```text
127.0.0.1
```

Conceptually:

```text
Your Computer
      │
      │ Request
      ▼
127.0.0.1
      │
      ▼
Your Computer
```

This is very useful for development.

For example:

```text
React App
    ↓
http://localhost:3000
    ↓
Node.js Backend
    ↓
http://localhost:5000
```

Both applications may be running on your own computer.

---

# 🔟 How Does the Browser Find a Server?

Suppose you enter:

```text
https://example.com
```

The browser needs to determine where the server is located.

The domain name:

```text
example.com
```

is designed to be easy for humans to remember.

The network ultimately communicates using IP addresses.

Conceptually:

```text
Domain Name
example.com
     ↓
Find IP Address
     ↓
Server IP
     ↓
Send Request
     ↓
Server
```

The system that helps translate domain names into IP addresses is:

> **DNS — Domain Name System**

We'll study DNS in the next topic.

---

# 🔥 Complete Picture

Now connect everything you have learned.

Suppose you open:

```text
https://example.com
```

The simplified flow is:

```text
User
  │
  ▼
Browser
  │
  │ Domain Name
  ▼
DNS
  │
  │ Finds IP Address
  ▼
Server IP
  │
  │ HTTP/HTTPS Request
  ▼
Web Server
  │
  │ Response
  ▼
Browser
  │
  ▼
Webpage
```

This is the basic journey.

---

# 🛠️ PRACTICAL — STEP 1: Find Your Local IP

On Windows, open Command Prompt.

Run:

```bash
ipconfig
```

Look for something like:

```text
IPv4 Address
```

You might see:

```text
192.168.1.10
```

This is likely your device's **private IPv4 address** on your local network.

---

# 🛠️ PRACTICAL — STEP 2: Test `localhost`

Start your local server again:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

Now try:

```text
http://127.0.0.1:8000
```

You should generally reach the same local server.

The flow is:

```text
localhost
    ↓
127.0.0.1
    ↓
Your Computer
    ↓
Port 8000
    ↓
Python HTTP Server
```

---

# 🛠️ PRACTICAL — STEP 3: Test Your Local IP

Find your local IPv4 address using:

```bash
ipconfig
```

Suppose your IP is:

```text
192.168.1.10
```

Try:

```text
http://192.168.1.10:8000
```

Depending on your server configuration and firewall settings, this may allow access to the server through your local network address.

You can understand the difference:

```text
localhost
   ↓
This machine

192.168.1.10
   ↓
This machine's local network address
```

---

# 🧪 PRACTICAL TASK

Run:

```bash
ipconfig
```

Find:

```text
IPv4 Address
```

Then write down:

```text
My Local IP = __________
```

Now run your server:

```bash
python -m http.server 8000
```

Test:

```text
http://localhost:8000
```

Then:

```text
http://127.0.0.1:8000
```

Finally, if appropriate for your local network:

```text
http://YOUR_LOCAL_IP:8000
```

Observe which URLs work.

---

# 🎯 INTERVIEW QUESTIONS

### Q1. What is an IP address?

> An IP address is a network address used to identify a device or network interface and enable communication over an IP network.

### Q2. What is IPv4?

> IPv4 is a 32-bit Internet Protocol addressing system commonly represented using four decimal octets, such as `192.168.1.10`.

### Q3. What is IPv6?

> IPv6 is a 128-bit Internet Protocol addressing system designed to provide a much larger address space than IPv4.

### Q4. What is a private IP?

> A private IP is an address used within a private network, such as a home or office network, and is not directly routable on the public Internet.

### Q5. What is a public IP?

> A public IP is an address used for communication across the public Internet.

### Q6. What is localhost?

> `localhost` is a hostname that refers to the local computer.

### Q7. What is `127.0.0.1`?

> `127.0.0.1` is a commonly used IPv4 loopback address that refers to the local machine.

### Q8. Why do we use IP addresses?

> IP addresses allow devices and network interfaces to be identified and addressed for network communication.

---

# 📝 YOUR NOTES

```text
WEB FUNDAMENTALS

7. IP ADDRESS
--------------------------------

IP:
Internet Protocol.

IP ADDRESS:
A network address used to identify a device
or network interface and enable communication.

IPv4:
32-bit address system.

Example:
192.168.1.10

IPv6:
128-bit address system.

Example:
2001:db8::1

PUBLIC IP:
Used for communication across the public Internet.

PRIVATE IP:
Used inside private/local networks.

Common Private IPv4 Ranges:
10.0.0.0/8
172.16.0.0/12
192.168.0.0/16

LOCALHOST:
Refers to the local computer.

Example:
http://localhost:8000

127.0.0.1:
Common IPv4 loopback address.

localhost
   ↓
127.0.0.1
   ↓
Local Computer

Basic Website Flow:

Domain Name
   ↓
DNS
   ↓
IP Address
   ↓
Server
   ↓
HTTP/HTTPS Request
   ↓
Response
   ↓
Browser
```

---

# ✅ CHECKPOINT

At this point, you should understand this:

```text
example.com
     ↓
Human-friendly name
     ↓
DNS finds IP address
     ↓
IP identifies network destination
     ↓
Browser sends HTTP/HTTPS request
     ↓
Server responds
     ↓
Browser displays webpage
```

And for local development:

```text
localhost
    ↓
127.0.0.1
    ↓
Your Computer
    ↓
Your Local Server
```

---

# 🔜 NEXT TOPIC

## 🟢 TOPIC 8 — DNS (DOMAIN NAME SYSTEM)

This is the next important topic.

We will learn:

```text
What is a Domain Name?
        ↓
What is DNS?
        ↓
Why do we need DNS?
        ↓
Domain Name → IP Address
        ↓
DNS Resolver
        ↓
Root DNS Server
        ↓
TLD DNS Server
        ↓
Authoritative DNS Server
        ↓
DNS Records
        ↓
A Record
        ↓
AAAA Record
        ↓
CNAME Record
        ↓
Practical DNS Lookup
```