## 1. `let dataBody = [];`

**What it does:**

* Creates an empty array.
* Stores all incoming data chunks.

**Why needed:**

* Request data comes in pieces (chunks), not all at once.

---

## 2. `req.on('data', (chunk) => {})`

**What it does:**

* Listens for the `"data"` event.
* Runs every time a new chunk arrives.

**Why needed:**

* To receive the request body piece by piece.

---

## 3. `chunk`

**What it is:**

* A small piece of the request body.
* Stored as a `Buffer` (binary data).

**Example:**

```text
Chunk 1 → "nam"
Chunk 2 → "e=Ra"
Chunk 3 → "hul"
```

---

## 4. `dataBody.push(chunk)`

**What it does:**

* Adds each received chunk to the `dataBody` array.

**Why needed:**

* To collect all pieces until the complete request is received.

---

## Flow

```text
Browser sends data
        ↓
req.on('data')
        ↓
Receives chunk
        ↓
dataBody.push(chunk)
        ↓
Stores all chunks
        ↓
Wait for 'end' event
```

### Key Point

* **`req`** → Incoming request from the browser.
* **`data` event** → Fires whenever a chunk arrives.
* **`chunk`** → One piece of the request body.
* **`dataBody`** → Array that stores all chunks until the request is complete.
