import clientContent from './db'
export default function getAritcle() {
    return new Promise(async resolve => {
        const client = await clientContent
        const collection = client.db('whos_hub').collection('articles')
        const doc = await collection.findOne({title: 'stri'})
        resolve(doc)
    })
}