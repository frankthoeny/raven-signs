// utils/AuthService.js
import { isTokenExpired } from './withAuth.js'

export const isLoggedIn = () => {
       // Checks if there is a saved token and it's still valid
      const token = localStorage.getItem('jwtToken')
      return !!token && !isTokenExpired(token) // handwaiving here
   }

export const logout = () => {
     localStorage.removeItem('jwtToken')
     window.location.reload()
   }
