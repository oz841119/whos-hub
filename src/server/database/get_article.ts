import clientContent from './db'
export default function getAritcle(articleId: string) {
    return new Promise(async resolve => {
        const client = await clientContent
        const collection = client.db('whoshub').collection('articles')
        const doc = await collection.findOne({id: articleId})
        resolve(doc)
    })
}