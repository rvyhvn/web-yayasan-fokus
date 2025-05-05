import { Head, Link } from '@inertiajs/react'
import Layout from '~/layouts/layout'

import type Store from '#models/store'
import type Faq from '#models/faq'
import type Comment from '#models/comment'
import type Product from '#models/product'

type Props = {
  sme: Store & {
    faqs: Faq[]
    comments: (Comment & { poster: { fullName: string } })[]
    products: Product[]
  }
  recommendations: Store[]
}

export default function Show({ sme, recommendations }: Props) {
  return (
    <>
      <Head title={sme.name} />
      <Layout title={sme.name}>
        <div className="bg-white px-4 py-10">
          <div className="flex flex-col gap-x-24 lg:flex-row max-w-6xl mx-auto">
            {/* Main content */}
            <div className="flex-1 space-y-12">
              {/* Header */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h1 className="text-3xl font-bold text-red-700">{sme.name}</h1>
                  <p className="text-gray-600">{sme.address}</p>
                </div>
                {sme.isPromoted && (
                  <span className="mt-4 sm:mt-0 px-4 py-2 text-sm bg-yellow-200 text-yellow-800 rounded-full font-medium">
                    Promoted UMKM
                  </span>
                )}
              </div>

              {/* Products */}
              {sme.products.length > 0 && (
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-black">Produk</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {sme.products.map((product) => (
                      <div key={product.id} className="border rounded-lg p-4 shadow-sm">
                        <h2 className="text-sm font-bold text-black">{product.category}</h2>
                        <h3 className="text-lg font-bold text-red-700">{product.name}</h3>
                        <p className="text-red-600 font-semibold mt-2">Rp {product.price}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQs */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">Sering Ditanyakan</h2>
                <div className="space-y-4">
                  {sme.faqs.map((faq) => (
                    <details key={faq.id} className="border p-4 rounded">
                      <summary className="cursor-pointer font-medium text-black">
                        {faq.question}
                      </summary>
                      <p className="mt-2 text-gray-700">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Comments */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">Ulasan</h2>
                <div className="space-y-4">
                  {sme.comments.map((comment) => (
                    <div key={comment.id} className="border p-4 rounded-lg shadow-sm bg-gray-50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">{comment.poster.fullName}</span>
                        <span className="text-yellow-500 font-semibold">
                          {'⭐'.repeat(comment.stars)}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar - UMKM Lainnya */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-20">
                <h2 className="text-2xl font-bold text-center mb-6 text-black">UMKM Lainnya</h2>
                <div className="space-y-4">
                  {recommendations.map((umkm) => (
                    <Link href={`/smes/${umkm.id}`} className="p-2">
                      <div
                        key={umkm.id}
                        className="border rounded-lg p-4 bg-gray-50 hover:shadow transition"
                      >
                        <h3 className="text-lg font-bold text-red-700">{umkm.name}</h3>
                        <p className="text-gray-600 text-sm">{umkm.address}</p>
                      </div>
                    </Link>
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
