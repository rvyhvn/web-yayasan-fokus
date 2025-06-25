import Layout from '~/layouts/layout'

export default function PrivacyPolicy() {
  return (
    <Layout title="privasi">
      <section className="max-w-4xl mx-auto px-4 py-16 bg-white">
        <h1 className="text-3xl font-bold text-red-700 mb-6">Kebijakan Privasi</h1>

        <p className="mb-4 text-gray-700">
          Kami menghargai privasi Anda. Halaman ini menjelaskan bagaimana kami mengumpulkan,
          menggunakan, dan melindungi data pribadi yang Anda berikan saat menggunakan situs kami.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
          1. Informasi yang Kami Kumpulkan
        </h2>
        <p className="mb-4 text-gray-700">
          Kami dapat mengumpulkan informasi pribadi seperti nama, email, dan data UMKM yang Anda isi
          saat mendaftar atau menggunakan layanan kami.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2. Penggunaan Informasi</h2>
        <p className="mb-4 text-gray-700">
          Informasi Anda digunakan untuk keperluan internal seperti meningkatkan layanan,
          menghubungi Anda, atau menyampaikan informasi terbaru terkait program kami.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3. Perlindungan Data</h2>
        <p className="mb-4 text-gray-700">
          Kami menggunakan langkah-langkah keamanan teknis dan organisasi untuk melindungi data
          pribadi Anda dari akses yang tidak sah, kehilangan, atau penyalahgunaan.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">4. Pihak Ketiga</h2>
        <p className="mb-4 text-gray-700">
          Kami tidak akan membagikan data pribadi Anda kepada pihak ketiga tanpa izin Anda, kecuali
          diwajibkan oleh hukum.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5. Perubahan Kebijakan</h2>
        <p className="mb-4 text-gray-700">
          Kami dapat memperbarui kebijakan ini sewaktu-waktu. Perubahan akan diberitahukan melalui
          halaman ini.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}
        </p>
      </section>
    </Layout>
  )
}
