import { Head } from '@inertiajs/react'
import Layout from '~/layouts/layout'
import Banner from '~/components/programs/banner'
import TrainingPrograms from '~/components/programs/training-programs'

export default function Programs() {
  return (
    <>
      <Head title="Program Kami" />
      <Layout title="Programs">
        <Banner />
        <TrainingPrograms />
      </Layout>
    </>
  )
}
