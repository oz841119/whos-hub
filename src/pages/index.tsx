import style from '@/styles/Index/index.module.css'
import IndexMainArticles from '@/components/Index/IndexMainArticles'
import IndexSide from '@/components/Index/IndexSide'
import Image from 'next/image';
import bn from '@/assets/image/ts5-0.png'

export default function Index({articles}: {articles: any}) {
    return (
        <div className={style.index}>
            <div className={style.indexMain}>
                <div className={style.indexMainBN}>
                    <Image src={bn} alt="" style={{objectFit: "cover"}} priority fill></Image>
                </div>
                {articles && <IndexMainArticles articles={articles}/>}
            </div>
            <IndexSide/>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_PATH + '/get_indexArticles')
    try {
        const articles = await res.json()
        return { props: { articles } }
    }
    catch(error) {
        return { props: {}}
    }
}