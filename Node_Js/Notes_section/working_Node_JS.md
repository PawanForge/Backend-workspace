
console.log("Start");

function first() {
    console.log("First");
    second();
    console.log("First End");
}

function second() {
    console.log("Second");
}

setTimeout(() => {
    console.log("Timeout");
}, 0);

first();

console.log("End");


---

Step 1: What is Call Stack?

The Call Stack is a stack data structure.

It works on LIFO (Last In, First Out).

Think of a stack of plates.

Put Plate A
Put Plate B
Put Plate C

Remove?

First C
Then B
Then A

The last plate placed comes out first.

The same happens with function calls.


---

Step 2: Global Execution

When Node starts,

Call Stack

---------
Global()
---------

Everything in the file runs inside Global().


---

Step 3: console.log("Start")

Call Stack

---------
console.log()
Global()
---------

Output

Start

After printing,

Call Stack

---------
Global()
---------

console.log() is removed.


---

Step 4: setTimeout()

Node reaches

setTimeout(callback,0)

The setTimeout() function enters the Call Stack.

---------
setTimeout()
Global()
---------

Node sees it is an asynchronous task.

So it sends it to Node Timer API.

Node Timer API

setTimeout(callback)

The setTimeout() function is removed from the Call Stack immediately.

The callback does not run now.


---

Step 5: first()

Now

first();

Call Stack

---------
first()
Global()
---------

Inside first()

console.log("First")

Stack

---------
console.log()
first()
Global()
---------

Output

First

console.log() finishes.

---------
first()
Global()
---------


---

Step 6: second()

Now first() calls second()

second();

Stack

---------
second()
first()
Global()
---------

Inside second()

console.log("Second")

Stack

---------
console.log()
second()
first()
Global()
---------

Output

Second

console.log() finishes.

---------
second()
first()
Global()
---------

second() also finishes.

---------
first()
Global()
---------

Notice what happened.

Because second() was the last function added, it finished first.

This is why we say the Call Stack works on LIFO (Last In, First Out).


---

Step 7: Back to first()

Now execution returns to first()

console.log("First End")

Output

First End

first() finishes.

Stack

---------
Global()
---------


---

Step 8: console.log("End")

Output

End

Stack

---------
Global()
---------


---

Step 9: Timer Completes

The timer finishes.

The callback goes into the Callback Queue.

Callback Queue

-----------------
Timeout Callback
-----------------


---

Step 10: Event Loop

The Event Loop keeps checking:

Is Call Stack Empty?

Current stack

---------
Global()
---------

After Global() finishes,

Call Stack

Empty

Now the Event Loop sees:

Stack is empty ✅

Callback Queue has a callback ✅


It moves the callback to the Call Stack.

Callback Queue
      │
      ▼

Call Stack

Timeout Callback

Now

console.log("Timeout")

runs.

Output

Timeout

Program ends.


---

Final Output

Start
First
Second
First End
End
Timeout


---

Why is the timeout printed last even with 0 ms?

Many people think:

setTimeout(...,0)

means "run immediately."

❌ Wrong.

It means:

> "Run this callback after the current Call Stack becomes empty."



So even with 0 ms, Node first finishes all synchronous code.


---

Call Stack vs Callback Queue

Call Stack	Callback Queue

Executes synchronous code	Stores completed async callbacks
Uses LIFO (Last In, First Out)	Uses FIFO (First In, First Out)
Only one function executes at a time	Waits until Event Loop moves callbacks



---

Complete Flow

JS File
   │
   ▼
Call Stack (LIFO)
   │
   ├── console.log("Start")
   ├── setTimeout() → Node Timer API
   ├── first()
   │      ├── console.log("First")
   │      ├── second()
   │      │      └── console.log("Second")
   │      └── console.log("First End")
   └── console.log("End")
          │
          ▼
Call Stack Empty
          │
          ▼
Event Loop checks
          │
          ▼
Callback Queue (FIFO)
          │
          ▼
Move Timeout Callback to Call Stack
          │
          ▼
console.log("Timeout")

Remember these two rules:

Call Stack = LIFO → Last function called finishes first.

Callback Queue = FIFO → First callback that enters the queue is executed first when the Event Loop finds the Call Stack empty.