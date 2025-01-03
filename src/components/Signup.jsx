import { useState } from "react";
import Navbar from "./Navbar";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(""); // To display success/error messages

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
      const response = await fetch("http://localhost:5000/api/auth/signup", {
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

      // Success message
      setMessage(`Registration successful! Welcome, ${data.user.name}`);

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
    <div className="container mx-auto max-w-md py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Signup</h1>

      {/* Display Success/Error Messages */}
      {message && (
        <div
          className={`text-center mb-4 ${
            message.includes("successful") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </div>
      )}

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full border rounded px-3 py-2"
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
            placeholder="Create a password"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
