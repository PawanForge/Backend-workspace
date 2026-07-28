# 🟢 TOPIC 8 — DNS (DOMAIN NAME SYSTEM)

## 🎯 Goal of this topic

After completing this topic, you should understand:

* What is a domain name?
* Why do we need DNS?
* How DNS works
* DNS Resolver
* Root DNS Server
* TLD DNS Server
* Authoritative DNS Server
* DNS Records
* A Record
* AAAA Record
* CNAME Record
* How to perform a DNS lookup

---

# 1️⃣ What is a Domain Name?

A **domain name** is a human-readable name used to access a website or Internet service.

For example:

```text
google.com
github.com
youtube.com
```

Instead of remembering an IP address like:

```text
142.250.183.14
```

you can remember:

```text
google.com
```

This is much easier for humans.

So:

```text
Human
  ↓
google.com
  ↓
DNS
  ↓
IP Address
  ↓
Server
```

---

# 2️⃣ Why Do We Need DNS?

Computers communicate using IP addresses.

Humans prefer names.

Imagine you had to remember:

```text
142.250.183.14
140.82.112.3
```

for every website you use.

That would be difficult.

Instead, you use:

```text
google.com
github.com
```

DNS translates the domain name into the appropriate IP address.

In simple words:

> **DNS is like the Internet's phonebook or address directory.**

---

# 3️⃣ What is DNS?

**DNS** stands for:

> **Domain Name System**

Its main purpose is to translate domain names into IP addresses.

For example:

```text
google.com
    ↓
DNS Lookup
    ↓
IP Address
    ↓
Google Server
```

Then the browser can communicate with the server.

---

# 4️⃣ Complete Website Flow

Suppose you type:

```text
https://www.example.com
```

into your browser.

The simplified flow is:

```text
User
  ↓
Browser
  ↓
Domain Name
www.example.com
  ↓
DNS Lookup
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

So DNS is one of the steps that helps your browser find the destination server.

---

# 5️⃣ How Does DNS Work?

Let's understand the basic process.

Suppose you enter:

```text
www.example.com
```

The browser needs to find its IP address.

Conceptually:

```text
Browser
   │
   │ "What is the IP of example.com?"
   ▼
DNS Resolver
   │
   ▼
DNS System
   │
   ▼
IP Address
   │
   ▼
Browser
```

The browser can then use that IP address to communicate with the destination server.

---

# 6️⃣ DNS Resolver

A **DNS Resolver** is the component that performs DNS resolution on behalf of the client.

Usually, your device or network is configured to use a DNS resolver.

For example, the resolver might be operated by:

* Your Internet Service Provider
* A public DNS provider
* Your organization

Examples of public DNS services include:

```text
Google Public DNS
Cloudflare DNS
Quad9
```

The resolver's job is to find the answer to a DNS query.

For example:

```text
Question:
What is the IP address for example.com?

Answer:
<IP address>
```

---

# 7️⃣ DNS Resolution Process

Let's look at the simplified DNS hierarchy.

```text
Browser
   ↓
DNS Resolver
   ↓
Root DNS Server
   ↓
TLD DNS Server
   ↓
Authoritative DNS Server
   ↓
IP Address
```

Let's understand each one.

---

# 8️⃣ Root DNS Servers

At the top of the DNS hierarchy are the **Root DNS Servers**.

They help direct DNS queries toward the appropriate **Top-Level Domain (TLD)** servers.

For example:

```text
example.com
       │
       ▼
Root
       │
       ▼
.com TLD
```

The root system doesn't normally provide the final IP address for `example.com`.

Instead, it helps identify where information about `.com` domains can be found.

---

# 9️⃣ TLD DNS Server

**TLD** stands for:

> **Top-Level Domain**

Examples include:

```text
.com
.org
.net
.in
.edu
```

Suppose you're looking for:

```text
example.com
```

The DNS hierarchy can be thought of as:

```text
Root
  ↓
.com TLD
  ↓
Authoritative DNS
  ↓
example.com
```

The `.com` TLD system helps direct the query to the authoritative DNS servers responsible for the domain.

---

# 🔟 Authoritative DNS Server

The **Authoritative DNS Server** contains the DNS records for a domain.

For example:

```text
example.com
     │
     ▼
Authoritative DNS
     │
     ▼
