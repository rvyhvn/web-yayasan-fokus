import { Head } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'
import Layout from '~/layouts/layout'
import Hero from '~/components/home/hero'
import Programs from '~/components/home/programs'
import EmbeddedVideo from '~/components/home/embedded-video'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />
      <Layout title="hai">
        <Hero />
        <Programs />
        <EmbeddedVideo />
      </Layout>
    </>
  )
}
