import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Check login status from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = () => {
    navigate("/login"); // Redirect to Login page
  };

  const handleLogout = () => {
    // Remove JWT token from localStorage
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/"); // Redirect to Home page
  };

  return (
    <header className="bg-blue-500 text-white py-4">
      <nav className="flex items-center justify-between px-8">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">Study Lab</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex lg:gap-8 gap-4">
          <Link to="/" className="hover:underline font-semibold">
            Home
          </Link>
          <Link to="/dashboard" className="hover:underline font-semibold">
            Dashboard
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="hover:underline font-semibold"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white text-blue-500 rounded shadow-lg mt-2 w-40">
                <Link
                  to="/e-library"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  E-Library
                </Link>
                <div className="relative group">
                  <button className="block w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white">
                    Course
                  </button>
                  <Link
                      to="/course/modules"
                      className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                    >
                      Modules
                    </Link>
                    <Link
                      to="/course/lessons"
                      className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                    >
                      Lessons
                    </Link>
                 
                </div>
              </div>
            )}
          </div>

          <Link to="https://nub.ac.bd/" className="hover:underline font-semibold lg:inline hidden">
            About Us
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          {!isLoggedIn ? (
            <button
              onClick={handleLogin}
              className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-700 hover:text-white"
            >
              Log In
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-700 hover:text-white"
            >
              Log Out
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
