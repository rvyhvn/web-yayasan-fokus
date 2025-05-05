import Layout from '~/layouts/layout'
import Banner from '~/components/smes/banner'
import SearchBar from '~/components/smes/search-bar'
import type Store from '#models/store'
import { Head } from '@inertiajs/react'
import SmeCard from '~/components/smes/sme-card'

type Props = {
  smes: Store[]
}

export default function Smes({ smes }: Props) {
  return (
    <>
      <Head title="UMKM" />
      <Layout title="UMKM">
        <Banner />
        <SearchBar />
        <div className="bg-white ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
            {smes.map((sme) => (
              <SmeCard key={sme.id} sme={sme} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}
