import { Head, useForm } from '@inertiajs/react'

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    fullName: '',
    phone: '',
    email: '',
    password: '',
  })

  function submit(e: React.FormEvent) {
    e.preventDefault()
    post('/auth/register')
  }

  return (
    <>
      <Head title="Daftar" />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
          <h1 className="text-2xl font-bold text-center text-red-700 mb-6">Daftar</h1>

          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text text-red-600">Nama Lengkap</span>
              </label>
              <input
                type="text"
                placeholder="Nama lengkap"
                value={data.fullName}
                onChange={(e) => setData('fullName', e.target.value)}
                className="input input-bordered w-full bg-white text-black border-black"
              />
              {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="label">
                <span className="label-text text-red-600">Nomor Telepon</span>
              </label>
              <input
                type="text"
                placeholder="Nomor telepon"
                value={data.phone}
                onChange={(e) => setData('phone', e.target.value)}
                className="input input-bordered w-full bg-white text-black border-black"
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="label">
                <span className="label-text text-red-600">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="input input-bordered w-full bg-white text-black border-black"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="label">
                <span className="label-text text-red-600">Kata Sandi</span>
              </label>
              <input
                type="password"
                placeholder="Kata sandi"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                className="input input-bordered w-full bg-white text-black border-black"
              />
              {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              disabled={processing}
              className="btn btn-outline btn-secondary w-full"
            >
              {processing ? 'Mendaftar...' : 'Daftar'}
            </button>

            <div className="text-sm text-center mt-2 text-black">
              Sudah punya akun?{' '}
              <a href="/auth/login" className="text-blue-600 hover:underline">
                masuk di sini
              </a>
            </div>

            <div className="text-xs text-center text-gray-500 mt-4">
              Dengan mendaftar, Anda menyetujui{' '}
              <a href="/privacy" className="underline hover:text-red-700">
                Kebijakan Privasi
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
