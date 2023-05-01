import style from './index.module.css'

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
        <div className={style.main}>
            <div>瀏覽數: {views}</div>
            <div>發布日期: {release_date}</div>
            <div>編輯日期: {edit_date}</div>
            <div>簡述: {summary}</div>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
    )
}

export async function getServerSideProps(context: Context) {
    const articleId = context.query.articleId
    const res = await fetch(process.env.NEXT_PUBLIC_API_PATH + '/get_article/' + articleId)
    const article = await res.json()
    return { props: { articleId, article} }
  }
  