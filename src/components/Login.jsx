import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(""); // To display success/error messages
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setMessage(""); // Clear any previous messages

    try {
      // Send login data to the backend
      const response = await fetch("https://study-lab-server-side.vercel.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle non-200 HTTP responses
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong!");
      }

      // Parse JSON response
      const data = await response.json();

      // Save JWT token to localStorage
      localStorage.setItem("token", data.token);

      // Success message and redirection
      setMessage(`Welcome back, ${data.user.name}`);
      setTimeout(() => navigate("/dashboard"), 2000); // Redirect to dashboard after 2 seconds
    } catch (error) {
      // Error message from backend
      setMessage(error.message || "Something went wrong!");
    }
  };

  return (
    <div>
      <Navbar />
    <div className="container mx-auto max-w-md py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

      {/* Display Success/Error Messages */}
      {message && (
        <div
          className={`text-center mb-4 ${
            message.includes("Welcome") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full border rounded px-3 py-2"
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
            placeholder="Enter your password"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      {/* Link to Signup Page */}
      <div className="text-center mt-4">
        <p>
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup here
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
