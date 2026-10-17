
## 1. What is a Cookie?

Definition: A cookie is a small piece of data stored in the user's browser that helps a website remember information between HTTP requests.

Example: When you log in to a website, a cookie can help the website recognize your session when you visit another page.

## 2. Flowchart: How Do Cookies Work?

1\. User

Enters their name in the login form

2\. Express Server

Receives the POST `/profile` request

3\. Set-Cookie

Server instructs the browser to store a cookie

`login=Pawan`

4\. Browser

Stores the cookie

5\. Next Request

Browser sends the cookie back to the server

## 3. Use-Case Diagram: Why Are Cookies Used?

Cookies help websites remember user-related information.

User

### Website Using Cookies

&#x20;Remember login sessions

&#x20;Remember shopping cart details

&#x20;Remember language preferences

&#x20;Remember theme preferences

### Real-life examples

- Login sessions: Help a website recognize a logged-in user.
- Shopping carts: Help retain cart-related information.
- Language preferences: Remember whether a user prefers English or another language.
- Theme preferences: Remember whether a user prefers light mode or dark mode.

## 4. Your Code — The Three Most Important Parts

### A. Creating a cookie

```
resp.setHeader(
    "Set-Cookie",
    `login=${req.body.name}; Path=/`
);
```

Purpose: The server sends a `Set-Cookie` response header to instruct the browser to store the cookie.

If the submitted name is `Pawan`, the header will look like:

```
Set-Cookie: login=Pawan; Path=/
```

### B. Reading a cookie

```
const cookiesData = req.get("cookie");
console.log(cookiesData);
```

Purpose: Reads the raw `Cookie` request header sent by the browser and prints it in the terminal.

Example output:

```
login=Pawan
```

This output appears only if the browser sends that cookie with the request.

### C. Reading form data

```
app.use(express.urlencoded({ extended: true }));
```

Purpose: Parses URL-encoded HTML form data so you can access submitted values using `req.body`.

For example:

```
req.body.name
```

returns the submitted name when the form contains a field named `name`.

## 5. Difference Between `Set-Cookie` and `Cookie`

| `Set-Cookie`                                      | `Cookie`                           |
| ------------------------------------------------- | ---------------------------------- |
| Sent by the server                                | Sent by the browser                |
| Response header                                   | Request header                     |
| Instructs the browser to store or update a cookie | Sends stored cookies to the server |
| Example: `login=Pawan`                            | Example: `login=Pawan`             |

Remember: `Set-Cookie` travels from server to browser; `Cookie` travels from browser to server.

## 6. Practical Example: Login Session

Suppose a user logs in to an online shopping website.

Step 1: User logs in

The user submits their login details.

Step 2: Server verifies the user

The server checks the submitted credentials.

Step 3: Server sends a session cookie

The browser stores a session identifier.

Step 4: User visits another page

The browser sends the cookie with a matching request.

Step 5: Server checks the session

The server verifies the session and identifies the user.

Important: Your current code stores the submitted name but does not verify the user's identity. In real applications, use a properly generated session ID and secure cookie settings rather than trusting a name stored in a cookie.

## 7. Quick Revision

| Question                                    | Answer                                                        |
| ------------------------------------------- | ------------------------------------------------------------- |
| What is a cookie?                           | Small data stored in the browser.                             |
| Why are cookies used?                       | To remember information between requests.                     |
| Who stores the cookie?                      | The browser.                                                  |
| How does the server create a cookie?        | By sending the `Set-Cookie` response header.                  |
| How does the browser send a cookie?         | Through the `Cookie` request header.                          |
| What does `Path=/` mean?                    | The cookie is available to matching paths across the website. |
| Does a cookie alone provide authentication? | No. The server must verify the session or token.              |

Learning flow: HTTP requests and responses → Form data → Cookies → Sessions → Authentication.