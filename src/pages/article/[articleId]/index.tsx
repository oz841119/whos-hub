type Context = {
    query: {
        articleId: number
    }
}
type ArticlePageProps = {
    articleId: number
}

export default function ArticlePage({articleId}: ArticlePageProps) {    
    return (
        <div>{articleId}</div>
    )
}

export async function getServerSideProps(context: Context) {
    const articleId = context.query.articleId
    return { props: { articleId } }
  }
  