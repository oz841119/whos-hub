import style from '@/styles/Index/indexSide.module.css'
export default function IndexSide() {
    return (
        <div className={style.indexSide}>
            <div className={style.indexSideHotArticleWrap}>
                <div className={style.indexSideHotArticleWrapTitle}>熱門文章</div>
            </div>
            <div className={style.indexSidePlaceholder}>目錄</div>
        </div>
    )
}