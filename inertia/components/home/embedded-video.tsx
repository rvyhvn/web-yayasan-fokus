export default function EmbeddedVideo() {
  const heroImg = 'https://placehold.co/600x400'

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="mt-10 lg:mt-0 flex items-center justify-center">
          <div className="relative inline-block">
            <img
              src={heroImg}
              alt="Happy family"
              className="rounded-lg shadow-xl"
              width={600}
              height={400}
            />
            <button
              id="playButton"
              className="absolute bottom-4 left-4 bg-white bg-opacity-80 text-gray-800 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-opacity-100 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>See how this works</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