DNS Records
```

It can provide information such as:

```text
example.com → IP Address
```

The authoritative server is considered the source of truth for the DNS records it hosts.

---

# 1️⃣1️⃣ Complete DNS Resolution

Let's combine everything.

Suppose you enter:

```text
www.example.com
```

The simplified process is:

```text
                Browser
                   │
                   ▼
             DNS Resolver
                   │
                   ▼
              Root Server
                   │
                   ▼
             .com TLD Server
                   │
                   ▼
        Authoritative DNS Server
                   │
                   ▼
              IP Address
                   │
                   ▼
                Browser
                   │
                   ▼
            Web Server
```

In reality, caching can make this process much faster, and the resolver may already know the answer without querying all levels.

---

# 1️⃣2️⃣ DNS Caching

DNS lookups don't necessarily happen from scratch every time.

DNS information can be cached.

Caching can happen at different levels:

```text
Browser
   ↓
Operating System
   ↓
Local Network / Router
   ↓
DNS Resolver
```

If a cached DNS answer is still valid, the resolver can return it without performing the complete lookup again.

This improves performance.

---

# 1️⃣3️⃣ DNS Records

DNS doesn't only store IP addresses.

It stores different types of information called **DNS records**.

Some important records are:

```text
A
AAAA
CNAME
MX
TXT
NS
```

For your current web development journey, focus first on:

```text
A
AAAA
CNAME
```

We'll understand the others later when we study domains, email, security, and deployment.

---

# 1️⃣4️⃣ A Record

An **A record** maps a domain name to an IPv4 address.

Example:

```text
example.com
     ↓
A Record
     ↓
192.0.2.10
```

Conceptually:

```text
Domain
  ↓
IPv4 Address
```

Example:

```text
example.com → 192.0.2.10
```

---

# 1️⃣5️⃣ AAAA Record

An **AAAA record** maps a domain name to an IPv6 address.

Example:

```text
example.com
     ↓
AAAA Record
     ↓
2001:db8::10
```

So:

```text
A
 ↓
IPv4

AAAA
 ↓
IPv6
```

Remember this simple difference.

---

# 1️⃣6️⃣ CNAME Record

**CNAME** stands for:

> **Canonical Name**

A CNAME record creates an alias from one domain name to another domain name.

For example:

```text
www.example.com
       ↓
CNAME
       ↓
example.com
```

Conceptually:

```text
www.example.com
        │
        ▼
example.com
        │
        ▼
DNS Records
```

This is useful when multiple hostnames should point to the same canonical domain.

---

# 1️⃣7️⃣ A vs AAAA vs CNAME

| Record | Purpose                           |
| ------ | --------------------------------- |
| A      | Domain → IPv4                     |
| AAAA   | Domain → IPv6                     |
| CNAME  | Domain name → Another domain name |

Simple memory trick:

```text
A
↓
IPv4

AAAA
↓
IPv6

CNAME
↓
Another Name
```

---

# 🔥 1️⃣8️⃣ Domain Name Structure

Let's break down:

```text
https://www.example.com
```

The structure is:

```text
https://
   │
   └── Protocol / Scheme

www
   │
   └── Subdomain

example
   │
   └── Domain Name

.com
   │
   └── Top-Level Domain
```

So:

```text
www.example.com
│    │       │
│    │       └── TLD
│    │
│    └──────── Domain
│
└───────────── Subdomain
```

We'll study URLs in detail later.

---

# 🛠️ PRACTICAL — STEP 1: DNS Lookup Using `nslookup`

Since you're using Windows, open:

```text
Command Prompt
```

Run:

```bash
nslookup example.com
```

You should receive DNS-related information, including an IP address.

You can also try:

```bash
nslookup google.com
```

Observe the result.

Conceptually:

```text
You
 ↓
nslookup
 ↓
DNS Resolver
 ↓
DNS Answer
```

---

# 🛠️ PRACTICAL — STEP 2: Check Different Record Types

Try:

```bash
nslookup -type=A example.com
```

This asks for an A record.

Try:

```bash
nslookup -type=AAAA example.com
```

This asks for an AAAA record.

Try:

```bash
nslookup -type=CNAME www.example.com
```

This asks for a CNAME record, if one exists.

The exact result will depend on the domain's current DNS configuration.

---

# 🛠️ PRACTICAL — STEP 3: Browser DevTools

Open any website.

Press:

```text
F12
```

Go to:

```text
Network
```

Reload the page.

You can observe the requests made by your browser.

This helps connect the concepts:

```text
Domain
   ↓
