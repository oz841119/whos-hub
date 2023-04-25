import style from '@/styles/Index/index.module.css'
import IndexMainArticles from '@/components/Index/IndexMainArticles'
import IndexSide from '@/components/Index/IndexSide'
import articlesJSON from '@/assets/json/articles.json'
import Image from 'next/image';
import bn from '@/assets/image/ts5-0.png'



export default function Index({data}: {data: any}) {
    console.log(data);
    
    return (
        <div className={style.index}>
            <div className={style.indexMain}>
                <div className={style.indexMainBN}>
                    <Image src={bn} alt="" style={{objectFit: "cover"}} priority fill></Image>
                </div>
                <IndexMainArticles articles={articlesJSON}/>
            </div>
            <IndexSide/>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_PATH + '/get_article')
    const data = await res.json()
    return { props: { data } }
}
  