
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import InputField from '../components/InputField'
import Button from '../components/Button'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('popx_users') || '[]')
    const user = users.find(u => u.email === email && u.password === password)
    
    if (user) {
      login(user)
      navigate('/account')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-md w-full rounded-lg p-8 absolute top-0 md:relative">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Signin to your PopX account</h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <InputField
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <Button type="submit" variant="primary" className=" bg-gray-400 cursor-pointer">
            Login
          </Button>
        </form>
        
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#6C25FF] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login