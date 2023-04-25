import type { NextApiRequest, NextApiResponse } from 'next'
import getArticle from '@/server/database/get_article'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const doc = await getArticle()
    res.status(200).json(doc)
}
  