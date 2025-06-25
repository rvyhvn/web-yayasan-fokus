export default function EmbeddedVideo() {
  const heroImg = 'https://placehold.co/600x400'

  return (
    <section className="bg-white py-8">
      <div className="max-w-5xl mx-auto">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
