const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  userAgent: String,
  unsubscribeToken: String,
  userIp: String,
  pageUrl: String,
  userOrigin: String,
  userPic: String,
  itemPort: String,
  itemProtocol: String, 
  commentId: String, 
  userId: String, 
  userUrl: String, 
  originalItemId: String, 
  reactionsCount: Number, 
  userReferer: String, 
  nestedComments: [String], 
  accountId: String, 
  userEmail: String, 
  rating: Number, 
  locale: String, 
  createdAt: String, 
  itemId: String, 
  message: String, 
  topLevelReactionsCount: Number, 
  commentUrl: String, 
  topLevelCreatedAt: String, 
  pageTitle: String, 
  timezone: String, 
  username: String, 
  emailNotifications: Boolean
})

mongoose.model('Comment', commentSchema)