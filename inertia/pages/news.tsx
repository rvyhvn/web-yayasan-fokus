import Layout from '~/layouts/layout'
import type { News as Article } from '#models/news'
import { Head } from '@inertiajs/react'
import NewsCard from './news/news-card'

type Props = {
  news: Article[]
}

export default function News({ news }: Props) {
  // Separate highlighted and regular news
  const highlightedNews = news.filter((article) => article.isHighlighted)
  const regularNews = news.filter((article) => !article.isHighlighted)

  return (
    <>
      <Head title="Artikel" />
      <Layout title="Articles">
        <div className="bg-white py-12">
          {/* Highlighted News Section */}
          {highlightedNews.length > 0 && (
            <div className="container mx-auto px-4 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {highlightedNews.map((article) => (
                  <div key={article.id} className="relative group">
                    <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {article.imageUrl && (
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-64 object-cover"
                        />
                      )}
                      <div className="p-6 bg-white">
                        <h3 className="text-2xl font-bold text-red-700 mb-2">{article.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{article.content}</p>
                        <a
                          href={`/news/${article.id}`}
                          className="inline-block px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition-colors"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular News Grid */}
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Artikel Terbaru</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
