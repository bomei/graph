const MongoClient = require('mongodb').MongoClient
// import MongoClient from 'mongodb'
const assert = require('assert')

let url = `mongodb://localhost:27017/vip`

MongoClient.connect(url, (err, db) => {
  assert.equal(null, err)
  console.log('Connected correctly to server')

  // Insert a single document
  db.collection('inserts').insertOne({a: 1}, function(err, r) {
    assert.equal(null, err)
    assert.equal(1, r.insertedCount)
    console.log(r.insertedCount)
    // Insert multiple documents
    db.collection('inserts').insertMany([{a: 2}, {a: 3}], function(err, r) {
      assert.equal(null, err)
      assert.equal(2, r.insertedCount)
      console.log(r.insertedCount)
      db.close()
    })
  })
})