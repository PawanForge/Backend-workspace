# 🟢 TOPIC 5 — WEB BROWSER

## 🎯 Goal of this topic

After completing this topic, you should understand:

* What is a web browser?
* What happens when you enter a URL?
* How the browser communicates with a server
* What is a browser engine?
* What is a rendering engine?
* How HTML becomes a webpage
* How CSS is applied
* How JavaScript runs
* What are DOM and CSSOM?
* What is the Render Tree?
* What is Painting?
* How this connects to your HTML, CSS, JavaScript, and React knowledge

---

# 1️⃣ What is a Web Browser?

A **web browser** is a software application used to access and interact with websites and web applications.

Examples:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari
* Opera

You already use a browser every day.

When you enter:

```text
https://www.google.com
```

the browser performs many operations behind the scenes to show the webpage.

---

# 2️⃣ What Does a Browser Do?

A browser performs several important tasks.

For example, it:

```text
1. Takes a URL
       ↓
2. Finds the server
       ↓
3. Sends a request
       ↓
4. Receives a response
       ↓
5. Downloads HTML
       ↓
6. Downloads CSS
       ↓
7. Downloads JavaScript
       ↓
8. Builds DOM
       ↓
9. Builds CSSOM
       ↓
10. Creates Render Tree
       ↓
11. Calculates Layout
       ↓
12. Paints the page
       ↓
13. Displays the webpage
```

You don't need to memorize every internal step yet.

The important idea is:

> The browser takes web resources from the server and converts them into the visual webpage that you see.

---

# 3️⃣ What Happens When You Enter a URL?

Suppose you enter:

```text
https://example.com
```

into your browser.

The high-level process looks like this:

```text
You enter URL
      ↓
Browser
      ↓
Finds server
      ↓
Sends HTTP/HTTPS Request
      ↓
Server
      ↓
Sends Response
      ↓
Browser receives resources
      ↓
HTML + CSS + JavaScript
      ↓
Browser processes them
      ↓
Webpage displayed
```

We will study **DNS, IP Address, HTTP, and HTTPS** separately later.

For now, understand the overall flow.

---

# 4️⃣ Browser Requests Resources

When you open a webpage, the browser may request multiple resources.

For example:

```text
HTML
CSS
JavaScript
Images
Fonts
Videos
JSON Data
```

Imagine your webpage has:

```html
<link rel="stylesheet" href="style.css">
<script src="app.js"></script>
<img src="logo.png">
```

The browser needs to get all these resources.

The flow can be:

```text
Browser
   │
   ├── Request HTML
   │
   ├── Request CSS
   │
   ├── Request JavaScript
   │
   └── Request Image
          │
          ▼
       Server
```

The browser then processes these resources.

---

# 5️⃣ Browser Engine

A browser internally has different components.

One important component is the **browser engine**.

Its job is to coordinate browser operations and help process web content.

Different browsers use different browser technologies.

For example, common rendering engines include:

* Blink
* WebKit
* Gecko

You don't need to memorize every browser architecture detail at this stage.

For your web development journey, the most important thing is understanding the **rendering process**.

---

# 6️⃣ Rendering Engine

The **rendering engine** is responsible for taking web content and displaying it visually on the screen.

For example:

```text
HTML
  +
CSS
  ↓
Rendering
  ↓
Visual Webpage
```

Suppose you have:

```html
<h1>Hello World</h1>
```

and:

```css
h1 {
    color: blue;
    font-size: 40px;
}
```

The browser processes the HTML and CSS and displays:

```text
Hello World
```

with the specified styling.

---

# 7️⃣ HTML Parsing

Let's start with HTML.

Suppose the browser receives:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>

<body>
    <h1>Hello World</h1>
    <p>Welcome to my website.</p>
</body>

</html>
```

The browser reads and parses the HTML.

It creates a structure called the:

> **DOM — Document Object Model**

---

# 8️⃣ What is the DOM?

The **DOM** is a tree-like representation of an HTML document.

For example:

```html
<html>
    <body>
        <h1>Hello World</h1>
        <p>Welcome</p>
    </body>
</html>
```

The browser represents it conceptually like:

```text
Document
   │
   └── html
        │
        └── body
             │
             ├── h1
             │    └── "Hello World"
             │
             └── p
                  └── "Welcome"
```

This is the **DOM Tree**.

JavaScript can interact with the DOM.

For example:

```javascript
document.querySelector("h1");
```

This allows JavaScript to find the `<h1>` element.

You already learned DOM manipulation in JavaScript.

Now you understand **why the DOM exists**.

The browser creates the DOM from the HTML document.

---

# 9️⃣ CSS Parsing

Now let's look at CSS.

Suppose you have:

```css
h1 {
    color: blue;
    font-size: 40px;
}
```

The browser reads and processes the CSS.

It creates a structure called the:

> **CSSOM — CSS Object Model**

CSSOM represents the styles that the browser needs to apply.

Conceptually:

```text
CSS
 ↓
