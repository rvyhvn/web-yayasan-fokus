export default function Programs() {
  const impactImage = 'https://placehold.co/600x400'

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 w-full">
            <img
              src={impactImage}
              alt="Grandmother and granddaughter laughing together while playing on the grass"
              className="rounded-lg shadow-xl w-full"
              width={600}
              height={400}
            />
          </div>

          <div className="lg:w-1/2 w-full">
            {/* First Stats Block */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-10">
              <div className="w-full sm:w-1/2 flex flex-col text-red-700 font-extrabold text-6xl sm:text-7xl lg:text-8xl">
                12 <span className="text-2xl sm:text-3xl font-bold">Jenis Program</span>
              </div>
              <p className="w-full sm:w-1/2 text-black text-justify text-base sm:text-lg">
                Kami memiliki berbagai jenis program pelatihan, inkubasi, dan kolaborasi untuk
                mendukung pengembangan pelaku UMKM di Balikpapan.
              </p>
            </div>

            {/* Second Stats Block */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-10 mt-6">
              <p className="w-full sm:w-1/2 text-black text-justify text-base sm:text-lg order-2 sm:order-1">
                Kami telah memberdayakan lebih dari 40 UMKM melalui pendampingan, pelatihan, dan
                akses ke jaringan pemasaran dan permodalan.
              </p>
              <div className="w-full sm:w-1/2 flex flex-col text-red-700 font-extrabold text-6xl sm:text-7xl lg:text-8xl order-1 sm:order-2">
                47 <span className="text-2xl sm:text-3xl font-bold">Pemberdayaan UMKM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
