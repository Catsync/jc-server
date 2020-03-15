require('dotenv').config()
require('./models/Comment')
const mongoose = require('mongoose')

const mongoUri = process.env.MONGODB_URI
const ACCOUNT_ID = process.env.ACCOUNT_ID || ''

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', err => {
  console.error('db connection error', err)
})
db.on('open', () => {
  console.log('Connected to mongodb.')
})

const keyFor = (id) => `${ACCOUNT_ID}::${id}`

async function storeComment(comment) {
  const Comment = db.model('Comment')
  const newComment = new Comment(comment)
  newComment.itemId = keyFor(comment.itemId)
  await newComment.save()
  console.log('storeComment', comment)

  return
}

async function readComments(id) {
  const Comment = db.model('Comment')
  const itemId = keyFor(id)
  const result = await Comment.find({ itemId })
  return result
}

module.exports = {
  storeComment,
  readComments,
};
