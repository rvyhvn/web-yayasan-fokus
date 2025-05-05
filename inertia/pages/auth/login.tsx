import { Head, useForm } from '@inertiajs/react'

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  function submit(e: React.FormEvent) {
    e.preventDefault()
    post('/auth/login')
  }

  return (
    <>
      <Head title="Login" />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
          <h1 className="text-2xl font-bold text-center text-red-700 mb-6">Login</h1>

          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text text-red-600">Email</span>
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="input input-bordered w-full bg-white text-black border-black"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="label">
                <span className="label-text text-red-600">Kata Sandi</span>
              </label>
              <input
                type="password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                className="input input-bordered w-full bg-white text-black border-black"
                placeholder="Kata sandi"
              />
              {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.remember}
                  onChange={(e) => setData('remember', e.target.checked)}
                  className="checkbox checkbox-sm mr-2 border-black"
                />
                <span className="label-text text-black">Ingat saya</span>
              </label>
              <a href="/auth/register" className="text-sm text-blue-600 hover:underline">
                Belum mendaftar? klik di sini
              </a>
            </div>

            <button
              type="submit"
              disabled={processing}
              className="btn btn-outline btn-secondary w-full"
            >
              {processing ? 'Masuk...' : 'Masuk'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
