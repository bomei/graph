const BoMongo = require('./boMongo')
const assert = require('assert')

let boMongo = new BoMongo('bo')

function testInsert() {
  boMongo.insert('hello', [{
    a: 1,
    b: 2
  }])
}

function testUpdateOne() {
  boMongo.updateOne('hello', {a: 1}, {$set: {c: 2}}, (err, r) => {
    assert.equal(null, err)
    console.log(`Matched count: ${r.matchedCount}`)
    console.log(`Modified count: ${r.modifiedCount}`)
  })
}

function testUpdateMany() {
  boMongo.updateMany('hello', {a: 1}, {$set: {d: 2}}, (err, r) => {
    assert.equal(null, err)
    console.log(`Matched count: ${r.matchedCount}`)
    console.log(`Modified count: ${r.modifiedCount}`)
  })
}

testUpdateMany()