import { Head, Link } from '@inertiajs/react'
import Layout from '~/layouts/layout'

import type News from '#models/news'

type Props = {
  article: News
  recommendations: News[]
}

export default function Show({ article, recommendations }: Props) {
  return (
    <>
      <Head title={article.title} />
      <Layout title={article.title}>
        <div className="bg-white px-4 py-10">
          <div className="flex flex-col gap-x-24 lg:flex-row max-w-6xl mx-auto">
            {/* Main content */}
            <div className="flex-1 space-y-12">
              <div className="bg-white p-8 mx-auto space-y-6">
                <h1 className="text-3xl font-bold text-red-700">{article.title}</h1>
                <p className="text-gray-700">{article.content}</p>
              </div>
            </div>

            {/* Sidebar - Artikel Lainnya */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-20">
                <h2 className="text-2xl font-bold text-center mb-6 text-black">Artikel Lainnya</h2>
                <div className="space-y-4">
                  {recommendations.map((news) => (
                    <div
                      key={news.id}
                      className="border rounded-lg p-4 bg-gray-50 hover:shadow transition"
                    >
                      <Link href={`/news/${news.id}`}>
                        <h3 className="text-lg font-bold text-red-700">{news.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{news.content}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
