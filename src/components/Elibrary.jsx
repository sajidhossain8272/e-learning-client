import { useState } from "react";
import Navbar from "./Navbar";

const Elibrary = () => {
  // Dummy book data
  const dummyBooks = [
    {
      id: 1,
      title: "Learn JavaScript",
      author: "John Doe",
      genre: "Programming",
      content:
        "This is a beginner's guide to JavaScript. Learn the basics of JavaScript programming language. This book covers JavaScript concepts and implementation. This is a beginner's guide to JavaScript. Learn the basics of JavaScript programming language. This book covers JavaScript concepts and implementation. ",
    },
    {
      id: 2,
      title: "Master React",
      author: "Jane Smith",
      genre: "Programming",
      content:
        "This book covers React concepts and implementation. Learn React from scratch. This book covers React concepts and implementation. Learn React from scratch.",
    },
    {
      id: 3,
      title: "Python Basics",
      author: "Emily Johnson",
      genre: "Programming",
      content: "Learn Python programming from scratch. This book covers Python basics and implementation. Learn Python programming from scratch. This book covers Python basics and implementation.",
    },
    {
      id: 4,
      title: "Algorithms 101",
      author: "Robert Brown",
      genre: "Computer Science",
      content: "A guide to understanding algorithms. Learn the basics of algorithms and data structures. A guide to understanding algorithms. Learn the basics of algorithms and data structures.",
    },
    {
      id: 5,
      title: "Database Design",
      author: "Alice Davis",
      genre: "Computer Science",
      content: "An introduction to database design and management. Learn the basics of database design. An introduction to database design and management. Learn the basics of database design.",
    },
    {
      id: 6,
      title: "Web Development",
      author: "Chris Wilson",
      genre: "Programming",
      content: "Learn the fundamentals of web development. This book covers web development concepts and implementation. Learn the fundamentals of web development. This book covers web development concepts and implementation.",
    },
    {
      id: 7,
      title: "Networking Essentials",
      author: "Sarah Lee",
      genre: "Computer Science",
      content: "A beginner's guide to computer networking. Learn the basics of computer networking. A beginner's guide to computer networking. Learn the basics of computer networking.",
    },
    {
      id: 8,
      title: "Cloud Computing",
      author: "Michael Taylor",
      genre: "Technology",
      content: "Learn the basics of cloud computing. This book covers cloud computing concepts and implementation. Learn the basics of cloud computing. This book covers cloud computing concepts and implementation.",
    },
    {
      id: 9,
      title: "AI & Machine Learning",
      author: "Emma Martinez",
      genre: "Technology",
      content: "Introduction to AI and machine learning concepts. Learn the basics of AI and machine learning. Introduction to AI and machine learning concepts. Learn the basics of AI and machine learning.",
    },
    {
      id: 10,
      title: "Cybersecurity Basics",
      author: "Daniel Hernandez",
      genre: "Technology",
      content: "An overview of cybersecurity essentials. Learn the basics of cybersecurity. An overview of cybersecurity essentials. Learn the basics of cybersecurity.",
    },
    {
      id: 11,
      title: "Linear Algebra",
      author: "Sophia White",
      genre: "Mathematics",
      content: "Understanding the basics of linear algebra. Learn the fundamentals of linear algebra. Understanding the basics of linear algebra. Learn the fundamentals of linear algebra.",
    },
    {
      id: 12,
      title: "Discrete Mathematics",
      author: "William Thomas",
      genre: "Mathematics",
      content: "A guide to discrete mathematics concepts. Learn the basics of discrete mathematics. A guide to discrete mathematics concepts. Learn the basics of discrete mathematics.",
    },
    {
      id: 13,
      title: "Introduction to Physics",
      author: "Elizabeth Moore",
      genre: "Science",
      content: "Basics of physics for beginners. Learn the fundamentals of physics. Basics of physics for beginners. Learn the fundamentals of physics.",
    },
    {
      id: 14,
      title: "Organic Chemistry",
      author: "James Clark",
      genre: "Science",
      content: "An introduction to organic chemistry. Learn the basics of organic chemistry. An introduction to organic chemistry. Learn the basics of organic chemistry.",
    },
    {
      id: 15,
      title: "Data Structures",
      author: "Olivia Martinez",
      genre: "Computer Science",
      content: "Learn the basics of data structures. This book covers data structures concepts and implementation. Learn the basics of data structures. This book covers data structures concepts and implementation.",
    },
    {
      id: 16,
      title: "Statistics Made Simple",
      author: "Benjamin Hall",
      genre: "Mathematics",
      content: "A beginner's guide to statistics. Learn the basics of statistics. A beginner's guide to statistics. Learn the basics of statistics.",
    },
    {
      id: 17,
      title: "Machine Learning Advanced",
      author: "Grace Allen",
      genre: "Technology",
      content: "Advanced concepts in machine learning. Learn advanced machine learning algorithms. Advanced concepts in machine learning. Learn advanced machine learning algorithms.",
    },
    {
      id: 18,
      title: "Astronomy for Beginners",
      author: "Lucas Martin",
      genre: "Science",
      content: "A beginner's guide to astronomy. Learn the basics of astronomy. A beginner's guide to astronomy. Learn the basics of astronomy.",
    },
    {
      id: 19,
      title: "Understanding Robotics",
      author: "Chloe Young",
      genre: "Technology",
      content: "Basics of robotics and their applications.  Learn the fundamentals of robotics. Basics of robotics and their applications.  Learn the fundamentals of robotics.",
    },
    {
      id: 20,
      title: "Number Theory",
      author: "Jacob King",
      genre: "Mathematics",
      content: "A guide to understanding number theory. Learn the basics of number theory. A guide to understanding number theory. Learn the basics of number theory.",
    },
  ];

  // State variables
  const [books, setBooks] = useState(dummyBooks);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  // Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / booksPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle search
  const handleSearch = () => {
    const filteredBooks = dummyBooks.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setBooks(filteredBooks);
    setCurrentPage(1); // Reset to the first page
  };

  // Handle filter by genre
  const handleFilter = (genre) => {
    setGenreFilter(genre);
    const filteredBooks = dummyBooks.filter((book) =>
      genre === "" ? true : book.genre === genre
    );
    setBooks(filteredBooks);
    setCurrentPage(1); // Reset to the first page
  };

  // Handle book selection for reading
  const handleRead = (book) => setSelectedBook(book);

  // Handle stop reading
  const handleStopReading = () => setSelectedBook(null);

  return (
    <div>
      <Navbar />
      <div className='container mx-auto py-8 px-4'>
        <h1 className='text-3xl font-bold text-center mb-8'>E-Library</h1>

        {/* Search, Filter, Sort */}
        {!selectedBook && (
          <div className='flex flex-wrap gap-4 mb-8'>
            <input
              type='text'
              placeholder='Search by title...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='border px-3 py-2 rounded w-full md:w-1/3'
            />
            <button
              onClick={handleSearch}
              className='bg-blue-500 text-white px-4 py-2 rounded'
            >
              Search
            </button>
            <select
              value={genreFilter}
              onChange={(e) => handleFilter(e.target.value)}
              className='border px-3 py-2 rounded w-full md:w-1/3'
            >
              <option value=''>All Genres</option>
              <option value='Programming'>Programming</option>
              <option value='Computer Science'>Computer Science</option>
              <option value='Technology'>Technology</option>
              <option value='Mathematics'>Mathematics</option>
              <option value='Science'>Science</option>
            </select>
          </div>
        )}

        {/* Book List */}
        {!selectedBook && (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {currentBooks.map((book) => (
                <div
                  key={book.id}
                  className='bg-white shadow-md rounded-lg p-4 flex flex-col justify-between'
                >
                  <h3 className='text-xl font-bold mb-2'>{book.title}</h3>
                  <p className='text-sm text-gray-600 mb-2'>
                    Author: {book.author}
                  </p>
                  <p className='text-sm text-gray-600 mb-2'>
                    Genre: {book.genre}
                  </p>
                  <button
                    onClick={() => handleRead(book)}
                    className='bg-green-500 text-white py-2 px-4 rounded mt-auto'
                  >
                    Read
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className='flex justify-center mt-8'>
              {[...Array(totalPages).keys()].map((page) => (
                <button
                  key={page}
                  onClick={() => paginate(page + 1)}
                  className={`mx-2 px-4 py-2 rounded ${
                    currentPage === page + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {page + 1}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Book Reading Section */}
        {selectedBook && (
          <div className='mt-8 bg-gray-100 p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>
              Reading: {selectedBook.title}
            </h2>
            <p className='mb-4'>
              <strong>Author:</strong> {selectedBook.author}
            </p>
            <p className='mb-4'>
              <strong>Content:</strong> {selectedBook.content}
            </p>
            <button
              onClick={handleStopReading}
              className='bg-red-500 text-white py-2 px-4 rounded'
            >
              Stop Reading
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Elibrary;
