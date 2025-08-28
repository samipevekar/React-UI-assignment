// src/pages/Account.jsx
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'

function Account() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
    }
  }, [currentUser, navigate])

  if (!currentUser) {
    return null
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h1>
        
        <div className=" rounded-lg  p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-[#6C25FF] rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {currentUser.fullName ? currentUser.fullName.charAt(0) : 'U'}
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{currentUser.fullName || 'User'}</h2>
              <p className="text-gray-600">{currentUser.email}</p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-700">
              Lorem ipsum Dolor Sit Aeneat, Consistent Sedipiscing Ete, Sed Dam, Newbury: Ermora Tiempur Inhalant Ut Labore Et Doloris Magnus Aliquyam Ent, Sed Dam.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg  p-6">
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{currentUser.fullName || 'Not provided'}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="font-medium">{currentUser.phoneNumber || 'Not provided'}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="font-medium">{currentUser.email}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Company Name</p>
              <p className="font-medium">{currentUser.companyName || 'Not provided'}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Agency</p>
              <p className="font-medium">{currentUser.isAgency === 'yes' ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account