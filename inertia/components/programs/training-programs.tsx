export default function TrainingPrograms() {
  const programs = [
    {
      title: 'Pelatihan Sablon',
      desc: 'Pelatihan teknik sablon untuk meningkatkan kualitas produk UMKM.',
      logo: 'https://placehold.co/200',
    },
    {
      title: 'Pelatihan Pendataan',
      desc: 'Pelatihan pendataan untuk mengelola informasi usaha yang lebih baik.',
      logo: 'https://placehold.co/200',
    },
    {
      title: 'Pelatihan Digitalisasi',
      desc: 'Pelatihan digitalisasi untuk meningkatkan kehadiran online UMKM.',
      logo: 'https://placehold.co/200',
    },
    {
      title: 'Manajemen Keuangan',
      desc: 'Pelatihan manajemen keuangan untuk pengelolaan keuangan yang lebih efektif.',
      logo: 'https://placehold.co/200',
    },
    {
      title: 'Manajemen Bisnis',
      desc: 'Pelatihan manajemen bisnis untuk strategi pengembangan usaha.',
      logo: 'https://placehold.co/200',
    },
    {
      title: 'Kreatifitas',
      desc: 'Pelatihan kreativitas untuk inovasi produk dan layanan.',
      logo: 'https://placehold.co/200',
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Pelatihan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="flex flex-col items-center mb-6 justify-center">
              <img
                src={program.logo}
                alt={program.title}
                className="rounded-lg"
                width={200}
                height={200}
              />
              <p className="text-2xl text-red-800 font-bold text-center">{program.title}</p>
              <p className="text-lg text-black text-justify px-14">{program.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
