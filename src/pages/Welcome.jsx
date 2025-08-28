
import { Link } from 'react-router-dom'
import Button from '../components/Button'

function Welcome() {
  return (
    <div className="min-h-screen flex flex-col relative justify-center items-center">
      <div className="absolute bottom-0 md:relative flex-grow flex items-center justify-center px-4">
        <div className="max-w-md w-full  rounded-lg  p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className=" ">
            <Link to="/register" className='mb-4'>
              <Button variant="primary" className='my-4 cursor-pointer'>Create Account</Button>
            </Link>
            <Link to="/login">
              <Button variant="secondary" className='bg-purple-300 cursor-pointer'>Already Registered? Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome