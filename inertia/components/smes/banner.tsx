export default function Banner() {
  const img = 'https://placehold.co/1200x300'
  const mobileImg = 'https://placehold.co/600x600'

  return (
    <section className="bg-white">
      <div className="relative w-full">
        {/* Mobile - Square Image (1:1) */}
        <div className="block md:hidden relative pb-[100%]">
          {' '}
          {/* 1:1 aspect ratio container */}
          <img
            src={mobileImg}
            alt="Pemberdayaan UMKM Lokal"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/30">
            <h2 className="text-2xl font-bold">Pemberdayaan dengan Mendigitalisasi UMKM Lokal</h2>
            <p className="mt-2 text-sm max-w-xs">
              Bersama memajukan perekonomian dengan memilih produk lokal
            </p>
          </div>
        </div>

        {/* Desktop - Wide Banner (1200x300) */}
        <div className="hidden md:block relative">
          <img
            src={img}
            alt="Pemberdayaan UMKM Lokal"
            className="w-full h-auto rounded-lg"
            width="1200"
            height="300"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/30">
            <h2 className="text-4xl font-bold">Pemberdayaan dengan Mendigitalisasi UMKM Lokal</h2>
            <p className="mt-4 text-xl max-w-2xl">
              Bersama memajukan perekonomian dengan memilih produk lokal
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
