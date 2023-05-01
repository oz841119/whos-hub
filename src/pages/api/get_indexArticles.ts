import type { NextApiRequest, NextApiResponse } from 'next'
import getIndexArticle from '@/server/database/get_indexArticles'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const doc = await getIndexArticle()
    res.status(200).json(doc)
}
  