import style from '@/styles/Index/indexMainArticles.module.css'
import Link from 'next/link'
import {MdOutlineVisibility, MdUpdate, MdOutlineDateRange} from 'react-icons/md'

interface ArticleProp  {
    title: string
    summary: string
    views: number
    releaseDate: string
    editDate: string
    id: number
}


interface ArticlesProp  {
    articles: ArticleProp[]
}

function IndexMainArticle({title, summary, views, releaseDate, editDate, id}: ArticleProp) {
    return (
        <Link href={'/article/' + id}>
            <div className={style.indexMainArticle}>
                <div className={style.indexMainArticleTitle}>{title}</div>
                <div className={style.indexMainArticleSummary}>{summary}</div>
                <div className={style.indexMainArticleInfo}>
                    <div className={style.indexMainArticleInfoItem}>
                        <MdOutlineVisibility/>{views}
                    </div>
                    <div className={style.indexMainArticleInfoItem}>
                        <MdOutlineDateRange/>{releaseDate}
                    </div>
                    <div className={style.indexMainArticleInfoItem}>
                        <MdUpdate/>{editDate}
                    </div>
                </div>
                <div className={style.indexMainArticleBr}/>
            </div>
        </Link>
    )
}

export default function IndexMainArticles({articles}: ArticlesProp) {
    return (
        <div className={style.indexMainArticles}>
            {articles.map(e => (
                <IndexMainArticle title={e.title} summary={e.summary} views={e.views} releaseDate={e.releaseDate} editDate={e.editDate} id={e.id} key={e.id}/>
            ))}
        </div>
    )
}