DNS Resolution
   ↓
Server
   ↓
HTTP/HTTPS Request
   ↓
Response
```

---

# 🔥 1️⃣9️⃣ DNS in Your Future Full-Stack Project

Imagine you deploy your full-stack application.

You have:

```text
React Frontend
Node.js Backend
PostgreSQL Database
```

You might have domains like:

```text
myapp.com
api.myapp.com
```

The architecture could be:

```text
User
  │
  ▼
myapp.com
  │
  ▼
React Frontend

User
  │
  ▼
api.myapp.com
  │
  ▼
Node.js + Express API
  │
  ▼
PostgreSQL
```

DNS helps direct these hostnames to the appropriate infrastructure.

This is something you'll work with later during **deployment and hosting**.

---

# 🎯 INTERVIEW QUESTIONS

### Q1. What is DNS?

> DNS stands for Domain Name System. It is a hierarchical naming system that translates domain names into IP addresses and stores other information about Internet domains.

---

### Q2. Why do we need DNS?

> DNS allows users to access services using human-readable domain names instead of remembering numerical IP addresses.

---

### Q3. What is DNS Resolver?

> A DNS resolver is a service that receives DNS queries and finds the DNS information needed to answer them, often using cached data or querying the DNS hierarchy.

---

### Q4. What is an A record?

> An A record maps a domain name to an IPv4 address.

---

### Q5. What is an AAAA record?

> An AAAA record maps a domain name to an IPv6 address.

---

### Q6. What is a CNAME record?

> A CNAME record maps one domain name to another domain name, creating an alias.

---

### Q7. What is DNS caching?

> DNS caching stores previously resolved DNS information temporarily so that future lookups can be answered faster without repeating the entire resolution process.

---

### Q8. What is the difference between a domain name and an IP address?

> A domain name is a human-readable identifier such as `example.com`, while an IP address is a numerical network address used to identify a network destination.

---

# 📝 YOUR NOTES

```text
WEB FUNDAMENTALS

8. DNS — DOMAIN NAME SYSTEM
--------------------------------

DOMAIN NAME:
Human-readable name used to access
an Internet service.

Example:
google.com
github.com

DNS:
Domain Name System.

Purpose:
Translates domain names into IP addresses
and stores other DNS information.

Basic Flow:

Domain Name
     ↓
DNS Resolver
     ↓
DNS Lookup
     ↓
IP Address
     ↓
Server

DNS Hierarchy:

DNS Resolver
     ↓
Root
     ↓
TLD
     ↓
Authoritative DNS
     ↓
DNS Record

DNS RECORDS:

A:
Domain → IPv4

AAAA:
Domain → IPv6

CNAME:
Domain → Another Domain

Examples:

example.com
     ↓
A
     ↓
IPv4 Address

example.com
     ↓
AAAA
     ↓
IPv6 Address

www.example.com
     ↓
CNAME
     ↓
example.com

DNS CACHING:
DNS information can be temporarily cached
to improve lookup performance.

Important:

Domain Name:
Human-friendly name

IP Address:
Network address

DNS:
Helps translate between them
```

---

# ✅ CHECKPOINT

You should now understand:

```text
User enters:

https://www.example.com
          │
          ▼
       Domain
          │
          ▼
         DNS
          │
          ▼
    Find IP Address
          │
          ▼
        Server
          │
          ▼
    HTTP/HTTPS Request
          │
          ▼
       Response
          │
          ▼
       Browser
```

You have now learned:

```text
Client
   ↓
Server
   ↓
Web Server
   ↓
IP Address
   ↓
DNS
```

These concepts form the foundation of how the Web works.

---

# 🔜 NEXT TOPIC — TOPIC 9

## 🌐 HTTP (HYPERTEXT TRANSFER PROTOCOL)

This is a **very important topic** before you start Node.js backend development.

We will learn:

```text
What is HTTP?
       ↓
HTTP Request
       ↓
HTTP Response
       ↓
Request Line
       ↓
Response Status Line
       ↓
HTTP Methods
       ↓
GET
POST
PUT
PATCH
DELETE
       ↓
HTTP Status Codes
       ↓
2xx
3xx
4xx
5xx
       ↓
HTTP Headers
       ↓
Request Body
       ↓
Response Body
       ↓
Practical API Requests
```

