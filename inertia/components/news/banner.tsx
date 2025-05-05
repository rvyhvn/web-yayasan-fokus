export default function Banner() {
  const img = 'https://placehold.co/1200x300'

  return (
    <section className="bg-white">
      <div className="relative w-full">
        <img src={img} alt="hero" className="rounded-lg w-full h-auto " width="1200" height="300" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold">Program Pelatihan Kami</h2>
          <p className="mt-2 md:mt-4 text-base md:text-xl max-w-2xl">
            Mewadahi Banyak Jenis Pelatihan untuk Mengembangkan UMKM.
          </p>
        </div>
      </div>
    </section>
  )
}
