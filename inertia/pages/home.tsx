import { Head } from '@inertiajs/react'
import Layout from '~/layouts/layout'
import Hero from '~/components/home/hero'
import Programs from '~/components/home/programs'
import EmbeddedVideo from '~/components/home/embedded-video'

export default function Home() {
  return (
    <>
      <Head title="Beranda" />
      <Layout title="Beranda">
        <Hero />
        <Programs />
        <EmbeddedVideo />
      </Layout>
    </>
  )
}
