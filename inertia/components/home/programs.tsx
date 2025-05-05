export default function Programs() {
  const impactImage = 'https://placehold.co/600x400'

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={impactImage}
              alt="Grandmother and granddaughter laughing together while playing on the grass"
              className="rounded-lg shadow-xl w-full"
              width={600}
              height={400}
            />
          </div>

          <div className="md:w-1/2">
            <div className="flex flex-row items-center gap-10">
              <p className="w-1/2 flex flex-col text-red-700 font-extrabold text-8xl">
                12{' '}
                <span className="text-3xl font-bold">
                  Jenis
                  <br />
                  Program
                </span>
              </p>
              <p className="w-2/3 text-black text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ea hic quam odio,
                repellendus libero dolore, nostrum pariatur sed veniam modi doloremque mollitia
                facere reprehenderit quis! Id exercitationem alias aperiam?
              </p>
            </div>
            <div className="flex flex-row items-center gap-10 mt-6">
              <p className="w-1/2 text-black text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ea hic quam odio,
                repellendus libero dolore, nostrum pariatur sed veniam modi doloremque mollitia
                facere reprehenderit quis! Id exercitationem alias aperiam?
              </p>
              <p className="w-1/2 flex flex-col text-red-700 font-extrabold text-8xl">
                47{' '}
                <span className="text-3xl font-bold">
                  Pemberdayaan
                  <br />
                  UMKM
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
