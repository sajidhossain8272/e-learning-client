import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  // Fetch user profile on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("https://study-lab-server-side.vercel.app/api/profile", {
      headers: { Authorization: token },
    })
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
        setFormData(data); // Pre-fill the form
      })
      .catch(() => setMessage("Failed to fetch profile"));
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle profile update
  const handleUpdate = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    fetch("https://study-lab-server-side.vercel.app/api/profile/update", {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
        setMessage("Profile updated successfully");
        setIsEditing(false);
      })
      .catch(() => setMessage("Failed to update profile"));
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        {/* Dashboard Header */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to Your Dashboard, {profile.name}
        </h1>

        {/* Profile Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Profile Information</h2>

          {message && <p className="text-green-500 mb-4">{message}</p>}

          {!isEditing ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <p><strong>Student ID:</strong> {profile.studentId || "N/A"}</p>
                <p><strong>Phone:</strong> {profile.phone || "N/A"}</p>
                <p><strong>Department:</strong> {profile.department || "N/A"}</p>
                <p><strong>Semester:</strong> {profile.semester || "N/A"}</p>
                <p><strong>Section:</strong> {profile.section || "N/A"}</p>
                <p><strong>Favourite Subject:</strong> {profile.favSubject || "N/A"}</p>
              </div>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </>
          ) : (
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border px-3 py-2"
              />
              <input
                type="text"
                name="studentId"
                value={formData.studentId || ""}
                onChange={handleChange}
                placeholder="Student ID"
                className="w-full border px-3 py-2"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border px-3 py-2"
              />
              <input
                type="text"
                name="department"
                value={formData.department || ""}
                onChange={handleChange}
                placeholder="Department"
                className="w-full border px-3 py-2"
              />
              <input
                type="text"
                name="semester"
                value={formData.semester || ""}
                onChange={handleChange}
                placeholder="Semester"
                className="w-full border px-3 py-2"
              />
              <input
                type="text"
                name="section"
                value={formData.section || ""}
                onChange={handleChange}
                placeholder="Section"
                className="w-full border px-3 py-2"
              />
              <input
                type="text"
                name="favSubject"
                value={formData.favSubject || ""}
                onChange={handleChange}
                placeholder="Favourite Subject"
                className="w-full border px-3 py-2"
              />
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="bg-red-500 text-white py-2 px-4 rounded ml-4"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </form>
          )}
        </div>

        {/* Modules, Lessons, and Courses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-500 text-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Online Modules</h3>
            <p className="mb-6">Explore a variety of engaging quizzes to test your knowledge and enhance your learning experience.</p>
            <Link to="/online-modules" className="bg-white text-blue-500 py-2 px-4 rounded">
              View Modules
            </Link>
          </div>
          <div className="bg-rose-500 text-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-2">E-Library</h3>
            <p className="mb-6">Access thousands of books and resources online. Expand your knowledge with just a click.</p>
            <Link to="/e-library" className="bg-white text-blue-500 py-2 px-4 rounded">
              View Modules
            </Link>
          </div>
          <div className="bg-green-500 text-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Lessons</h3>
            <p className="mb-6">Browse through engaging video tutorials curated by experts to enhance your learning experience</p>
            <Link to="/lessons" className="bg-white text-green-500 py-2 px-4 rounded">
              View Lessons
            </Link>
          </div>
          {/* <div className="bg-purple-500 text-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Courses</h3>
            <p className="mb-4">Explore and enroll in courses tailored to your interests.</p>
            <button className="bg-white text-purple-500 py-2 px-4 rounded">
              View Courses
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
