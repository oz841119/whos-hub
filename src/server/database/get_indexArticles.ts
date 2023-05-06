import client from './db'
export default function getAritcle() {
    return new Promise(async resolve => {
        const db = await client.connect()
        const collection = client.db('whoshub').collection('articles')
        const projection = {projection: {content: false}}
        const doc = await collection.find({}, projection).limit(10).toArray()
        resolve(doc)
        db.close()
    })
}