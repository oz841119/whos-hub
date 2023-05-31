import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) throw new Error('MongoDB -- !process.env.MONGODB_URI = true')
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri);
export default client