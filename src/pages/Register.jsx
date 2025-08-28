// src/pages/Register.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import InputField from '../components/InputField'
import Button from '../components/Button'

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: ''
  })
  const [error, setError] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    // Validation
    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.password || !formData.isAgency) {
      setError('Please fill in all required fields')
      return
    }
    
    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('popx_users') || '[]')
    if (users.some(user => user.email === formData.email)) {
      setError('Email already registered')
      return
    }
    
    // Save user to localStorage
    const newUser = { ...formData }
    users.push(newUser)
    localStorage.setItem('popx_users', JSON.stringify(users))
    
    register(newUser)
    navigate('/account')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 ">
      <div className="max-w-md w-full  rounded-lg  p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Create your PopX account</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <InputField
            label="Full Name"
            name="fullName"
            placeholder="Harry Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          
          <InputField
            label="Phone number"
            name="phoneNumber"
            placeholder="1234567890"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          
          <InputField
            label="Email address"
            name="email"
            type="email"
            placeholder="harry@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <InputField
            label="Company name"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Are you an Agency?*
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                  className="text-[#6C25FF] focus:ring-[#6C25FF]"
                  required
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                  className="text-[#6C25FF] focus:ring-[#6C25FF]"
                  required
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          
          <Button type="submit" variant="primary" className='cursor-pointer'>
            Create Account
          </Button>
        </form>
        
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#6C25FF] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register