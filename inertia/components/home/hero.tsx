import { useRef, useState } from 'react'

const carouselItems = [
  {
    id: 'slide1',
    img: 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
    title: 'Pelatihan Untuk Mengembangkan UMKM',
    text: 'Kami memberikan pelatihan untuk mengembangkan keterampilan pelaku UMKM',
    button: 'Program Kami',
  },
  {
    id: 'slide2',
    img: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
    title: 'Second Slide',
    text: 'This is the second slide content',
    button: 'Get Started',
  },
]

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const videoRef = useRef(null)

  const handleClose = () => {
    setIsModalOpen(false)
    videoRef.current?.contentWindow?.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      '*'
    )
  }

  return (
    <section className="bg-white pb-20">
      <div className="carousel w-full">
        {carouselItems.map((item, index) => (
          <div key={item.id} id={item.id} className="carousel-item relative w-full">
            <img src={item.img} className="w-full object-cover" alt="" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-6">
              <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
              <p className="mb-4">{item.text}</p>
              <button className="btn btn-outline">{item.button}</button>
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
                FOKUS (FORUM KREATIF USAHA SAMA-SAMA)
              </span>{' '}
              adalah komunitas pemberdayaan UMKM Gunung Samarinda dengan Digitalisasi & Pelatihan
              Bersama Yayasan FOKUS, kami membantu UMKM berkembang melalui teknologi dan edukasi
              digital marketing!
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center mt-4">
          {['Pelatihan', 'Pemberdayaan', 'Komunitas'].map((title, i) => (
            <div key={title} className="lg:w-1/3 lg:pr-12">
              <p className="font-semibold text-red-700 text-2xl">{title}</p>
              <div className="lg:pr-12">
                <p className="text-black text-justify text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illum, amet
                  optio maxime debitis laboriosam! Dolores, sunt aliquid totam eos reiciendis
                  deserunt consectetur quia aperiam fugit qui voluptate. Voluptatibus, quis.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