CSS Parser
 ↓
CSSOM
```

You don't usually interact with CSSOM directly in everyday development, but the browser uses it internally.

---

# 🔟 DOM + CSSOM

Now we have:

```text
HTML
 ↓
DOM

CSS
 ↓
CSSOM
```

The browser combines the information from both.

Conceptually:

```text
DOM
 +
CSSOM
 ↓
Render Tree
```

---

# 1️⃣1️⃣ What is the Render Tree?

The **Render Tree** contains the information about elements that need to be displayed and how they should be styled.

Simplified flow:

```text
HTML
 ↓
DOM
  \
   \
    → Render Tree
   /
  /
CSS
 ↓
CSSOM
```

Not every DOM node necessarily appears in the Render Tree.

For example:

```css
display: none;
```

An element with `display: none` is not displayed, so it doesn't contribute to the rendered output in the same way as visible elements.

---

# 1️⃣2️⃣ Layout

After building the Render Tree, the browser needs to calculate where everything should appear.

This process is called **Layout**.

For example:

```text
Header
  ↓
Navigation
  ↓
Main Content
  ↓
Footer
```

The browser calculates:

* Width
* Height
* Position
* Size
* Spacing

For example:

```css
.box {
    width: 200px;
    height: 100px;
    margin: 20px;
}
```

The browser calculates where the `.box` should appear.

---

# 1️⃣3️⃣ Painting

After layout, the browser needs to visually draw the elements.

This process is called **Painting**.

For example:

```text
Layout
  ↓
Where should the element be?
  ↓
Paint
  ↓
What should it look like?
```

The browser paints things such as:

* Text
* Colors
* Borders
* Shadows
* Images

Finally, you see the webpage on your screen.

---

# 🔥 COMPLETE BROWSER RENDERING FLOW

Remember this simplified flow:

```text
        HTML
          │
          ▼
     HTML Parser
          │
          ▼
         DOM
          │
          │
          ├─────────────┐
          │             │
          ▼             ▼
        CSS          JavaScript
          │             │
          ▼             ▼
       CSSOM       JS Execution
          │             │
          └──────┬──────┘
                 ▼
            Render Tree
                 │
                 ▼
               Layout
                 │
                 ▼
              Painting
                 │
                 ▼
            Webpage
```

This is a **simplified model** of browser rendering. Real browsers perform many optimizations and may not always follow this exact linear sequence.

---

# 1️⃣4️⃣ How Does JavaScript Fit In?

You already know JavaScript.

Suppose you have:

```html
<button id="btn">Click Me</button>
```

JavaScript:

```javascript
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    alert("Button clicked!");
});
```

The browser:

1. Parses HTML
2. Creates DOM
3. Downloads/parses JavaScript
4. Executes JavaScript
5. JavaScript accesses DOM
6. User clicks button
7. Event handler executes

Flow:

```text
HTML
 ↓
DOM
 ↓
JavaScript
 ↓
DOM Manipulation
 ↓
Browser Updates Page
```

This is why your JavaScript knowledge is important for understanding React.

---

# 1️⃣5️⃣ Where Does React Fit?

You already know React.

React also ultimately works with the browser's rendering environment.

Conceptually:

```text
React Code
    ↓
React creates/manages UI representation
    ↓
Browser DOM
    ↓
Browser Rendering
    ↓
Screen
```

For example:

```jsx
function App() {
    return <h1>Hello World</h1>;
}
```

React manages the UI updates, and the browser ultimately renders the resulting DOM and styles.

The browser is still responsible for displaying the final result.

---

# 🛠️ PRACTICAL — STEP 1: Inspect the DOM

Open:

```text
https://example.com
```

Press:

```text
F12
```

Open:

```text
Elements
```

You will see something similar to:

```html
<html>
    <head>
        ...
    </head>

    <body>
        ...
    </body>
</html>
```

This is the DOM representation that DevTools lets you inspect.

Try this:

1. Find an `<h1>`.
2. Right-click it.
3. Select **Edit as HTML**.
4. Change its text.
5. Press Enter.

For example:

```html
<h1>Hello Browser</h1>
```

You will see the page change.

This is a temporary DOM change made in your browser.

---

# 🛠️ PRACTICAL — STEP 2: Change CSS

In the **Elements** tab, select an element.

You will see the **Styles** panel.

Try adding:

```css
color: red;
font-size: 50px;
```

You will immediately see the visual change.

The flow is:

```text
CSS Rule
 ↓
