import { Head } from '@inertiajs/react'
import { useForm } from '@inertiajs/react'

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    fullName: '',
    phone: '',
    email: '',
    password: '',
  })

  function submit(e: any) {
    e.preventDefault()
    post('/auth/register')
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={data.fullName}
          onChange={(e) => setData('fullName', e.target.value)}
        />
        {errors.fullName && <div>{errors.fullName}</div>}
        <input
          type="text"
          placeholder="Nomor Telepon"
          value={data.phone}
          onChange={(e) => setData('phone', e.target.value)}
        />
        {errors.phone && <div>{errors.phone}</div>}
        <input
          type="text"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData('email', e.target.value)}
        />
        {errors.email && <div>{errors.email}</div>}
        <input
          type="password"
          value={data.password}
          placeholder="Password"
          onChange={(e) => setData('password', e.target.value)}
        />
        {errors.password && <div>{errors.password}</div>}
        <button type="submit" disabled={processing}>
          Login
        </button>
      </form>
    </>
  )
}
