import fokusLogo from '../public/images/logo-fokus.png'

export default function Footer() {
  return (
    <footer className="bg-red-100 text-red-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-bold pt-2 text-2xl">KONTAK</p>
            {/* <p className="text-sm text-black pt-2">Forum Kreatif Usaha Sama-sama</p> */}
            <img src={fokusLogo} alt="logo fokus" className="h-20 w-auto" />
            <p className="text-sm font-bold pt-2">Alamat</p>
            <p className="text-sm text-black">
              Jalan Tembusan Strat 2 RT 16 NO 121 Kelurahan Gunung Samarinda Kecamatan Balikpapan
              Utara Balikpapan, Kalimantan Timur 76125
            </p>
            <p className="text-sm font-bold pt-2">No. HP</p>
            <p className="text-sm text-black">+62 877 7682 3017</p>
            <p className="text-sm font-bold pt-2">Email</p>
            <p className="text-sm text-black">yayasanfokusbpn@gmail.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold pt-2">IKUTI KAMI</h3>
            <div className="pt-2">
              <a
                href="https://www.instagram.com/forumkreatifusahasamasama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-red-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="">@forumkreatifusahasamasama</span>
              </a>
            </div>
            <div className="pt-2">
              <a
                href="https://www.youtube.com/@FOKUSxD3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-red-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-tv-minimal-play-icon lucide-tv-minimal-play"
                >
                  <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"></path>
                  <path d="M7 21h10"></path>
                  <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                </svg>
                <span className="">@FOKUSxD3</span>
              </a>
            </div>
            <div className="pt-2">
              <a
                href="https://www.tiktok.com/@yayasan.fokus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-red-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-music2-icon lucide-music-2"
                >
                  <circle cx="8" cy="18" r="4"></circle>
                  <path d="M12 18V2l7 4"></path>
                </svg>
                <span className="">@yayasan.fokus</span>
              </a>
            </div>
            {/* <p className="text-sm mb-4">Subscribe to our newsletter for updates</p> */}
            {/* <form className="flex"> */}
            {/*   <input */}
            {/*     type="email" */}
            {/*     placeholder="Your email" */}
            {/*     className="flex-grow rounded-l-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500" */}
            {/*   /> */}
            {/*   <button */}
            {/*     type="submit" */}
            {/*     className="bg-primary-500 text-white px-4 py-2 rounded-r-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" */}
            {/*   > */}
            {/*     Subscribe */}
            {/*   </button> */}
            {/* </form> */}
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; 2025 Yayasan FOKUS x KKN D3. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
