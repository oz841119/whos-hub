import client from './db'
export default function getAritcle(articleId: string) {
    return new Promise(async resolve => {
        const db = await client.connect()
        const collection = client.db('whoshub').collection('articles')
        const doc = await collection.findOne({id: articleId})
        resolve(doc)
        db.close()
    })
}