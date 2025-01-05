import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <header className="bg-blue-500 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">Study Lab</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="lg:hidden text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:items-center lg:gap-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-blue-500 lg:bg-transparent flex-col lg:flex-row ${
            isMobileMenuOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="hover:underline font-semibold py-2 px-4 lg:py-0"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="hover:underline font-semibold py-2 px-4 lg:py-0"
          >
            Dashboard
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="hover:underline font-semibold py-2 px-4 lg:py-0"
            >
              Services
            </button>
            <div
              className={`absolute bg-white text-blue-500 rounded shadow-lg mt-2 w-40 lg:w-48 ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              <Link
                to="/e-library"
                className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
              >
                E-Library
              </Link>
              <div className="relative">
                {/* <button className="block w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white">
                  Course
                </button> */}
                <Link
                  to="/online-modules"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Online Modules
                </Link>
                <Link
                  to="/lessons"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Lessons
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/faculty"
            className="hover:underline font-semibold py-2 px-4 lg:py-0"
          >
            Faculty
          </Link>

          <Link
            to="https://nub.ac.bd/"
            className="hover:underline font-semibold py-2 px-4 lg:py-0"
          >
            About Nub
          </Link>

         

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-4 mt-4 lg:hidden">
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
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex gap-4">
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
