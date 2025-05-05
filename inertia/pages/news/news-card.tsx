import { Link } from '@inertiajs/react'
import type News from '#models/news'

export default function NewsCard({ article }: { article: News }) {
  return (
    <div className="card shadow-sm hover:shadow-lg transition-shadow duration-300">
      <figure className="px-4 pt-4">
        {article.imageUrl ? (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="rounded-lg h-48 w-full object-cover"
          />
        ) : (
          <div className="bg-gray-200 h-48 w-full rounded-lg flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
      </figure>
      <div className="card-body">
        <Link href={`/news/${article.id}`}>
          <h2 className="card-title text-red-700 hover:text-primary-focus transition-colors">
            {article.title}
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-3">{article.content}</p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-sm btn-outline btn-error">Selengkapnya</button>
          </div>
        </Link>
      </div>
    </div>
  )
}
