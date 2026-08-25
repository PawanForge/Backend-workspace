# 🍃 MongoDB Complete Roadmap — Only MongoDB Topics

```text
MongoDB Basics
      ↓
MongoDB Architecture
      ↓
Database / Collection / Document
      ↓
MongoDB CRUD
      ↓
Query Operators
      ↓
Update Operators
      ↓
Arrays & Embedded Documents
      ↓
Data Modeling
      ↓
Relationships
      ↓
Indexes
      ↓
Aggregation Pipeline
      ↓
Transactions
      ↓
MongoDB Atlas
      ↓
Security
      ↓
Performance Optimization
      ↓
Backup & Restore
      ↓
Monitoring
      ↓
Advanced MongoDB
```

## 🟢 LEVEL 1 — MongoDB Fundamentals

1. What is MongoDB?
2. NoSQL vs SQL
3. Document Database
4. BSON
5. JSON vs BSON
6. Database
7. Collection
8. Document
9. Field
10. `_id`
11. ObjectId
12. MongoDB architecture

---

## 🟢 LEVEL 2 — MongoDB Installation & Tools

1. MongoDB Community Server
2. MongoDB Shell (`mongosh`)
3. MongoDB Compass
4. MongoDB Atlas
5. Connecting to MongoDB
6. Connection strings
7. Database users
8. Basic MongoDB commands

---

## 🟢 LEVEL 3 — Database & Collection

Learn:

```text
show dbs
use database
show collections
db.createCollection()
db.dropDatabase()
db.collection.drop()
```

Also understand:

* Databases
* Collections
* Documents
* Capped collections
* Collection options

---

# 🔥 LEVEL 4 — CRUD Operations

## Create

```text
insertOne()
insertMany()
```

## Read

```text
find()
findOne()
```

## Update

```text
updateOne()
updateMany()
replaceOne()
```

## Delete

```text
deleteOne()
deleteMany()
```

CRUD is the **most important MongoDB foundation**.

---

# 🟡 LEVEL 5 — Querying

### Comparison Operators

```text
$eq
$ne
$gt
$gte
$lt
$lte
$in
$nin
```

### Logical Operators

```text
$and
$or
$not
$nor
```

### Element Operators

```text
$exists
$type
```

### Evaluation Operators

```text
$regex
$text
$expr
```

---

# 🟠 LEVEL 6 — Projection

Learn how to select specific fields.

```text
1  → include
0  → exclude
```

Topics:

* Field projection
* `_id` projection
* Nested field projection

---

# 🟠 LEVEL 7 — Update Operators

### Field Operators

```text
$set
$unset
$rename
```

### Numeric Operators

```text
$inc
$mul
$min
$max
```

### Array Operators

```text
$push
$pop
$pull
$addToSet
```

### Array Modifiers

```text
$each
$slice
$sort
```

---

# 🔵 LEVEL 8 — Arrays & Embedded Documents

Learn:

* Arrays
* Nested objects
* Embedded documents
* Querying nested fields
* Querying arrays
* Updating arrays
* Array operators
* Positional operator `$`
* `$[]`
* `$[identifier]`

Example structure:

```text
User
 ├── name
 ├── email
 └── address
      ├── city
      └── country
```

---

# 🔥 LEVEL 9 — Data Modeling

Very important MongoDB topic.

Learn:

### Embedding

```text
User
 └── Address
```

### Referencing

```text
User
   ↓
Address
```

Understand:

* One-to-One
* One-to-Many
* Many-to-Many
* Embedded data
* Referenced data
* Normalization
* Denormalization
* Schema design
* Read-heavy design
* Write-heavy design

---

# 🔵 LEVEL 10 — Indexes

Learn:

1. What is an index?
2. Why indexes?
3. Single-field index
4. Compound index
5. Multikey index
6. Unique index
7. Sparse index
8. Partial index
9. Text index
10. TTL index
11. Index intersection
12. Index selection

Also learn:

```text
createIndex()
dropIndex()
getIndexes()
```

And especially:

```text
explain()
```

---

# 🔥 LEVEL 11 — Aggregation Pipeline

This is one of the **most important advanced MongoDB topics**.

Learn:

```text
$match
$project
$group
$sort
$limit
$skip
$count
$unwind
$lookup
$addFields
$set
$unset
$replaceRoot
$replaceWith
```

Pipeline:

```text
Collection
    ↓
$match
    ↓
$group
    ↓
$sort
    ↓
$project
    ↓
Result
```

