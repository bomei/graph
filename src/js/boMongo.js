const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

class BoMongo {
  constructor(db) {
    this.url = `mongodb://localhost:27017/${db}`
  }

  insert(collection, dataBundle, callback) {
    MongoClient.connect(this.url, (err, db) => {
      assert.equal(null, err)

      db.collection(collection).insertMany(dataBundle, (err, r) => {
        callback(err, r)
      })

      db.close()
    })
  }

  updateOne(collection, get, set, callback) {
    MongoClient.connect(this.url, (err, db) => {
      assert.equal(null, err)

      db.collection(collection).updateOne(get, set, (err, r) => {
        callback(err, r)
      })

      db.close()
    })
  }

  updateMany(collection, get, set, callback) {
    MongoClient.connect(this.url, (err, db) => {
      assert.equal(null, err)

      db.collection(collection).updateMany(get, set, (err, r) => {
        callback(err, r)
      })

      db.close()
    })
  }

  deleteOne(collection, get, callback) {
    MongoClient.connect(this.url, (err, db) => {
      assert.equal(null, err)

      db.collection(collection).deleteOne(get, (err, r) => {
        callback(err, r)
      })

      db.close()
    })
  }

  deleteMany(collection, get, callback) {
    MongoClient.connect(this.url, (err, db) => {
      assert.equal(null, err)

      db.collection(collection).deleteMany(get, (err, r) => {
        callback(err, r)
      })

      db.close()
    })
  }

  findOneAndDelete(collection, get, option = {}, callback) {
    MongoClient.connect(this.url, (err, db) => {
      assert.equal(null, err)

      db.collection(collection).findOneAndDelete(get, option, (err, r) => {
        callback(err, r)
      })

      db.close()
    })
  }

  findOneAndUpdate(collection, get, set, option = {}, callback) {
    MongoClient.connect(this.url, (err, db) => {
      assert.equal(null, err)

      db.collection(collection).findOneAndUpdate(get, set, option, (err, r) => {
        callback(err, r)
      })

      db.close()
    })
  }
}

module.exports = BoMongo