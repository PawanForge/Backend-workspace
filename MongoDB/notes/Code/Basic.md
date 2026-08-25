
# 🍃 MongoDB — Starting Notes + PowerShell Commands

## 1. First: MongoDB Check

PowerShell open karo:

```powershell
mongosh --version
```

Agar version aa gaya → MongoDB Shell installed hai.

MongoDB service check:

```powershell
Get-Service MongoDB
```

Start karna ho:

```powershell
Start-Service MongoDB
```

Stop:

```powershell
Stop-Service MongoDB
```

---

# 2. MongoDB Shell Start

```powershell
mongosh
```

Ab tum MongoDB ke andar ho.

Exit:

```text
exit
```

---

# 3. First Commands

### Databases dekhna

```javascript
show dbs
```

### Current database

```javascript
db
```

### Database select/create

```javascript
use college
```

> MongoDB database tab properly create hota hai jab usme data insert karte ho.

### Collections dekhna

```javascript
show collections
```

---

# 4. Collection Create

```javascript
db.createCollection("students")
```

Check:

```javascript
show collections
```

---

# 5. First Document Insert

```javascript
db.students.insertOne({
    name: "Pawan",
    age: 21,
    course: "CSE"
})
```

Check data:

```javascript
db.students.find()
```

---

# 6. Multiple Documents

```javascript
db.students.insertMany([
    {
        name: "Rahul",
        age: 20,
        course: "CSE"
    },
    {
        name: "Aman",
        age: 22,
        course: "IT"
    }
])
```

Check:

```javascript
db.students.find()
```

---

# 7. Read Data

### All documents

```javascript
db.students.find()
```

### One document

```javascript
db.students.findOne()
```

### Specific data

```javascript
db.students.find({
    course: "CSE"
})
```

### Age condition

```javascript
db.students.find({
    age: 21
})
```

---

# 8. Query Operators

Greater than:

```javascript
db.students.find({
    age: { $gt: 20 }
})
```

Less than:

```javascript
db.students.find({
    age: { $lt: 22 }
})
```

Greater than or equal:

```javascript
db.students.find({
    age: { $gte: 21 }
})
```

Less than or equal:

```javascript
db.students.find({
    age: { $lte: 21 }
})
```

---

# 9. Update

### One document

```javascript
db.students.updateOne(
    { name: "Pawan" },
    { $set: { age: 22 } }
)
```

Check:

```javascript
db.students.find()
```

### Multiple documents

```javascript
db.students.updateMany(
    { course: "CSE" },
    { $set: { department: "Computer Science" } }
)
```

---

# 10. Delete

One:

```javascript
db.students.deleteOne({
    name: "Aman"
})
```

Multiple:

```javascript
db.students.deleteMany({
    course: "IT"
})
```

---

# 11. Delete Collection

```javascript
db.students.drop()
```

Delete database:

```javascript
db.dropDatabase()
```

---

# 🎯 Tumhara First MongoDB Learning Order

```text
MongoDB Install
      ↓
mongosh
      ↓
show dbs
      ↓
use database
      ↓
createCollection
      ↓
insertOne
      ↓
insertMany
      ↓
find
      ↓
findOne
      ↓
Query Operators
      ↓
updateOne
      ↓
updateMany
      ↓
deleteOne
      ↓
deleteMany
      ↓
drop
```

## ⭐ Abhi sirf itna seekho

**Day 1:** MongoDB + `mongosh` + Database + Collection

**Day 2:** `insertOne()` + `insertMany()` + `find()` + `findOne()`

**Day 3:** Query operators

**Day 4:** Update + Delete

**Day 5:** Arrays + Nested Objects

Uske baad **MongoDB → Mongoose → Node.js/Express** integration start karna.