Then advanced aggregation:

```text
$facet
$bucket
$bucketAuto
$merge
$out
$setWindowFields
```

---

# 🟣 LEVEL 12 — MongoDB Relationships

Learn relationships through:

```text
$lookup
```

Topics:

* One-to-One
* One-to-Many
* Many-to-Many
* Joins using `$lookup`
* `$lookup` with pipeline
* `$unwind`
* Referenced documents

---

# 🔴 LEVEL 13 — Transactions

Learn:

1. What is a transaction?
2. ACID
3. Single-document atomicity
4. Multi-document transactions
5. Sessions
6. Commit
7. Abort
8. Transaction errors
9. Retry logic

Concept:

```text
Start Transaction
      ↓
Operation 1
      ↓
Operation 2
      ↓
Operation 3
      ↓
Commit
```

If something fails:

```text
Rollback / Abort
```

---

# 🟤 LEVEL 14 — MongoDB Atlas

Learn:

* Atlas account
* Cluster
* Database deployment
* Database users
* Network access
* IP access list
* Connection string
* Atlas UI
* Collections
* Atlas Search
* Monitoring

---

# 🔐 LEVEL 15 — MongoDB Security

Learn:

* Authentication
* Authorization
* Database users
* Roles
* Role-based access
* Privileges
* SCRAM
* TLS/SSL
* Encryption
* Encryption at rest
* Encryption in transit
* Network security
* IP restrictions
* Security best practices

---

# ⚡ LEVEL 16 — Performance Optimization

Learn:

```text
Indexes
   ↓
Query Optimization
   ↓
explain()
   ↓
Execution Plan
   ↓
Performance
```

Topics:

* Query performance
* Index optimization
* Covered queries
* Query planner
* Execution stats
* Slow queries
* Large collections
* Pagination
* Projection optimization
* Schema optimization

---

# 💾 LEVEL 17 — Backup & Restore

Learn:

* Backup
* Restore
* `mongodump`
* `mongorestore`
* Atlas backup
* Point-in-time recovery
* Data export
* Data import

---

# 📊 LEVEL 18 — Monitoring

Learn:

* Database monitoring
* Server monitoring
* Query monitoring
* Performance metrics
* Slow queries
* Database statistics
* Connection monitoring
* Atlas monitoring
* Alerts

Useful commands/concepts:

```text
serverStatus
dbStats
collStats
currentOp
```

---

# 🧩 LEVEL 19 — Advanced MongoDB Architecture

Learn:

### Replication

```text
Replica Set
   ↓
Primary
   ↓
Secondary
   ↓
Secondary
```

Topics:

* Replica sets
* Primary
* Secondary
* Elections
* Failover
* Read preference
* Write concern
* Read concern

### Sharding

```text
Application
     ↓
MongoDB Cluster
     ↓
Shards
```

Learn:

* Sharding
* Shard key
* Config servers
* Query routers
* Horizontal scaling
* Sharded collections
* Balancing

---

# 🚀 LEVEL 20 — Advanced MongoDB Features

After everything above:

* Change Streams
* Time Series Collections
* GridFS
* Capped Collections
* MongoDB Search / Atlas Search
* Geospatial queries
* `$geoNear`
* Time series data
* Schema validation
* JSON Schema validation
* Collation
* Views
* Materialized views
* MongoDB Compass advanced features

---

# 🎯 FINAL ORDER TO LEARN

```text
1.  MongoDB Basics
2.  BSON & Documents
3.  Database & Collections
4.  CRUD
5.  Query Operators
6.  Projection
7.  Update Operators
8.  Arrays
9.  Embedded Documents
10. Data Modeling
11. Relationships
12. Indexes
13. explain()
14. Aggregation
15. $lookup
16. Transactions
17. Atlas
18. Security
19. Performance
20. Backup & Restore
21. Monitoring
22. Replication
23. Sharding
24. Change Streams
25. Advanced Features
```

### ⭐ Priority

If your goal is **Node + Express backend development**, don't try to master all 25 immediately.

**First master:**

```text
Basics
 ↓
CRUD
 ↓
Queries
 ↓
Update Operators
 ↓
Arrays & Objects
 ↓
Data Modeling
 ↓
Indexes
 ↓
Aggregation
 ↓
Transactions
 ↓
Atlas
```

Ye MongoDB ka **core professional roadmap** hai.
