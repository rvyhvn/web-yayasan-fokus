import { Link } from '@inertiajs/react'

import slide1 from '../../public/images/slider-umkm.jpg'
import slide2 from '../../public/images/slider-2.jpg'
import slide3 from '../../public/images/slider-3.jpg'

const carouselItems = [
  {
    id: 'slide1',
    img: slide1,
    title: 'Pelatihan Untuk Mengembangkan UMKM',
    text: 'Kami memberikan pelatihan untuk mengembangkan keterampilan pelaku UMKM',
    button: 'Program Kami',
  },
  {
    id: 'slide2',
    img: slide2,
    title: 'Dampingi UMKM Naik Kelas Bersama FOKUS',
    text: 'Kami hadir untuk membantu UMKM agar lebih siap bersaing dan berkembang secara berkelanjutan',
    button: 'Program Kami',
  },
  {
    id: 'slide3',
    img: slide3,
    title: 'Membangun Jejaring UMKM di Seluruh Indonesia',
    text: 'Mendukung pemberdayaan pelaku usaha lokal melalui komunitas dan pendampingan',
    button: 'Program Kami',
  },
]

export default function Hero() {
  return (
    <section className="bg-white pb-20">
      <div className="carousel w-full">
        {carouselItems.map((item, index) => (
          <div key={item.id} id={item.id} className="carousel-item relative w-full">
            <img src={item.img} className="w-full object-cover" alt="" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-6">
              <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
              <p className="mb-4">{item.text}</p>
              <Link href="/programs" className="btn btn-outline">
                {item.button}
              </Link>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#${carouselItems[(index - 1 + carouselItems.length) % carouselItems.length].id}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#${carouselItems[(index + 1) % carouselItems.length].id}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:gap-0 mt-8">
          <div className="lg:w-1/2 lg:pr-12 flex justify-center items-center">
            <h2 className="text-5xl md:text-5xl font-bold text-red-700 mb-6">Tentang Kami</h2>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
            <p className="text-xl text-justify text-gray-700 mb-8">
              <span className="text-xl text-red-700 font-bold">
                Forum Kreatif Usaha Sama-Sama (FOKUS)
              </span>{' '}
              Kota Balikpapan adalah sebuah komunitas seni dan ekonomi kreatif yang didirikan pada
              tahun 2016 di Balikpapan, Kalimantan Timur. Forum ini beranggotakan puluhan seniman
              dan pelaku industri kreatif yang memiliki visi untuk menumbuhkan apresiasi seni dan
              budaya di tengah masyarakat kota yang dikenal sebagai pusat industri dan jasa.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center mt-4">
          {[
            {
              title: 'Pelatihan',
              description:
                'Kami menyediakan pelatihan keterampilan praktis dan manajerial bagi pelaku UMKM untuk meningkatkan kualitas produk, layanan, dan strategi pemasaran mereka.',
            },
            {
              title: 'Pemberdayaan',
              description:
                'Program pemberdayaan kami membantu UMKM mengakses sumber daya dan jaringan yang diperlukan untuk mengembangkan bisnis mereka secara berkelanjutan.',
            },
            {
              title: 'Komunitas',
              description:
                'Kami membangun jaringan komunitas antar pelaku usaha dan kreator lokal untuk saling berbagi pengalaman, berkolaborasi, dan bertumbuh bersama.',
            },
          ].map((item, i) => (
            <div key={item.title} className="lg:w-1/3 lg:pr-12">
              <p className="font-semibold text-red-700 text-2xl text-center pt-6">{item.title}</p>
              <div className="lg:pr-12">
                <p className="text-black text-justify text-xl">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
