import { Outlet, useNavigate } from 'react-router-dom'

import { User } from '../types'

export type OutletContext = {
  user: User
}

const useAuthState = () => ({
  user: undefined,
  loading: false
})

export function ProtectedRoute() {
  const { user, loading } = useAuthState()
  const navigate = useNavigate()

  if (!user) {
    navigate('/sign-in')
    return null
  }

  if (loading) {
    return (
      <div className="loading-component">
        <p>Loading...</p>
      </div>
    )
  }

  return <Outlet context={{ user }} />
}
