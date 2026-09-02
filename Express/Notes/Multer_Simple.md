# Multer File Upload — Simple Notes

## 1. Why do we use Multer?

Multer is used to **handle file uploads in Node.js/Express**.

When a user selects a file in the browser, Multer receives that file and helps save it on the server.

### Basic flow

```text
Browser
   ↓
Select File
   ↓
POST Request
   ↓
Multer
   ↓
Save File
   ↓
upload folder
```

---

## 2. `multipart/form-data`

In the HTML form:

```html
<form action="/upload" method="post" enctype="multipart/form-data">
```

### `multipart/form-data`

It tells the browser:

> "This form contains a file, so send the form data in a format that supports files."

Without it, file upload will not work correctly.

---

## 3. `multer.diskStorage()`

```js
const storage = multer.diskStorage({
```

`diskStorage()` is used to **define rules for saving the file on the computer/server disk**.

It mainly answers two questions:

```text
1. Where should the file be saved?
2. What should the file be called?
```

---

## 4. `destination`

```js
destination: function(req, file, cb) {
    cb(null, "upload");
}
```

`destination` tells Multer:

> **Where should I save the file?**

Here:

```js
cb(null, "upload");
```

means:

```text
No error
      +
Save inside "upload" folder
```

So the file goes into:

```text
upload/
```

---

## 5. `filename`

```js
filename: function(req, file, cb) {
    cb(null, file.originalname);
}
```

`filename` tells Multer:

> **What name should the saved file have?**

```js
file.originalname
```

means the **original name of the file selected by the user**.

For example:

```text
User selects → photo.jpg

Saved as → photo.jpg
```

---

## 6. What is `cb`?

`cb` means **callback function**.

We use it to give Multer our answer.

### Destination:

```js
cb(null, "upload");
```

Means:

> "There is no error. Use the `upload` folder."

### Filename:

```js
cb(null, file.originalname);
```

Means:

> "There is no error. Use the original filename."

---

## 7. Complete storage code

```js
const storage = multer.diskStorage({

    destination: function(req, file, cb) {
        cb(null, "upload");
    },

    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }

});
```

Think of it as:

```text
diskStorage()
      ↓
Create storage rules
      ↓
┌─────────────────────────┐
│ Destination → upload    │
│ Filename    → original  │
└─────────────────────────┘
```

---

## 8. Connect storage with Multer

```js
const upload = multer({ storage });
```

This means:

> "Create a Multer upload handler and use my `storage` rules."

Now:

```text
storage
   ↓
contains saving rules

upload
   ↓
Multer + those rules
```

---

## 9. Actual upload

In the route:

```js
app.post("/upload", upload.single("myfile"), (req, resp) => {
```

`upload.single("myfile")` means:

> "Multer, accept one file whose form field name is `myfile`."

HTML:

```html
<input type="file" name="myfile">
```

Both names must match:

```text
HTML                    Server

myfile       ←→        myfile
```

---

# Complete Flow

Suppose the user selects:

```text
cat.jpg
```

Then:

```text
User selects cat.jpg
        ↓
HTML form
        ↓
multipart/form-data
        ↓
POST /upload
        ↓
upload.single("myfile")
        ↓
Multer receives cat.jpg
        ↓
destination()
        ↓
upload folder
        ↓
filename()
        ↓
cat.jpg
        ↓
upload/cat.jpg
```

### Final result

```text
project/
│
├── server.js
│
└── upload/
    └── cat.jpg
```

## Remember These 5 Things

```text
Multer
→ Handles file upload

multipart/form-data
→ Sends file through the form

diskStorage()
→ Creates storage rules

destination
→ Where to save the file

filename
→ What name to give the file
```

**One-line summary:**

> Browser sends the file → Multer receives it → `diskStorage` tells Multer where and with what name to save it.
