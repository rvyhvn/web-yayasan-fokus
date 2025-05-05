import Layout from '~/layouts/layout'
import Banner from '~/components/news/banner'
import type { News as Article } from '#models/news'
import { Head } from '@inertiajs/react'
import NewsCard from './news/news-card'

type Props = {
  news: Article[]
}

export default function News({ news }: Props) {
  return (
    <>
      <Head title="Artikel" />
      <Layout title="Articles">
        <Banner />
        <div className="bg-white py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
            {news.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}
