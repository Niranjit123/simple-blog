import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="border-2 border-red-200 p-4">
      <nav className="flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/contact_us" className="hover:text-blue-500">Contact us</Link>
          <Link href="/blogs" className="hover:text-blue-500">Blogs</Link>
        </div>
        
        <div className="flex space-x-4 items-center">
          {isAuthenticated ? (
            <>
              <span className="text-gray-600">Welcome, {user.name}</span>
              <button 
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                href="/login" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}