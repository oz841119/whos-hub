import clientContent from './db'
export default function getAritcle() {
    return new Promise(async resolve => {
        const client = await clientContent
        const collection = client.db('whoshub').collection('articles')
        const projection = {projection: {content: false}}
        const doc = await collection.find({}, projection).limit(10).toArray()
        resolve(doc)
    })
}