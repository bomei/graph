const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

class BoMongo {
  constructor(db) {
    this.url = `mongodb://localhost:27017/${db}`
  }

  insert(collection, dataBundle) {
    MongoClient.connect(this.url, (err, db) => {
      assert.equal(null, err)

      db.collection(collection).insertMany(dataBundle, (err, r) => {
        assert.equal(null, err)
        assert.equal(dataBundle.length, r.insertedCount)
      })

      db.close()
    })
  }
}

module.exports = BoMongo