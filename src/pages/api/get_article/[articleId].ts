import type { NextApiRequest, NextApiResponse } from 'next'
import getArticle from '@/server/database/get_article'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {articleId} = req.query
    if(typeof articleId !== 'string') return res.status(404)
    const doc = await getArticle(articleId)    
    res.status(200).json(doc)
}
  