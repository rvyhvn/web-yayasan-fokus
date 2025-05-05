export default function SearchBar() {
  return (
    <div className="flex justify-center my-8 px-4">
      <label className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full shadow w-full max-w-xl">
        <svg
          className="h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Cari UMKM..."
          className="bg-transparent flex-1 outline-none placeholder-gray-500 text-gray-800"
        />
      </label>
    </div>
  )
}
