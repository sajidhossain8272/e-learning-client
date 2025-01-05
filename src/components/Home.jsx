import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaBook, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa"; // Import icons

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className='text-center py-20 bg-cover bg-center text-white'
        style={{
          backgroundImage: `url('./CampusImage.png')`,
        }}
      >
        <div className='bg-blue-600 bg-opacity-60 py-12 px-6 rounded-lg inline-block'>
          <h1 className='text-4xl font-bold'>Welcome to Study Lab</h1>
          <p className='text-xl mt-4'>
            Empowering Learning with E-Library, Online Modules, and Lessons.
          </p>
          <p className='text-lg mt-4'>
            Northern University Bangladesh - Your partner in academic success!
          </p>
        </div>
      </section>

      {/* About Study Lab */}
      <section className='py-16 bg-gray-100 text-center'>
        <h2 className='text-3xl font-bold mb-6'>About Study Lab</h2>
        <p className='max-w-2xl mx-auto text-lg'>
          Study Lab is an innovative platform designed to enhance your learning
          experience. With our integrated tools like the E-Library, online
          modules, and lessons, students and educators can collaborate and
          explore new horizons of knowledge. Discover a seamless blend of modern
          education and accessibility right at your fingertips.
        </p>
      </section>

      {/* Services Section */}
      <section
        id='services'
        className='flex flex-wrap justify-center gap-8 py-16 bg-white'
      >
        {/* E-Library */}
        <Link
          to='e-library'
          className='text-center flex flex-col items-center max-w-xs shadow-lg rounded-lg p-4 hover:bg-gray-50'
        >
          <FaBook className='text-blue-500 text-6xl mb-4' />
          <h2 className='text-2xl font-semibold mb-4'>E-Library</h2>
          <p className='text-lg'>
            Access thousands of books and resources online. Expand your
            knowledge with just a click.
          </p>
        </Link>

        {/* Online Modules */}
        <Link
          to='/online-modules'
          className='text-center flex flex-col items-center max-w-xs shadow-lg rounded-lg p-4 hover:bg-gray-50'
        >
          <FaLaptopCode className='text-blue-500 text-6xl mb-4' />
          <h2 className='text-2xl font-semibold mb-4'>Online Modules</h2>
          <p className='text-lg'>
            Explore a variety of engaging quizzes to test your knowledge and
            enhance your learning experience.
          </p>
        </Link>

        {/* Lessons */}
        <Link
          to='/lessons'
          className='text-center flex flex-col items-center max-w-xs shadow-lg rounded-lg p-4 hover:bg-gray-50'
        >
          <FaChalkboardTeacher className='text-blue-500 text-6xl mb-4' />
          <h2 className='text-2xl font-semibold mb-4'>Lessons</h2>
          <p className='text-lg'>
            Detailed lessons crafted by experts to give you an in-depth
            understanding of every topic.
          </p>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