Browser applies style
 ↓
Layout may change
 ↓
Browser repaints
 ↓
Screen updates
```

---

# 🛠️ PRACTICAL — STEP 3: Use JavaScript to Change DOM

Open:

```text
Console
```

Run:

```javascript
document.querySelector("h1").textContent = "Changed using JavaScript";
```

The `<h1>` text will change.

You just performed:

```text
JavaScript
    ↓
DOM Manipulation
    ↓
Browser Updates UI
```

---

# 🧪 PRACTICAL TASK

Create a file:

```text
browser-practice
│
└── index.html
```

Put this code inside:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Browser Practice</title>

    <style>
        h1 {
            color: blue;
        }

        .box {
            width: 200px;
            padding: 20px;
            background-color: lightgray;
        }
    </style>
</head>

<body>

    <h1 id="title">Browser Rendering Practice</h1>

    <div class="box">
        <p>Hello Browser!</p>
    </div>

    <button id="btn">Change Title</button>

    <script>
        const button = document.querySelector("#btn");
        const title = document.querySelector("#title");

        button.addEventListener("click", () => {
            title.textContent = "Title Changed!";
        });
    </script>

</body>
</html>
```

Open the file in your browser.

Click:

```text
Change Title
```

Observe what happens.

The simplified process is:

```text
HTML
 ↓
DOM
 ↓
JavaScript finds button
 ↓
User clicks button
 ↓
JavaScript changes DOM
 ↓
Browser updates rendered page
```

---

# 🎯 INTERVIEW QUESTIONS

### Q1. What is a web browser?

> A web browser is software that allows users to access and interact with websites and web applications. It requests resources from servers and processes HTML, CSS, and JavaScript to display webpages.

---

### Q2. What is DOM?

> DOM stands for Document Object Model. It is a tree-like representation of an HTML document that allows JavaScript and other browser APIs to interact with the document.

---

### Q3. What is CSSOM?

> CSSOM stands for CSS Object Model. It represents the CSS rules and styles that the browser processes for a document.

---

### Q4. What is the Render Tree?

> The Render Tree is a structure used by the browser during rendering that combines relevant document structure and styling information to determine what should be displayed.

---

### Q5. What is Layout?

> Layout is the process where the browser calculates the size and position of elements on the page.

---

### Q6. What is Painting?

> Painting is the process where the browser draws the visual appearance of elements, such as text, colors, borders, and images.

---

### Q7. What happens when JavaScript changes the DOM?

> When JavaScript modifies the DOM, the browser may need to recalculate styles, layout, and repaint parts of the page depending on what changed.

---

# 📝 YOUR NOTES

```text
WEB FUNDAMENTALS

5. WEB BROWSER
--------------------------------

Browser:
Software used to access websites and web applications.

Examples:
- Chrome
- Firefox
- Edge
- Safari

Browser Responsibilities:

1. Sends requests
2. Receives responses
3. Processes HTML
4. Processes CSS
5. Executes JavaScript
6. Builds DOM
7. Builds CSSOM
8. Creates Render Tree
9. Performs Layout
10. Paints the page

HTML
 ↓
DOM

CSS
 ↓
CSSOM

DOM + CSSOM
 ↓
Render Tree
 ↓
Layout
 ↓
Painting
 ↓
Webpage

DOM:
Document Object Model.
Tree-like representation of an HTML document.

CSSOM:
CSS Object Model.
Representation of CSS rules and styles.

Layout:
Calculates size and position of elements.

Painting:
Draws the visual appearance of elements.

Simplified Browser Flow:

URL
 ↓
Request
 ↓
Server Response
 ↓
HTML + CSS + JS
 ↓
DOM + CSSOM
 ↓
Render Tree
 ↓
Layout
 ↓
Painting
 ↓
Webpage
```

---

# ✅ CHECKPOINT

You should now be able to explain this:

> **When I enter a URL, the browser communicates with a server and receives resources such as HTML, CSS, and JavaScript. The browser parses the HTML into the DOM, processes CSS into the CSSOM, executes JavaScript, determines what needs to be rendered, calculates layout, paints the page, and displays it to the user.**

Don't worry if the exact internal browser implementation feels complex. The goal right now is to understand the **overall concept**.

---

# 🔜 NEXT TOPIC

## **TOPIC 6 — WEB SERVER**

We will learn:

```text
What is a Server?
       ↓
What is a Web Server?
       ↓
Web Server vs Application Server
       ↓
Static Files
       ↓
Dynamic Content
       ↓
How a Server Handles Requests
       ↓
Apache / Nginx basics
       ↓
Node.js Server
       ↓
Practical: Create Your First Local Server
```