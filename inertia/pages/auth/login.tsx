import { Head } from '@inertiajs/react'
import { useForm } from '@inertiajs/react'

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })

  function submit(e: any) {
    e.preventDefault()
    post('/auth/login')
  }

  return (
    <>
      <Head title="Login" />
      <form onSubmit={submit}>
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
