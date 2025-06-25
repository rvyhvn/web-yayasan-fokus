import bannerImg from '../../public/images/program.png'

export default function Banner() {
  return (
    <section className="bg-white">
      <div className="relative w-full">
        {/* Mobile - Square Image (1:1) */}
        <div className="block md:hidden relative pb-[100%]">
          {/* 1:1 aspect ratio container */}
          <img
            src={bannerImg}
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/30">
            <h2 className="text-2xl font-bold">Program Pelatihan Kami</h2>
            <p className="mt-2 text-base max-w-xs">
              Mewadahi Banyak Jenis Pelatihan untuk Mengembangkan UMKM.
            </p>
          </div>
        </div>

        {/* Desktop - Wide Banner (1200x300) */}
        <div className="hidden md:block relative">
          <img
            src={bannerImg}
            alt="hero"
            className="w-full h-auto rounded-lg"
            width="1200"
            height="300"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/30">
            <h2 className="text-4xl font-bold">Program Pelatihan Kami</h2>
            <p className="mt-4 text-xl max-w-2xl">
              Mewadahi Banyak Jenis Pelatihan untuk Mengembangkan UMKM.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
