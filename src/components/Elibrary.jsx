import { useState } from "react";
import Navbar from "./Navbar";

const Elibrary = () => {
  // Updated book data with links, sources, and genres
  const dummyBooks = [
    {
      id: 1,
      title: "Free C Programming Course",
      source: "GeeksforGeeks",
      genre: "C Programming",
      link: "https://www.geeksforgeeks.org/free-c-programming-course-online/",
    },
    {
      id: 2,
      title: "C Programming Exam",
      source: "W3Schools",
      genre: "C Programming",
      link: "https://www.w3schools.com/c/c_exam.php",
    },
    {
      id: 3,
      title: "Free C++ Course Certification",
      source: "GeeksforGeeks",
      genre: "C++ Programming",
      link: "https://www.geeksforgeeks.org/courses/free-cpp-course-online-certification",
    },
    {
      id: 4,
      title: "C++ Exam",
      source: "W3Schools",
      genre: "C++ Programming",
      link: "https://www.w3schools.com/cpp/cpp_exam.asp",
    },
    {
      id: 5,
      title: "JavaScript Certification",
      source: "JavaTpoint",
      genre: "JavaScript",
      link: "https://www.javatpoint.com/javascript-certification-free",
    },
    {
      id: 6,
      title: "Best Free JavaScript Courses",
      source: "GeeksforGeeks",
      genre: "JavaScript",
      link: "https://www.geeksforgeeks.org/best-free-javascript-courses/",
    },
    {
      id: 7,
      title: "JavaScript Tutorial",
      source: "W3Schools",
      genre: "JavaScript",
      link: "https://www.w3schools.com/js/",
    },
    {
      id: 8,
      title: "Java Tutorial",
      source: "W3Schools",
      genre: "Java Programming",
      link: "https://www.w3schools.com/java/",
    },
    {
      id: 9,
      title: "Java Online Course",
      source: "GeeksforGeeks",
      genre: "Java Programming",
      link: "https://www.geeksforgeeks.org/courses/java-online-course-complete-beginner-to-advanced",
    },
    {
      id: 10,
      title: "Free Python Course",
      source: "GeeksforGeeks",
      genre: "Python Programming",
      link: "https://www.geeksforgeeks.org/free-python-course/",
    },
    {
      id: 11,
      title: "Python Introduction",
      source: "W3Schools",
      genre: "Python Programming",
      link: "https://www.w3schools.com/python/python_intro.asp",
    },
  ];

  // State variables
  const [books, setBooks] = useState(dummyBooks);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");

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
  const handleGenreFilter = (genre) => {
    setGenreFilter(genre);
    const filteredBooks = dummyBooks.filter((book) =>
      genre === "" ? true : book.genre === genre
    );
    setBooks(filteredBooks);
    setCurrentPage(1); // Reset to the first page
  };

  // Handle filter by source
  const handleSourceFilter = (source) => {
    setSourceFilter(source);
    const filteredBooks = dummyBooks.filter((book) =>
      source === "" ? true : book.source === source
    );
    setBooks(filteredBooks);
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">E-Library</h1>

        {/* Search, Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border px-3 py-2 rounded w-full md:w-1/3"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
          <select
            value={genreFilter}
            onChange={(e) => handleGenreFilter(e.target.value)}
            className="border px-3 py-2 rounded w-full md:w-1/3"
          >
            <option value="">All Genres</option>
            <option value="C Programming">C Programming</option>
            <option value="C++ Programming">C++ Programming</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java Programming">Java Programming</option>
            <option value="Python Programming">Python Programming</option>
          </select>
          <select
            value={sourceFilter}
            onChange={(e) => handleSourceFilter(e.target.value)}
            className="border px-3 py-2 rounded w-full md:w-1/3"
          >
            <option value="">All Sources</option>
            <option value="GeeksforGeeks">GeeksforGeeks</option>
            <option value="W3Schools">W3Schools</option>
            <option value="JavaTpoint">JavaTpoint</option>
          </select>
        </div>

        {/* Book List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
            >
              <h3 className="text-xl font-bold mb-2">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-2">Source: {book.source}</p>
              <p className="text-sm text-gray-600 mb-2">Genre: {book.genre}</p>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-2 px-4 rounded mt-auto text-center"
              >
                Read More
              </a>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
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
      </div>
    </div>
  );
};

export default Elibrary;
