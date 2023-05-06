import Head from 'next/head'
import style from './index.module.css'
import {MdOutlineVisibility, MdUpdate, MdOutlineDateRange} from 'react-icons/md'
import IndexSide from '@/components/Index/IndexSide'

type Context = {
    query: {
        articleId: number
    }
}
type ArticlePageProps = {
    articleId: number
    article: Article
}

type Article = {
    title: string
    content: string
    release_date: number
    edit_date: number
    views: number
    summary: string
}

export default function ArticlePage({articleId, article}: ArticlePageProps) {
    const {title, content, release_date, edit_date, views, summary} = article
    return (
        <>
            <ArticleMetaData metaData={{title, summary}}/>
            <div className={style.main}>
                <div className={style.container}>
                    <div className={style.titleWrap}>
                        <h2 className={style.title}>{title}</h2>
                        <div className={style.summary}>{summary}</div>
                        <div className={style.info}>
                            <div className={style.infoItem}><MdOutlineVisibility/> {views}</div>
                            <div className={style.infoItem}><MdOutlineDateRange/> {release_date}</div>
                            <div className={style.infoItem}><MdUpdate/> {edit_date}</div>
                        </div>
                    </div>
                    <div className={style.content} dangerouslySetInnerHTML={{__html: content}}></div>
                </div>
                <IndexSide/>
            </div>
        </>
    )
}

function ArticleMetaData(props: any) {
    return (
        <Head>
            <meta name="title" content={props.metaData.title}/>
            <meta name="description" content={props.metaData.summary}/>
        </Head>
    )
}

export async function getServerSideProps(context: Context) {
    const articleId = context.query.articleId
    const res = await fetch(process.env.NEXT_PUBLIC_API_PATH + '/get_article/' + articleId)
    const article = await res.json()
    return { props: { articleId, article} }
  }
  