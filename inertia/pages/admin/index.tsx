import { router } from '@inertiajs/react'

export default function Admin({ users }: any) {
  function handleExport() {
    router.post('/admin/export-members')
  }

  function handleLogout() {
    router.post('/auth/logout')
  }

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
      <button onClick={handleExport}>Export members</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
