import clientContent from './db'
export default function getAritcle() {
    return new Promise(async resolve => {
        const client = await clientContent
        const collection = client.db('whoshub').collection('articles')
        const doc = await collection.findOne({id: '0526'})
        resolve(doc)
    })
}