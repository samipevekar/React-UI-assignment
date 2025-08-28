
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { currentUser, logout } = useAuth()

  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-[#6C25FF]">PopX</div>
        {currentUser && (
          <div className="flex items-center space-x-4">
            {/* <span className="text-gray-700">{currentUser.email}</span> */}
            <button 
              onClick={logout}
              className="bg-[#6C25FF] text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar