import { Link } from '@inertiajs/react'
import type Store from '#models/store'

export default function SmeCard({ sme }: { sme: Store }) {
  return (
    <div className="card shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="card-body">
        <Link href={`/smes/${sme.id}`}>
          <h2 className="card-title text-red-700 hover:text-primary-focus transition-colors">
            {sme.name}
          </h2>
          <p className="text-gray-600 mt-2">{sme.address}</p>
          {sme.isPromoted && (
            <div className="mt-3">
              <span className="badge badge-warning gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                Promoted
              </span>
            </div>
          )}
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-sm btn-outline btn-error">Lihat</button>
          </div>
        </Link>
      </div>
    </div>
  )
}
