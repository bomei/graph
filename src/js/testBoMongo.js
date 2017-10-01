const BoMongo = require('./boMongo')

let boMongo = new BoMongo('bo')
boMongo.insert('hello', [{a: 1, b: 2}])