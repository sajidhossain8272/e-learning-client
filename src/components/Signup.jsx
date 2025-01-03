import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Navbar from "./Navbar";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(""); // To display success/error messages
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setMessage(""); // Clear any previous messages

    try {
      // Send registration data to the backend using fetch
      const response = await fetch(
        "https://study-lab-server-side.vercel.app/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        // Handle non-200 HTTP responses
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong!");
      }

      // Parse JSON response
      const data = await response.json();

      // Success message
      setMessage(`Registration successful! Welcome, ${data.user.name}`);

      // Redirect to login page
      setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds

      // Clear the form
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      // Error message from backend
      setMessage(error.message || "Something went wrong!");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-lg px-4 py-8 sm:py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Signup
        </h1>

        {/* Display Success/Error Messages */}
        {message && (
          <div
            className={`text-center mb-6 ${
              message.includes("successful")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {message}
          </div>
        )}

        {/* Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white shadow-md rounded-lg p-6 sm:p-8"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </form>

        {/* Login Redirect Link */}
        <div className="text-center mt-6">
          <p>
            Already signed up?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:underline"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
