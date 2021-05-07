const db = require('./db');

const schema = new db.Schema({
  name: {
    type: String,
    required: [ true, 'Missing name field' ],
    trim: true
  },
  address: {
    type: String,
    required: [ true, 'Missing address field' ],
    trim: true
  },
  phone: {
    type: String,
    required: [ true, 'Missing phone field' ],
    trim: true
  },
  clinic: {
    type: String,
    required: [ true, 'Missing clinic field' ],
    enum: [ 'umum', 'gigi', 'mata', 'anak' ]
  },
  code: String,
  isDone: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  }
}, { 
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
 });

module.exports = db.model('Queue', schema, 'queues');