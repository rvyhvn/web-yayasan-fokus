import Layout from '~/layouts/layout'
import Banner from '~/components/programs/banner'
import TrainingPrograms from '~/components/programs/training-programs'

export default function Programs() {
  return (
    <Layout title="Programs">
      <Banner />
      <TrainingPrograms />
    </Layout>
  )
}
