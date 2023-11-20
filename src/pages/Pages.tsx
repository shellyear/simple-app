import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { SignIn } from './SignIn'
import { Profile } from './Profile'
import { Dashboard } from './Dashboard'
import { ProtectedRoute } from './ProtectedRoute'
import { SignUp } from './SignUp'

export function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
